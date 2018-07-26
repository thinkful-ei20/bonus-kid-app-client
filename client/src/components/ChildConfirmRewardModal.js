import React from 'react';
import {connect} from 'react-redux';
import '../styles/modals.css';
import { toggleRewardModal } from '../actions';
import { childBuyReward } from '../actions/rewards';

const mapStateToProps = state => ({
  rewardModal: state.main.modalView.rewards,
  rewardDetails: state.main.showDetails.rewardDetails,
  user: state.auth.user
});

export const ChildConfirmRewardModal = props => {
let notEnoughPoints;
const finalConfirm = () => {
  if(props.rewardModal && props.user.currentPoints >= props.rewardDetails.pointValue){
    console.log('has enough points');    
    props.dispatch(childBuyReward(props.rewardDetails.id))
  } else {
    console.log('not enough points');
    notEnoughPoints = (
      <p>Not Enough POints</p>
    );   
  }
  // props.rewardModal ? props.dispatch(childBuyReward(props.rewardDetails.id)) : null
  }

  return ( 

    <div className={`modal ${props.rewardModal ? 'visible': ''}`}>
      <div className='modal-content'>

        <p className='child-confirm-reward-message'>
          Are you sure you want to buy 
          <span> "{props.rewardModal ? props.rewardDetails.name : null}" </span> 
          and remove 
          <span> {props.rewardModal ? props.rewardDetails.pointValue : null} </span>
          points from your account?
        </p>  
        {notEnoughPoints}          
        <button 
          className="submit-reward-purchase" 
          onClick={() => {
            finalConfirm()
            props.dispatch(toggleRewardModal())
          }
          }> 
            Submit Reward Purchase 
        </button>
        <button onClick={() => props.dispatch(toggleRewardModal())}>CANCEL</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ChildConfirmRewardModal);