import LandingSideNav from './LandingSideNav';
import React from 'react';

import {connect} from 'react-redux';
import {toggleSideNav} from '../actions';

import '../styles/header.css';

export const LandingHeader = props => (
  <header className='header'>
    <div className='left-header'>
      <i className="fa fa-child fa-lg" aria-hidden="true"></i>
      <h1 role='banner' onClick={() => console.log('button works')}>BonusKid</h1>
    </div>
    <div className='right-header'>
      <i className='fa fa-bars fa-2x' aria-hidden='true'
        onClick={() => props.dispatch(toggleSideNav())}></i> 
    </div>
    <LandingSideNav />   
  </header>
);

export default connect()(LandingHeader);