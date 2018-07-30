import ChildDashboard from './ChildSide/ChildDashboard';
import ChildRewardPage from './ChildSide/ChildRewardPage';
import ParentDashboard from './ParentSide/ParentDashboard';
import LandingPage from './Landing/LandingPage';
import SignUpPage from './Signup/SignupPage';
import React from 'react';

import {connect} from 'react-redux';
import {refreshAuthToken} from '../actions/auth';
import {Route, withRouter} from 'react-router-dom';
import ParentRewardPage from './ParentSide/ParentRewardPage';
import ParentSettingsPage from './ParentSide/ParentSettingsPage';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export class Layout extends React.Component {
  componentDidUpdate(prevProps){
    if(!prevProps.loggedIn && this.props.loggedIn){
      this.startPeriodicRefresh();
    } else if(prevProps.loggedIn && !this.props.loggedIn){
      this.stopPeriodicRefresh();
    }
  }
  componentWillUnmount(){ this.stopPeriodicRefresh(); }
  startPeriodicRefresh(){
    this.refreshInterval = setInterval(() => this.props.dispatch(refreshAuthToken()), 60 * 60 * 1000);
  }
  stopPeriodicRefresh(){
    if(!this.refreshInterval){ return; }
    clearInterval(this.refreshInterval);
  }
  render(){
    return(
      <div className='layout'>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/parent_dashboard' component={ParentDashboard} />
        <Route exact path='/reward_page_parent' component={ParentRewardPage} />
        <Route exact path='/child_dashboard' component={ChildDashboard} />
        <Route exact path='/reward_page_child' component={ChildRewardPage} />
        <Route exact path='/settings' component={ParentSettingsPage} />
        <Route exact path='/signup' component={SignUpPage} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Layout));