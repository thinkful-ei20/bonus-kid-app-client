import React from 'react';
import {connect} from 'react-redux';
import {Link , Redirect} from 'react-router-dom';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export const LandingPage = props => {
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
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(LandingPage);