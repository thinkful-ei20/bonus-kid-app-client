import React from 'react';

import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ChildSignupForm from '../Forms/ChildSignupForm';
import ParentHeader from './ParentHeader';
import ParentTaskCards from './ParentTaskCards';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export class ParentDashboard extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    if (!this.props.loggedIn || !this.props.user.isParent) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <ParentHeader />
        {this.props.user.child.length===0 ? <ChildSignupForm /> : <ParentTaskCards />}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ParentDashboard);