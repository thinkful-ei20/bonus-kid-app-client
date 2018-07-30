import * as actions from '../../actions/rewards';

describe('actions', () => {

  it('should have a type of POST_REWARD_SUCCESS', () => {
    const reward = {};    
    const expectedAction = {
      type: 'POST_REWARD_SUCCESS',
      reward
    }
    const result = actions.postRewardSuccess(reward);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of POST_REWARD_ERROR', () => {
    const error = {};    
    const expectedAction = {
      type: 'POST_REWARD_ERROR',
      error
    }
    const result = actions.postRewardError(error);
    expect(result).toEqual(expectedAction);
  });

  //postReward needed--------------------------------

  it('should have a type of PUT_REWARD_SUCCESS', () => {
    const reward = {};    
    const expectedAction = {
      type: 'PUT_REWARD_SUCCESS',
      reward
    }
    const result = actions.putRewardSuccess(reward);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of PUT_REWARD_ERROR', () => {
    const error = {};    
    const expectedAction = {
      type: 'PUT_REWARD_ERROR',
      error
    }
    const result = actions.putRewardError(error);
    expect(result).toEqual(expectedAction);
  });

  //editReward needed----------------------------------

  it('should have a type of DELETE_REWARDS_SUCCESS', () => {
    const expectedAction = {
      type: 'DELETE_REWARDS_SUCCESS'
    }
    const result = actions.deleteRewardsSuccess();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of DELETE_REWARDS_ERROR', () => {
    const error = {};    
    const expectedAction = {
      type: 'DELETE_REWARDS_ERROR',
      error
    }
    const result = actions.deleteRewardsError(error);
    expect(result).toEqual(expectedAction);
  });

  //deleteRewards needed----------------------------------

  //childBuyReward needed----------------------------------


});