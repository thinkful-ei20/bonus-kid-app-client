import ParentSideNav from './ParentSideNav';
import React from 'react';
import moment from 'moment';

import {connect} from 'react-redux';
import {toggleSideNav} from '../../actions/toggles';

import '../../styles/header.css';
import '../../styles/parent-heading.css';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export const ParentRewardHeader = props => (
  <header className='header'>
    <div className='header-content'>
      <div className='left-header'>
        <i className="fa fa-child fa-lg" aria-hidden="true"></i>
        <h1 role='banner' onClick={() => console.log('button works')}>BonusKid</h1>
      </div>
      <div className='right-header'>
        <i className='fa fa-bars fa-2x' aria-hidden='true'
          onClick={() => props.dispatch(toggleSideNav())}></i> 
      </div>
      <ParentSideNav />
    </div>
    <h2 className='parent-heading'>Hey <span>{props.user.name}</span>!<br />These are the <span>rewards</span> you have made available!</h2> 
  </header>
);

export default connect(mapStateToProps)(ParentRewardHeader);