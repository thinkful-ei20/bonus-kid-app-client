import React from 'react';
import {connect} from 'react-redux';

import RewardsList from './RewardsList';

export class RewardPage extends React.Component{
  
  render () {

    return(
      <div className='page-container'>
        <h1>Rewards will go here </h1>
      </div>
    );
  }
}

RewardPage.defaultProps = {
  title: 'Reward Page'
}

const mapStateToProps = state => ({
  rewards: state.rewards
});

export default connect(mapStateToProps)(RewardPage);