import ChildDashboardHeader from './ParentDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
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
      <div>
        <ChildDashboardHeader />
        <div className='feature-card'>
          <div className='side-avatar'>
            <i className='fa fa-id-card fa-5x' aria-hidden="true"></i>
            <hgroup>
              <h2>Hi</h2>
            </hgroup>
          </div>
          <ul className='tasks-list'>
          </ul>
        </div>
        <button onClick={() => this.logOut()}>
          Log Out
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ChildDashboard);