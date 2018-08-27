import ChildSideNav from './ChildSideNav';
import React from 'react';

import {connect} from 'react-redux';
import {toggleSideNav} from '../../actions/toggles';

import '../../styles/header.css';
import '../../styles/child-heading.css';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export const ChildHeader = props => (
  <header className='header'>
    <div className='header-content'>
      <div className='left-header'>
        <i className="fa fa-child fa-lg" aria-hidden="true"></i>
        <h1 role='banner'>BonusKid</h1>
      </div>
      <div className='right-header'>
        <i className='fa fa-bars fa-2x' aria-hidden='true'
          onClick={() => props.dispatch(toggleSideNav())}></i> 
      </div>
      <ChildSideNav />
    </div>
    <h2 className='heading'>Hey <span>{props.user.name}</span>!<br />Let's check out some <span>rewards</span>!</h2> 
  </header>
);

export default connect(mapStateToProps)(ChildHeader);