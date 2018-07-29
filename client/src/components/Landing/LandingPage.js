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
    // borderRight: props.parentChoice ? 'none' : '#36f8b1 1px dashed',
    // borderLeft: !props.parentChoice ? 'none' : '#36f8b1 1px dashed',
    //boxShadow: '5px 5px 2px 1px rgba(0, 122, 77, 0.5)',
    // backgroundColor: '#5db662',
    borderTop: '#36f8b1 1px dashed',
    boxShadow: props.parentChoice ? '-5px 5px 2px 1px rgba(0, 122, 77, 0.5)' :
      '5px 5px 2px 1px rgba(0, 122, 77, 0.5)',
    backgroundColor: '#93c37b',
    color: '#ffffff'
  };
  return(
    <div className='landing-page'>
      <LandingHeader />
    
      <section className='login-forms'>
        <div className='login-component'>
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
        </div>
      </section>
      <div className='non-members'>
        {/* <span className='register-text'>Not a memeber? <Link to='/signup'>sign up here</Link></span> */}
        <h3>Not a member...<br /><Link to='/signup'>sign up here</Link></h3>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(LandingPage);