import React from 'react';

import {connect} from 'react-redux';
import '../../styles/task-details.css';

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
          <span>Purchased</span> : props.rewardDetail.pointValue < props.currentPoints ? 
            <span>Available for purchase</span> : <span>Requires more points</span>}</p>
        <p className='name'>Name: <span>{props.rewardDetail.name}</span></p>
        <p className='points'>Point Value: <span>{props.rewardDetail.pointValue}</span></p>
       
      </div>  
    </section>
  );
};

export default connect(mapStateToProps)(ParentRewardDetails);