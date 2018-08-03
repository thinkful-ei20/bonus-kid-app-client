import ChildTaskModal from './ChildTaskModal';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../styles/task-cards.css';
import { toggleChildDetails } from '../../actions/toggles';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  addTaskView: state.toggles.addTaskView,
});

export const ChildTaskCards = props => {
  const statusSent = { color: '#afafaf' }
  const statusPending = { color: '#fac822' }
  const statusApproved = { color: '#2ca34a' }
  const childCards = props.user.tasks.map((task, i) =>
    <li className='task' key={task.id} 
      onClick={() => props.dispatch(toggleChildDetails(task))}>
      <div className='task-status'>
      {task.complete ? 
          <i className='fas fa-check' style={statusApproved}></i> : 
            task.childComplete ? <i className='fas fa-stopwatch' style={statusPending}></i> : 
            <i className='fas fa-wrench' style={statusSent}></i>}
      </div>
      <div className='task-details'>
        <p>{task.name}</p>
      </div>
    </li>);
  return (
    <div className='child-dashboard'>
      <div className='feature-card'>
        <div className='main-card'>
          <div className='child-info'>
            <p>{props.user.name}</p>
            <span><Link to='/reward_page_child'>{props.user.currentPoints} <i className="icon fas fa-circle"></i></Link></span>
            {/* <Link to='/reward_page_child'><i className='icon fa fa-gift' aria-hidden="true"></i></Link> </span> */}
          </div> 
          <div className='side-avatar'>
            <img src='https://image.ibb.co/c9Ng3z/avatar_1.jpg' alt='avatar of child'></img>
          </div>
          <div className='item-cards'>
            <ul className='tasks-list'>
              {childCards}
            </ul>
          </div>
        </div>
        <ChildTaskModal />
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ChildTaskCards);