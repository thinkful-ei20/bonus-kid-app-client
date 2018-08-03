import React from 'react';
import { connect } from 'react-redux';

import '../../styles/task-cards.css';
import { toggleAddTaskForm, toggleParentDetails } from '../../actions/toggles';
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
  const statusApproved = { color: 'green', textDecoration: 'line-through' }
  const childCards = props.user.child.map((child, i) =>
    <div className='feature-card' key={child.id}>
      <div className='main-card'>
        <div className='child-info'>
        <p>{child.name}</p>
        <span>{child.currentPoints} <i className="icon fas fa-circle"></i>
        {child.totalPoints} <i className="icon fas fa-crown"></i></span>
        </div>
        <div className='side-avatar'>
          <img src='https://image.ibb.co/c9Ng3z/avatar_1.jpg' alt='avatar of child'></img>
          {/* <i className='fas fa-user-ninja fa-3x' aria-hidden="true"></i> */}
     
        </div>
        <div className='item-cards'>
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