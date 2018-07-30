import SignupSideNav from './SignupSideNav';
import React from 'react';

import {connect} from 'react-redux';
import {toggleSideNav} from '../../actions/toggles';

import '../../styles/header.css';

export const SignupHeader = props => (
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
      <SignupSideNav />
    </div>
    <h2>Hey!<br />Welcome to <span>BonusKid</span>!<br />Let's get you signed up!</h2> 
  </header>
);

export default connect()(SignupHeader);