import React from 'react';

import {connect} from 'react-redux';
import {toggleSideNav} from '../../actions/toggles';

import '../../styles/side-nav.css';

const mapStateToProps = state => ({
  sideNavView: state.toggles.sideNavView
});

export const LandingSideNav = props => (
  <nav className={props.sideNavView ? 'visible menu' : 'menu'}>
    <i className='fa fa-window-close fa-lg' aria-hidden='true'
      onClick={() => props.dispatch(toggleSideNav())}></i>
    <ul className='links'>
      <li>
        <a href="#parent-login" 
          onClick={() => props.dispatch(toggleSideNav())}>Parent Log In
        </a>
      </li>
      <li>
        <a href="#child-login" 
          onClick={() => props.dispatch(toggleSideNav())}>Child Log In
        </a>
      </li>
      <li>
        <a href="#signup" 
          onClick={() => props.dispatch(toggleSideNav())}>Sign Up
        </a>
      </li>
    </ul>
  </nav>
);

export default connect(mapStateToProps)(LandingSideNav);