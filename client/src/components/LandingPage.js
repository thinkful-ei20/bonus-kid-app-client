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
          <h2>Did she get all A's in school?</h2>
          <h2>Did he do all his chores?</h2>
          <h2>Those kids deserve a <span>bonus!</span></h2>
          <h3><a href='/signup'>Try BonusKid</a> and give your kids what they deserve.</h3>
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