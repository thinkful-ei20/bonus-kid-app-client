import ChildRewardModal from './ChildRewardModal';
import React from 'react';

import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import '../../styles/parent-reward-cards.css';
import { toggleChildDetails } from '../../actions/toggles';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export const ChildTaskCards = props => {
  const statusUnlocked = { color: '#f8e21a' }
  const statusPurchased = { color: 'blue' }
  const completed = { textDecoration: 'line-through' };
  const childCards = props.user.rewards.map((reward, i) =>
    <li className='reward' key={reward.id} 
      onClick={() => props.dispatch(toggleChildDetails(reward))}>
      <div className='reward-status'>
      {reward.purchased ? <p className='reward-purchased' style={statusPurchased}>PURCHASED</p> : 
                  reward.pointValue < props.user.currentPoints ? 
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
    </li>);
  return (
    <div className='feature-card'>
      <div className='main-card'>
        <div className='side-avatar'>
          <i className='fas fa-user-ninja fa-3x' aria-hidden="true"></i>
          <p>{props.user.name}</p>
          <p>{props.user.currentPoints} Points to Spend</p>
          <p>{props.user.totalPoints} Career Points</p>
          <Link to='/reward_page_child'><i className='fa fa-gift fa-2x' aria-hidden="true"></i></Link>
        </div>
        <div className='reward-cards'>
          <ul className='rewards-list'>
            {childCards}
          </ul>
        </div>
      </div>
      <ChildRewardModal />
    </div>
  );
}

export default connect(mapStateToProps)(ChildTaskCards);