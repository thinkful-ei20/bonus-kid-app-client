import React from 'react';
import {connect} from 'react-redux';
import {Link , Redirect} from 'react-router-dom';

import LoginForm from './LoginForm';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export function LandingPage(props){
  if(props.loggedIn){
    return <Redirect to='/dashboard' />;
  }

  return(
    <div>
      <div>
        <h2>Welcome to BonusKid</h2>
        <LoginForm />
      </div>
      <div>
        <h2>Not a memeber, sign up</h2>
        <Link to='/register'>Signup</Link>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(LandingPage);