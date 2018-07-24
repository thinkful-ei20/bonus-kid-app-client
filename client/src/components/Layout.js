import ChildDashboard from './ChildDashboard';
import LandingPage from './LandingPage';
import ParentDashboard from './ParentDashboard';

import React from 'react';
import SignUpPage from './SignUpPage';

import {connect} from 'react-redux';
import {refreshAuthToken} from '../actions/auth';
import {Route, withRouter} from 'react-router-dom';
import RewardPageParent from './RewardPageParent';
import Settings from './Settings';

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
  componentWillUnmount(){
    this.stopPeriodicRefresh();
  }
  startPeriodicRefresh(){
    this.refreshInterval = setInterval(() => this.props.dispatch(refreshAuthToken()), 60 * 60 * 1000);
  }
  stopPeriodicRefresh(){
    if(!this.refreshInterval){
      return;
    }
    clearInterval(this.refreshInterval);
  }
  render(){
    return(
      <div className='layout'>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/parent_dashboard' component={ParentDashboard} />
        <Route exact path='/child_dashboard' component={ChildDashboard} />
        <Route exact path='/reward_page_parent' component={RewardPageParent} />
        <Route exact path='/settings' component={Settings} />

        <Route exact path='/signup' component={SignUpPage} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Layout));