import React from 'react';
import {connect} from 'react-redux';
import '../styles/dashboard-header.css';
import { toggleSideNav } from '../actions';
import DashboardSideNav from './DashboardSideNav';

const mapStateToProps = state => ({
  sideNavView: state.main.sideNavView
});

export const DashboardHeader = props => {
  return(
    <header className='dashboard-header'>
      <div className='left-header'>
        <i className="fa fa-child fa-lg" aria-hidden="true"></i>
        <h1 role='banner' onClick={() => console.log('button works')}>BonusKid</h1>
      </div>
      <div className='right-header'>
        <i className='fa fa-bars fa-2x' aria-hidden='true'
          onClick={() => props.dispatch(toggleSideNav())}></i> 
      </div>
      <DashboardSideNav />
    </header>
  );
};

export default connect(mapStateToProps)(DashboardHeader);