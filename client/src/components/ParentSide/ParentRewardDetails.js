import React from 'react';

import {connect} from 'react-redux';
import '../../styles/task-details.css';
import { parentApproveTask } from '../../actions/tasks';
import { toggleParentDetails } from '../../actions/toggles';

const mapStateToProps = state => ({
  rewardDetail: state.toggles.chosenCard.details.reward,
  currentPoints: state.toggles.chosenCard.details.points.currentPoints,
  totalPoints: state.toggles.chosenCard.details.points.totalPoints
});

export const ParentRewardDetails = props => {
  const dateExpired = new Date(Number(props.rewardDetail.expiryDate));
  return(
    <section className='details-page'>
      <div className='detail'>
        <p className='status'>{props.rewardDetail.purchased ? 
          <span>PURCHASED</span> : props.rewardDetail.pointValue < props.currentPoints ? 
            <span>AVAILABLE FOR PURCHASE</span> : <span>DOES NOT HAVE ENOUGH POINTS TO PURCHASE</span>}</p>
        <p className='reward-name'>Name: <span>{props.rewardDetail.name}</span></p>
        <p className='points'>Point Value: <span>{props.rewardDetail.pointValue}</span></p>
        <p className='expiry'>Due:
          <span className='date-time'>
            <span className='time'>{dateExpired.toLocaleTimeString()}</span>
            <span className='date'>{dateExpired.toLocaleDateString()}</span>
          </span>
        </p>
      </div>  
    </section>
  );
};

export default connect(mapStateToProps)(ParentRewardDetails);