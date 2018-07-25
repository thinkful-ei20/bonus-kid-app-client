import EditRewardForm from './EditRewardForm';
import ParentDashboardHeader from './ParentDashboardHeader';
import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';
import { isEditing, isAdding } from '../actions';
import { fetchRewards, deleteRewards } from '../actions/rewards';
// import { toggleSideNav } from '../actions';
import { Redirect } from 'react-router-dom';

import '../styles/parent-dashboard.css';
import AddRewardForm from './AddRewardForm';

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  isEditing: state.main.isEditing.editing,
  isAdding: state.main.isAdding.adding,
  rewards: state.rewards.rewards
});

export class RewardPageChild extends React.Component{
  componentDidMount(){
    // this.props.dispatch(fetchRewards());
  }
  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
  if(!this.props.loggedIn){
      return <Redirect to='/' />; // FIX LATER logout should send to dashbaord but page refresh should stay at reward_page_parent
    }

    const rewardsCard = this.props.rewards.map((reward,i) => 
    <div className='feature-card' key={i}>
      <div className='reward-cards'>
        <div className='reward-details'>
          <p>{reward.name}</p>
          <p>Point Value: {reward.pointValue}</p>
        </div> 
      </div> 
    </div>
  );  

    return(
      <div>
        <ParentDashboardHeader />
        <h2>RewardPageChild</h2>
        <div className='reward-cards'>
          {rewardsCard}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RewardPageChild);