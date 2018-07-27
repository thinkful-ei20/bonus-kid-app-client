
import ChildDashboardHeader from './ChildDashboardHeader';

import React from 'react';

import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { connect } from 'react-redux';

import { childGetRewards, childBuyReward } from '../actions/rewards';

// import { toggleSideNav } from '../actions';
import { Redirect } from 'react-router-dom';

import '../styles/parent-dashboard.css';

import { toggleRewardModal, showRewardDetails } from '../actions';
import ChildConfirmRewardModal from './ChildConfirmRewardModal';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user
});

export class RewardPageChild extends React.Component{
  componentDidMount(){
    this.props.dispatch(childGetRewards());
  }
  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  confirmBuy(reward){
    this.props.dispatch(toggleRewardModal());
    this.props.dispatch(showRewardDetails(reward));
  }
  render(){
  if(!this.props.loggedIn){
      return <Redirect to='/' />; // FIX LATER logout should send to dashbaord but page refresh should stay at reward_page_parent
    }
    console.log(this.props.rewards)
    const rewardsCard = this.props.user.rewards.map((reward,i) => 
    <div className='feature-card' key={reward.id}>
      <div className='reward-cards'>
        <div className='reward-details'>
          <p>{reward.name}</p>
          <p>Point Value: {reward.pointValue}</p>
          <p>
            {reward.purchased ? 'Already purchased' : 'Available for purchase'}
          </p>

          <button 
          className='buy-reward-button' 
          onClick={() => this.confirmBuy(reward)}
          disabled={reward.purchased}
          >
          BUY
          </button>


        </div> 
      </div> 
    </div>
  );  

    return(
      <div>
        <ChildDashboardHeader />
        <h2>RewardPageChild</h2>
        <div className='reward-cards'>
          {rewardsCard}
        </div>
        <ChildConfirmRewardModal/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RewardPageChild);