import EditTaskForm from './EditTaskForm';
import ParentDashboardHeader from './ParentDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import { isEditing, isAdding, toggleModal, showDetails } from '../actions';
import { fetchTasks, deleteTask } from '../actions/tasks';
import { Redirect } from 'react-router-dom';

import '../styles/parent-dashboard.css';
import AddTaskForm from './AddTaskForm';
import ParentTaskModal from './ParentTaskModal';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  // children: state.auth.user.child,
  tasks: state.tasks.tasks,
  isEditing: state.main.isEditing.editing,
  isAdding: state.main.isAdding.adding
});

export class ParentDashboard extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchTasks());
  }
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    if (!this.props.loggedIn || !this.props.user.isParent) {
      return <Redirect to='/' />;
    }
    const taskCards = this.props.user.child.map((child, i) =>
      <div className='feature-card' key={child.id}>
        <div className='side-avatar'>
          <i className='fa fa-id-card fa-5x' aria-hidden="true"></i>
          <p>{child.name}</p>
        </div>
        <div className='task-cards'>
          <ul className='tasks-list'>
            {child.tasks.map((task, i) =>
              <li className='task' key={task.id} onClick={() => {
                this.props.dispatch(toggleModal());
                this.props.dispatch(showDetails(task))
              }
              }>
                <div className='task-details'>
                  <p>Task: {task.name}</p>
                  <p>Point Value: {task.pointValue}</p>
                </div>
                <div className='task-status'>
                  <p className='status'>{task.complete ? 
                    <span>APPROVED</span> : task.childComplete ? 
                      <span>PENDING APPROVAL</span> : <span>NOT STARTED</span>}</p>
                </div>
              </li>
            )}
          </ul>
          {/* <button type='button' name='add-task-btn'
            disabled={this.props.isAdding}
            className='add-task-btn'
            onClick={() => this.props.dispatch(isAdding(child.id))}>
            Add Task
          </button> */}
        </div>
      </div>
    );
    return (
      <div>
        <ParentDashboardHeader />
        <h2 className='greeting'>Hi {this.props.user.name}!</h2>
        <div className='task-cards'>
          {taskCards}
        </div>
        <ParentTaskModal />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ParentDashboard);