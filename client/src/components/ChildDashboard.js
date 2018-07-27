import ChildDashboardHeader from './ChildDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import { toggleModal, showDetails } from '../actions';

import ChildTaskModal from './ChildTaskModal';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export class ChildDashboard extends React.Component{
  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }

    const taskCard = this.props.user.tasks.map((task, i) => 
      <li className='task' key={task.id} onClick={() => {
        this.props.dispatch(toggleModal());
        this.props.dispatch(showDetails(null, task));
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
    );
    return(

      <div>
        <ChildDashboardHeader />
        <div className='feature-card'>
          <div className='side-avatar'>
            <i className='fa fa-id-card fa-5x' aria-hidden="true"></i>
            <hgroup> 
              <h2>{this.props.user.name}</h2>
              <h2>currentPoints: {this.props.user.currentPoints}</h2>
              <Link to='/reward_page_child'><i className='fa fa-gift fa-2x' aria-hidden="true"></i></Link>
            </hgroup>
          </div>
          <ul className='tasks-list'>

            {taskCard}
          </ul>
        </div>
        <ChildTaskModal />

      </div>
    );
  }
}

export default connect(mapStateToProps)(ChildDashboard);
