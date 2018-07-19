import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import {refreshAuthToken} from '../actions/auth';

import LandingPage from '../components/LandingPage';
import Dashboard from './Dashboard';
import RegistrationPage from './RegistrationPage';
import RewardsPage from './RewardsPage';
import TasksPage from './TasksPage';

const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
  loggedIn: state.auth.user !== null
});

export class Layout extends React.Component {
  componentDidUpdate(prevProps){
    if (!prevProps.loggedIn && this.props.loggedIn){
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
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
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/rewards' component={RewardsPage} />
        <Route exact path='/tasks' component={TasksPage} />

      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Layout));
