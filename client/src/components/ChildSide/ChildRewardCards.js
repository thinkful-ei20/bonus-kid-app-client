import ChildRewardModal from './ChildRewardModal';
import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../styles/parent-reward-cards.css';
import { toggleChildDetails } from '../../actions/toggles';


const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
});

export const ChildTaskCards = props => {
  const statusUnlocked = { color: '#f8e21a' }
  const statusPurchased = { color: 'blue' }
  const childCards = props.user.rewards.map((reward, i) =>
    <li className='reward' key={reward.id} 
      onClick={() => props.dispatch(toggleChildDetails(reward))}>
      <div className='reward-status'>
      {reward.purchased ? <p className='reward-purchased' style={statusPurchased}>PURCHASED</p> : 
                  reward.pointValue < props.user.currentPoints ? 
                    <div className='unlocked'>
                      <i className='icon fas fa-circle' style={statusUnlocked}></i>
                      <p>{reward.pointValue}</p>
                    </div> :
                    <div className='locked'>
                      <i className='icon fas fa-ban'></i>
                      <p>{reward.pointValue}</p>
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

        <div className='child-info'>
          <p>{props.user.name}</p>
          <span>{props.user.currentPoints} <i className="icon fas fa-circle"></i>
          {props.user.totalPoints} <i className="icon fas fa-crown"></i></span>
        </div>

        <div className='side-avatar'>
          <img src='https://image.ibb.co/c9Ng3z/avatar_1.jpg' alt='avatar of child'></img>
        </div>      
        <div className='item-cards'>
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