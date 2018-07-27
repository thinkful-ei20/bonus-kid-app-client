import ParentDashboardHeader from './ParentDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import { toggleModal, showDetails, isAdding, toggleAddModal } from '../actions';
import { Redirect } from 'react-router-dom';

import '../styles/parent-dashboard.css';
import ParentTaskModal from './ParentTaskModal';
import AddTaskModal from './AddTaskModal';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  isEditing: state.main.isEditing.editing,
  isAdding: state.main.isAdding.adding,
});

export class ParentDashboard extends React.Component {
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
        <div className='main-card'>
          <div className='side-avatar'>
            <i className='fas fa-user-ninja fa-5x' aria-hidden="true"></i>
            <p>{child.name}</p>
          </div>
          <div className='task-cards'>
            <ul className='tasks-list'>
              {child.tasks.map((task, i) =>
                <li className='task' key={task.id} onClick={() => {
                  this.props.dispatch(toggleModal());
                  this.props.dispatch(showDetails(child.id, task))
                }
                }>
                  <div className='task-status'>
                    
                  </div>
                  <div className='task-details'>
                    <p>{task.name}</p>
                  </div>
                  
                </li>
              )}
            </ul>
          </div>
        </div>
        <i className='add-task-btn fas fa-plus fa-2x'
          onClick={() => {
            this.props.dispatch(isAdding(child.id));
            this.props.dispatch(toggleAddModal())
          }}></i>
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
        <AddTaskModal />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ParentDashboard);