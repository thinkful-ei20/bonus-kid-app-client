import React from 'react';
import {connect} from 'react-redux';

import RewardsList from './RewardsList';
import { fetchRewards } from '../actions/rewards';

export class RewardPage extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchRewards());
  }
  render () {
    //console.log(this.props.rewards);
      const rewards = this.props.rewards.map((element,i) => 
          <li key={i}>
          Reward: {element.name}
          Points: {element.points}
          </li> 
      );

    return(
      <div className='page-container'>
        <h1>Rewards will go here </h1>
        <ul className='reward-list'>

          {rewards}

        </ul>
      </div>
    );
  }
}

RewardPage.defaultProps = {
  title: 'Reward Page'
}

const mapStateToProps = state => ({
  rewards: state.rewards.rewards,
  auth: state.auth
});

export default connect(mapStateToProps)(RewardPage);