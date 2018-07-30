import ParentHeader from './ParentHeader';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ChildSignupForm from '../Forms/ChildSignupForm';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export class ParentSettingsPage extends React.Component{
  render(){
    if(!this.props.loggedIn || !this.props.user.isParent){
      return <Redirect to='/' />;
    }
    return(
      <div>
        <ParentHeader />
        <ChildSignupForm />
      </div>
    );
  }
};

export default connect(mapStateToProps)(ParentSettingsPage);