import ParentDashboardSideNav from './ParentDashboardSideNav';
import React from 'react';

import {connect} from 'react-redux';
import {toggleSideNav} from '../actions';

export const ParentDashboardHeader = props => (
  <header className='header'>
    <div className='left-header'>
      <i className='fa fa-child fa-lg' aria-hidden='true'></i>
      <h1 role='banner'>BonusKid</h1>
    </div>
    <div className='right-header'>
      <i className='fa fa-bars fa-2x' aria-hidden='true'
        onClick={() => props.dispatch(toggleSideNav())}></i>
    </div>
    <ParentDashboardSideNav />
  </header>
);

export default connect()(ParentDashboardHeader);