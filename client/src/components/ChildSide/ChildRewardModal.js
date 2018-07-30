import React from 'react';
import {connect} from 'react-redux';
import '../../styles/modals.css';

import '../../styles/task-details.css';
import { childSubmitTask } from '../../actions/tasks';
import { toggleChildDetails } from '../../actions/toggles';

const mapStateToProps = state => ({
  showDetails: state.toggles.childDetails.detailView,
  reward: state.toggles.childDetails.details,
  user: state.auth.user,
});
export const ChildRewardModal = props => {
  const dateExpired = props.showDetails ? new Date(Number(props.reward.expiryDate)) : null;
  return(
  <div className={`modal ${props.showDetails ? 'visible': ''}`}>
    <h2 className='child-details-heading'>Details</h2>
    <div className='modal-content'>
      <div className='child-detail'>
      <p className='status'>{props.showDetails ? props.reward.purchased ? 
          <span>PURCHASED</span> : props.reward.pointValue < props.user.currentPoints ? 
            <span>AVAILABLE FOR PURCHASE</span> : <span>DOES NOT HAVE ENOUGH POINTS TO PURCHASE</span> : null}</p>
        <p className='task-name'>Taskname: <span>{props.showDetails ? props.reward.name : null}</span></p>
        <p className='points'>PointValue: <span>{props.showDetails ? props.reward.pointValue : null}</span></p>
        <p className='expiry'>Due:
          <span className='date-time'>
            <span className='time'>{props.showDetails ? dateExpired.toLocaleTimeString() : null}</span>
            <span className='date'>{props.showDetails ? dateExpired.toLocaleDateString() : null}</span>
          </span>
        </p>
        <button className='buy-reward'
            onClick={() => {
              // props.dispatch(childSubmitTask(props.task.id));
              props.dispatch(toggleChildDetails());
            }}>BUY REWARD</button>
      </div>
    </div>
    <button className='close' onClick={() => props.dispatch(toggleChildDetails())}>Close</button>
  </div>
);

}

export default connect(mapStateToProps)(ChildRewardModal);