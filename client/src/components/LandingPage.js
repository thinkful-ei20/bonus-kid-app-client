import ChildLoginForm from './ChildLoginForm';
import LandingHeader from './LandingHeader';
import ParentLoginForm from './ParentLoginForm';
import React from 'react';

import {connect} from 'react-redux';
import {Link , Redirect} from 'react-router-dom';

import '../styles/landing-page.css';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user
});

export function LandingPage(props){
  if(props.loggedIn && props.user.isParent){
    return <Redirect to='/parent_dashboard' />;
  } else if(props.loggedIn){
    return <Redirect to='/child_dashboard' />;
  }
  return(
    <div className='landing-page'>
      <LandingHeader />
      <div className='jumbotron'>
        <hgroup className='typer'>
          <h2>Did she get all A's in school?</h2>
          <h2>Did he do all his chores?</h2>
          <h2>Those kids deserve a <span>bonus!</span></h2>
          <h3><a href='/register'>Try BonusKid</a> and give your kids what they deserve.</h3>
        </hgroup>
      </div>
      <section className='login-forms'>
        <ParentLoginForm />
        {/* <ChildLoginForm /> */}
      </section>
      <div className='non-members'>
        <h2>Not a memeber, <Link to='/signup'>sign up here</Link></h2>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(LandingPage);