import React from 'react';

import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ParentRewardHeader from './ParentRewardHeader';
import ParentRewardCards from './ParentRewardCards';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export class ParentRewardPage extends React.Component {
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
        <ParentRewardHeader />
        <ParentRewardCards />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ParentRewardPage);