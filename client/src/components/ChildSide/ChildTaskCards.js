import ChildTaskModal from './ChildTaskModal';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../styles/parent-task-cards.css';
import { toggleChildDetails } from '../../actions/toggles';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  addTaskView: state.toggles.addTaskView,
});

export const ChildTaskCards = props => {
  const statusSent = { color: 'orange' }
  const statusPending = { color: 'blue' }
  const statusApproved = { color: 'green', textDecoration: 'line-through' }
  const childCards = props.user.tasks.map((task, i) =>
    <li className='task' key={task.id} 
      onClick={() => props.dispatch(toggleChildDetails(task))}>
      <div className='task-status'>
      {task.complete ? 
          <i className='fas fa-check-double' style={statusApproved}></i> : 
            task.childComplete ? <i className='fas fa-stopwatch' style={statusPending}></i> : 
            <i className='fas fa-tasks' style={statusSent}></i>}
      </div>
      <div className='task-details'>
        <p>{task.name}</p>
      </div>
    </li>);
  return (
    <div className='feature-card'>
      <div className='main-card'>
        <div className='side-avatar'>
            <i className='fa fa-id-card fa-5x' aria-hidden="true"></i> 
            <p>{props.user.name}</p>
            <p>currentPoints: {props.user.currentPoints}</p>
            <Link to='/reward_page_child'><i className='fa fa-gift fa-2x' aria-hidden="true"></i></Link>
        </div>
        <div className='task-cards'>
          <ul className='tasks-list'>
            {childCards}
          </ul>
        </div>
      </div>
      <ChildTaskModal />
    </div>
  );
}

export default connect(mapStateToProps)(ChildTaskCards);