import ChildDashboardHeader from './ParentDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import { toggleModal } from '../actions';

import ChildTaskModal from './ChildTaskModal';


const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
  user: state.auth.user,
  tasks: state.auth.user.tasks,
  loggedIn: state.auth.user !== null,
});

export class ChildDashboard extends React.Component{
  componentDidMount(){
  }
  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
    return(
      //I was going to check if the task props was connected by logging it
      <div>

        <ChildDashboardHeader />
        <div className='feature-card'>
          <div className='side-avatar'>
            <i className='fa fa-id-card fa-5x' aria-hidden="true"></i>
            <hgroup> 
              {/* hgroup appeared... not sure how */}
              <h2>{this.props.user.name}</h2>
              <h2>currentPoints: {this.props.user.currentPoints}</h2>
              <Link to='/reward_page_child'><i className='fa fa-gift fa-2x' aria-hidden="true"></i></Link>
            </hgroup>
          </div>
          <ul className='tasks-list'>
         
            {this.props.tasks.map((task) =>
              <li className='task' 
              key={`${task.id}`}
              onClick={() => this.props.dispatch(toggleModal())}
              >
                <div className='task-details'>
                  <p>Task: {task.name}</p>
                  <p>Point Value: {task.pointValue}</p>
                  
                </div>
                <ChildTaskModal 
                
              />
              </li>              
            )}
          </ul>
        </div>


      </div>
    );
  }
}

export default connect(mapStateToProps)(ChildDashboard);
