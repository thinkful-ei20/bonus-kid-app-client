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

export class RewardPageParent extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchRewards());
  }
  logOut(){    
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render(){
    console.log(this.props);
  if(!this.props.loggedIn || !this.props.user.isParent){
      return <Redirect to='/reward_page_parent' />;
    }

    const rewardsCard = this.props.rewards.map((reward,i) => 
    <div className='feature-card' key={i}>
      <div className='reward-cards'>
        <div className='reward-details'>
          <p>{reward.name}</p>
          <p>Point Value: {reward.pointValue}</p>
        </div> 
        <div className='reward-btns'>
          <button type='button' name='reward-edit-btn' 
            disabled={this.props.isEditing} 
            className='reward-edit-btn' 
            onClick={() => this.props.dispatch(isEditing(reward.id, reward.name))}>
              Edit Reward
          </button>
          <button type='button' name='reward-delete-btn' 
            disabled={this.props.isEditing} 
            className='reward-delete-btn' 
            onClick={() => this.props.dispatch(deleteRewards(reward.id))}>
              Delete Reward
          </button>
        </div>
      </div> 
    </div>
  );  

    return(
      <div>
        <ParentDashboardHeader />
        <h2>Rewards</h2>
        <div className='reward-cards'>
          {rewardsCard}
        </div>
        <EditRewardForm />
        <button type='button' name='add-reward-btn' 
          disabled={this.props.isAdding} 
          className='add-reward-btn' 
          onClick={() => this.props.dispatch(isAdding())}>
              Add Reward
        </button>
        <AddRewardForm />
      </div>
    );
  }
}

export default connect(mapStateToProps)(RewardPageParent);