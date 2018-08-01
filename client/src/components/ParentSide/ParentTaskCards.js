import React from 'react';
import moment from 'moment';

import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ChildSignupForm from '../Forms/ChildSignupForm';
import ParentHeader from './ParentHeader';

import '../../styles/parent-task-cards.css';
import { toggleAddTaskForm, toggleParentDetails } from '../../actions/toggles';
import AddTaskForm from '../Forms/AddTaskForm';
import AddTaskModal from './AddTaskModal';
import ParentTaskModal from './ParentTaskModal';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  addTaskView: state.toggles.addTaskView,
});

export const ParentTaskCards = props => {
  const statusSent = { color: 'orange' }
  const statusPending = { color: 'blue' }
  const statusApproved = { color: 'green' }
  const completed = { textDecoration: 'line-through', alignSelf: 'flex-end' };
  const childCards = props.user.child.map((child, i) =>
    <div className='feature-card' key={child.id}>
      <div className='main-card'>
        <div className='child-info'>{child.name}</div>
        <div className='side-avatar'>
          <img src='http://i66.tinypic.com/v45hqg.jpg' alt='avatar of child'></img>
          {/* <i className='fas fa-user-ninja fa-3x' aria-hidden="true"></i> */}
     
        </div>
        <div className='task-cards'>
          <ul className='tasks-list'>
            {child.tasks.map((task, i) =>
              <li className='task' key={task.id} 
                onClick={() => props.dispatch(toggleParentDetails(true, false, task))}>
                <div className='task-status'>
                {task.complete ? 
                    <i className='fas fa-check-double' style={statusApproved}></i> : 
                      task.childComplete ? <i className='fas fa-stopwatch' style={statusPending}></i> : 
                      <i className='fas fa-tasks' style={statusSent}></i>}
                </div>
                <div className='task-details'>
                  <p>{task.name}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      <button className='add-btn'
        onClick={() => {
          props.dispatch(toggleAddTaskForm(child.id));
        }}>Add A Task</button>
    </div>
  );
  return (
    <div className='child-cards'>
      {childCards}
      <AddTaskModal />
      <ParentTaskModal />
    </div>
  );
}

export default connect(mapStateToProps)(ParentTaskCards);