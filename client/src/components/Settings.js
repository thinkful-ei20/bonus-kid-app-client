import ParentDashboardHeader from './ParentDashboardHeader';
import React from 'react';
import { Redirect } from 'react-router-dom';


import { connect } from 'react-redux';
import SignUpFormChild from './SignUpFormChild';
import { clearChildSuccessMessage } from '../actions/auth';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  successMessage: state.auth.childSuccessMessage
});

export class Settings extends React.Component{
  componentDidMount(){
    this.props.dispatch(clearChildSuccessMessage());
  }

  render(){
    if(!this.props.loggedIn || !this.props.user.isParent){
      return <Redirect to='/' />; // FIX LATER logout should send to dashbaord but page refresh should stay at '/settings'
    }
    return(
      <div>
        <ParentDashboardHeader />
        <p>Register new child account</p>
        <SignUpFormChild />
        {this.props.successMessage}
        

      </div>
    );
  }
};

export default connect(mapStateToProps)(Settings);