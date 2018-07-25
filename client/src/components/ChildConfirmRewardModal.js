import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleRewardModal } from '../actions';
import { childBuyReward } from '../actions/rewards';

const mapStateToProps = state => ({
  rewardModal: state.main.modalView.rewards,
  rewardDetails: state.main.showDetails.rewardDetails
});
export const ChildConfirmRewardModal = props => (
  //need a if statement to close 

  <div className={`modal ${props.rewardModal ? 'visible': ''}`}>
    <div className='modal-content'>
    {console.log('showDetails: ',props.taskDetails)
    }

      <p>Are you sure you want to buy X and remove XXX points from your account?</p>
      {/* HI DOM HERE ARE SOME NOTES */}
      {/* X = {props.rewardDetails.name} XXX= {props.rewardDetails.pointValue} */}
      {/* We also need to pass props.rewardDetails.id into childBuyReward(GOES HERE) which happens on next line  ;) */}
      <button className="submit-reward-purchase" onClick={() => this.props.dispatch(childBuyReward())
      }> Submit Reward Purchase </button>
      <button onClick={() => props.dispatch(toggleRewardModal())}>Close</button>
    </div>
  </div>
);

export default connect(mapStateToProps)(ChildConfirmRewardModal);