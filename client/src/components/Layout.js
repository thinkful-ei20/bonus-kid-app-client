import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import {refreshAuthToken} from '../actions/auth';

import LandingPage from '../components/LandingPage';
import Dashboard from './Dashboard';
import RegistrationForm from './RegisterForm';

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
        <h1> Testing </h1>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={RegistrationForm} />
        <Route exact path='/dashboard' component={Dashboard} />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Layout));