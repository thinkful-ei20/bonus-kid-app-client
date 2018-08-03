import ChildLoginForm from '../Forms/ChildLoginForm';
import LandingHeader from './LandingHeader';
import ParentLoginForm from '../Forms/ParentLoginForm';
import React from 'react';

import {connect} from 'react-redux';
import {Link , Redirect} from 'react-router-dom';

import '../../styles/landing-page.css';
import { toggleLoginForm } from '../../actions/toggles';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  parentChoice: state.toggles.loginChoice.parent
});

export function LandingPage(props){
  if(props.loggedIn && props.user.isParent){
    return <Redirect to='/parent_dashboard' />;
  } else if(props.loggedIn){
    return <Redirect to='/child_dashboard' />;
  }
  const highlight = { 
    borderTop: '#36f8b1 1px dashed',
    boxShadow: props.parentChoice ? '0px 5px 5px 1px rgba(0, 122, 77, 0.5)' :
      '5px 5px 2px 1px rgba(0, 122, 77, 0.5)',
    backgroundColor: '#006060',
    color: '#ffffff'
  };
  return(
    <div className='landing-page'>
      <div className='first-page'>
        <LandingHeader />
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
          <h3>Not a member...<br /><Link to='/signup'>sign up here</Link></h3>
        </div>
        <a href='#first-task' className='arrow-icon'><i className='fa fa-angle-down fa-4x'></i></a>
      </div>
      <div className='onboarding-task' id='first-task'>
        <div className='onboarding-task-background'>
        </div>
        <div className='onboarding-task-desc'>
          <h2>Assign a task.</h2>
          <p>Set up tasks to send to your child; you can assign each task a point value that tallies on your child's account when completed.</p>
        </div>
      </div>
      <div className='onboarding-reward'>
        <div className='onboarding-reward-background'>
        </div>
        <div className='onboarding-reward-desc'>
          <h2>Choose a reward.</h2>
          <p>Use your points to purchase gifts, trips, and freebies from your parent.</p>
        </div>
      </div>
      <div className='onboarding-slogan'>
        <div className='onboarding-slogan-background'>
        </div>
        <div className='onboarding-slogan-desc'>
          <h2>Give your kids what they deserve.</h2>
          <p>Sign up for BonusKid now and let's celebrate getting things done.</p>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(LandingPage);