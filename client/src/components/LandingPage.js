import ChildLoginForm from './ChildLoginForm';
import LandingHeader from './LandingHeader';
import ParentLoginForm from './ParentLoginForm';
import React from 'react';

import {connect} from 'react-redux';
import {Link , Redirect} from 'react-router-dom';

import '../styles/landing-page.css';
import { toggleLoginForm } from '../actions';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  parentChoice: state.main.loginChoice.parent
});

export function LandingPage(props){
  if(props.loggedIn && props.user.isParent){
    return <Redirect to='/parent_dashboard' />;
  } else if(props.loggedIn){
    return <Redirect to='/child_dashboard' />;
  }
  const highlight = { 
    borderTop: '#36f8b1 1px dashed',
    borderRight: props.parentChoice ? 'none' : '#36f8b1 1px dashed',
    borderLeft: !props.parentChoice ? 'none' : '#36f8b1 1px dashed',
    boxShadow: '5px 5px 2px 1px rgba(0, 122, 77, 0.5)',
    backgroundColor: '#007c4f',
    color: '#ffffff'
  };
  return(
    <div className='landing-page'>
      <LandingHeader />
      <div className='jumbotron'>
        <hgroup className='typer'>
          <h3>Did she get all A's in school?</h3>
          <h3>Did he do all his chores?</h3>
          <h3>Those kids deserve a <span>bonus!</span></h3>
          <h2><a href='/signup'>Try BonusKid</a><br/>and give your kids what they deserve.</h2>
        </hgroup>
      </div>
      <section className='login-forms'>
        <div className='login-choice'>
          <button
            className='parent-choice' 
            disabled={props.parentChoice}
            onClick={() => props.dispatch(toggleLoginForm())}
            style={props.parentChoice ? highlight : null}>PARENT</button>
          <button 
            className='child-choice' 
            disabled={!props.parentChoice}
            onClick={() => props.dispatch(toggleLoginForm())}
            style={!props.parentChoice ? highlight : null}>CHILD</button>
        </div>
        {props.parentChoice ? <ParentLoginForm /> : <ChildLoginForm />}
      </section>
      <div className='non-members'>
        <h2>Not a memeber, <Link to='/signup'>sign up here</Link></h2>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(LandingPage);