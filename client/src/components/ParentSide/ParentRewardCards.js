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
  const statusUnlocked = { color: '#fac822' }
  const statusPurchased = { color: '#fac822' }
  const completed = { textDecoration: 'line-through' };

  const childCards = props.user.child.map((child, i) =>
    <div className='feature-card' key={child.id}>
      <div className='main-card'>

       <div className='child-info'>
        <p>{child.name}</p>
        <span>{child.currentPoints} <i className="icon fas fa-circle"></i>
        {child.totalPoints} <i className="icon fas fa-crown"></i></span>
       </div>


        <div className='side-avatar'>
          <img src='http://i66.tinypic.com/v45hqg.jpg' alt='avatar of child'></img>
          {/* <i className='fas fa-user-ninja fa-3x' aria-hidden="true"></i> */}
     
        </div>
        <div className='item-cards'>
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
                {reward.purchased ? <p className='reward-purchased' style={statusPurchased}><i className="icon fas fa-check-circle"></i></p> : 
                  reward.pointValue < child.currentPoints ? 
                    <div className='unlocked'>
                      <i className="icon fas fa-circle" style={statusUnlocked}></i>
                      <p>{reward.pointValue}</p>
                    </div> :
                    <div className='locked'>
                      <i className="icon fas fa-ban"></i> <p>{reward.pointValue}</p>
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
      <button className='add-btn'
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