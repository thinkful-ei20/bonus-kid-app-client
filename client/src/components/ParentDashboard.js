import EditTaskForm from './EditTaskForm';
import ParentDashboardHeader from './ParentDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import { isEditing, isAdding, toggleModal } from '../actions';
import { fetchTasks, deleteTask } from '../actions/tasks';
import { Redirect } from 'react-router-dom';

import '../styles/parent-dashboard.css';
import AddTaskForm from './AddTaskForm';
import ParentTaskModal from './ParentTaskModal';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  tasks: state.tasks.tasks,
  isEditing: state.main.isEditing.editing,
  isAdding: state.main.isAdding.adding
});

export class ParentDashboard extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchTasks());
  }
  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    if(!this.props.loggedIn || !this.props.user.isParent){
      return <Redirect to='/' />;
    }
    const childTaskIds = this.props.user.child;
    const childTasks = {};
    if(childTaskIds!==[]){
      for(let i=0; i<childTaskIds.length; i++){
        childTasks[childTaskIds[i]] = [];
      }
      for(let i=0; i<this.props.tasks.length; i++){
        let id = this.props.tasks[i].childId;
        if(childTaskIds.includes(id)){
          if(childTasks[id] === []){
            childTasks[id] = this.props.tasks[i];
          } else {
            childTasks[id].push(this.props.tasks[i]);
          }
        } 
      }
    }
    const taskCards = Object.keys(childTasks).map((childId, i) => 
      <div className='feature-card' key={childId}>
        <div className='side-avatar'>
          <i className='fa fa-id-card fa-5x' aria-hidden="true"></i>
          <p>{childId}</p>
        </div>
        <div className='task-cards'>
          <ul className='tasks-list'>
            {childTasks[childId].map((childTask, i) =>
              <li className='task' key={`${childTask.id}`}
                onClick={() => this.props.dispatch(toggleModal())}>
                <div className='task-details'>
                  <p>Task: {childTask.name}</p>
                  <p>Point Value: {childTask.pointValue}</p>
                </div>
                <div className='task-btns'>
                  <button type='button' name='task-edit-btn' 
                    id={`${childTask.id}-edit-btn`} disabled={this.props.isEditing} 
                    className='task-edit-btn' 
                    onClick={() => this.props.dispatch(isEditing(childTask.id, childTask.name))}>
                Edit Task</button>
                  <button type='button' name='task-delete-btn' 
                    id={`${childTask.id}-delete-btn`} disabled={this.props.isEditing} 
                    className='task-delete-btn' 
                    onClick={() => this.props.dispatch(deleteTask(childTask.id))}>
                Delete Task</button>
                </div>
              </li>
            )}
          </ul>
          <button type='button' name='add-task-btn' 
            disabled={this.props.isAdding} 
            className='add-task-btn' 
            onClick={() => this.props.dispatch(isAdding(childId))}>
                Add Task</button>
        </div>
      </div>
    );
    return(
      <div>
        <ParentDashboardHeader />
        <h2 className='greeting'>Hi {this.props.user.name}!</h2>
        <div className='task-cards'>
          {taskCards}
        </div>
        <EditTaskForm />
        <AddTaskForm />
        <ParentTaskModal />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ParentDashboard);