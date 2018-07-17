import React from 'react';

import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';

import {Redirect} from 'react-router-dom';


import { clearAuthToken } from '../local-storage';

const mapStateToProps = state => ({
  authToken: state.auth.authToken !== null,
  loggedIn: state.auth.user !== null
});

export class Dashboard extends React.Component{

  logOut = () => {    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
  if(!this.props.loggedIn){
      return <Redirect to='/' />;
    }
    
    return(
      <div>
        <p>hello from dashboard</p>
        <button onClick={() => this.logOut()}>
          Log Out
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Dashboard);