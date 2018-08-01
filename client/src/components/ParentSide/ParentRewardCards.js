import React from 'react';
import { connect } from 'react-redux';

import '../../styles/parent-reward-cards.css';
import { toggleAddRewardForm, toggleParentDetails } from '../../actions/toggles';
import AddRewardModal from './AddRewardModal';
import ParentRewardModal from './ParentRewardModal';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  addRewardView: state.toggles.addRewardView,
});

export const ParentTaskCards = props => {
  const statusUnlocked = { color: 'green' }
  const statusPurchased = { color: 'blue' }
  const childCards = props.user.child.map((child, i) =>
    <div className='feature-card' key={child.id}>
      <div className='main-card'>
        <div className='side-avatar'>
          <i className='fas fa-user-ninja fa-3x' aria-hidden="true"></i>
          <p>{child.name}</p>
          <p>{child.currentPoints} Points to Spend</p>
          <p>{child.totalPoints} Career Points</p>
        </div>
        <div className='reward-cards'>
          <ul className='rewards-list'>
            {child.rewards.map((reward, i) =>
              <li className='reward' key={reward.id} 
                onClick={() => {
                  const rewardWithPoints = {
                    reward, points: { currentPoints: child.currentPoints, totalPoints: child.totalPoints }
                  };
                  props.dispatch(toggleParentDetails(true, false, rewardWithPoints));
                }
                }>
                <div className='reward-status'>
                {reward.purchased ? <p className='reward-purchased' style={statusPurchased}>PURCHASED</p> : 
                  reward.pointValue < child.currentPoints ? 
                    <div className='unlocked'>
                      <i className='fa fa-unlock' style={statusUnlocked}></i>
                      <p>{reward.pointValue}pts.</p>
                    </div> :
                    <div className='locked'>
                      <i className='fa fa-lock'></i>
                      <p>{reward.pointValue}pts.</p>
                    </div>
                  }
                </div>
                <div className='reward-details'>
                  <p>{reward.name}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      <button className='add-reward-btn'
        onClick={() => {
          props.dispatch(toggleAddRewardForm(child.id));
        }}>Add A Reward</button>
    </div>
  );
  return (
    <div className='child-cards'>
      {childCards}
      <AddRewardModal />
      <ParentRewardModal />
    </div>
  );
}

export default connect(mapStateToProps)(ParentTaskCards);