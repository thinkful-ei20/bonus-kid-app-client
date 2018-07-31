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
    const err = {};    
    const expectedAction = {
      type: 'POST_REWARD_ERROR',
      err
    }
    const result = actions.postRewardError(err);
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
    const err = {};    
    const expectedAction = {
      type: 'PUT_REWARD_ERROR',
      err
    }
    const result = actions.putRewardError(err);
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
    const err = {};    
    const expectedAction = {
      type: 'DELETE_REWARDS_ERROR',
      err
    }
    const result = actions.deleteRewardsError(err);
    expect(result).toEqual(expectedAction);
  });

  //deleteRewards needed----------------------------------

  //childBuyReward needed----------------------------------


});