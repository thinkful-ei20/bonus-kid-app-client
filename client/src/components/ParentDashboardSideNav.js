import React from 'react';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {connect} from 'react-redux';
import {toggleSideNav} from '../actions';

const mapStateToProps = state => ({
  sideNavView: state.main.sideNavView,
  user: state.auth.user
});

export class ParentDashboardSideNav extends React.Component{
  logOut(){
    this.props.dispatch(clearAuth());
    clearAuthToken();
    this.props.dispatch(toggleSideNav());
  }
  render(){
    return(
      <nav className={this.props.sideNavView ? 'visible menu' : 'menu'}>
        <i className="fa fa-window-close fa-lg" aria-hidden="true"
          onClick={() => this.props.dispatch(toggleSideNav())}></i>
        <ul className="links">
          <li>
            <a href="#create-tasks" 
              onClick={() => this.props.dispatch(toggleSideNav())}>Tasks
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
            <p onClick={() => this.logOut()}>LOG OUT <span>{this.props.user.username}</span>
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(ParentDashboardSideNav);