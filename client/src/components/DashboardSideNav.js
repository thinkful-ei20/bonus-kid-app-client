import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { toggleSideNav } from '../actions';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import '../styles/dashboard-side-nav.css';

const mapStateToProps = state => ({
  sideNavView: state.main.sideNavView,
  username: state.auth.user.username
});

export class DashboardSideNav extends React.Component{ 
  render(){
    return(
      <nav id="menu" className={this.props.sideNavView ? 'visible' : ''}>
        <i className="fa fa-window-close fa-lg" aria-hidden="true"
          onClick={() => this.props.dispatch(toggleSideNav())}></i>
        <ul className="links">
          <li>
            <a href="#create-tasks" 
              onClick={() => this.props.dispatch(toggleSideNav())}>Create a Task
            </a>
          </li>
          <li>
            <a href="#rewards" 
              onClick={() => this.props.dispatch(toggleSideNav())}>Rewards
            </a>
          </li>
          <li>
            <a href="#settings" 
              onClick={() => this.props.dispatch(toggleSideNav())}>Settings
            </a>
          </li>
          <li>
            <p onClick={() => {
              this.props.dispatch(clearAuth());
              clearAuthToken();
              this.props.dispatch(toggleSideNav());
              this.props.history.push('/');}
            }>LOG OUT <span>{this.props.username}</span>
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(connect(mapStateToProps)(DashboardSideNav));