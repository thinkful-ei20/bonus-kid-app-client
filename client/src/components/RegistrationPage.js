import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import RegistrationForm from '../components/RegistrationForm';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export const RegistrationPage = props => {
  if(props.loggedIn){
    return <Redirect to='/dashboard' />;
  }
  return (
    <div>
      <h2>Sign Up Here</h2>
      <RegistrationForm />
      <h2>Already a member? Log in...</h2>
      <Link to='/'>Login</Link>
    </div>
  );
};

export default connect(mapStateToProps)(RegistrationPage);
