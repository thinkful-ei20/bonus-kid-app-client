import React from 'react';
import {connect} from 'react-redux';
import RewardCard from './RewardCard';

export class RewardsList extends React.Component{
  
  render(){
    const rewards = this.props.map((rewards, index) =>
    <li key={index}>
      <RewardCard {...rewards} />
    </li>
    );
    return(
      <div className='rewards-container'>
        <h1>Rewards</h1>
        <ul className='Rewards'>
        {rewards}
        </ul>
      </div>
    );
  }
}

RewardsList.defaultProps = {
  Rewards: ''
};

export default connect ()(RewardsList);