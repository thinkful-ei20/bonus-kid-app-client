import rewardReducer from '../../reducers/rewardReducer';
import {
  POST_REWARD_SUCCESS,
  POST_REWARD_ERROR,
  PUT_REWARD_SUCCESS,
  PUT_REWARD_ERROR,
  DELETE_REWARDS_SUCCESS,
  DELETE_REWARDS_ERROR,
  postRewardSuccess,
  postRewardError,
  putRewardSuccess,
  putRewardError,
  deleteRewardsSuccess,
  deleteRewardsError,
} from '../../actions/rewards';

describe('rewardReducer', () => {

  it('should return the initial state', () => {
    const initialState = {
      error: null
    };
    const result = rewardReducer(undefined, {})
    expect(result).toEqual(initialState)
  });

  it('POST_REWARD_SUCCESS should return state', () => {
    const initialState = {
      error: null
    };
    const reward = {name:"testReward", pointValue:100, purchased: false};
    const action = postRewardSuccess(reward);
    const result = rewardReducer(initialState, action)
    expect(result).toEqual(initialState);
  });

  // it('POST_REWARD_ERROR should set error: action.err', () => {
  //   const err = {message:'test Reward Error'};
  //   const initialState = {
  //     error: null
  //   };
  //   const action = postRewardError(err);
  //   const result = rewardReducer(initialState, action)
  //   console.log(result.error);
    
  //   expect(result.error).toEqual(err);
  // });

  it('PUT_REWARD_SUCCESS should return state', () => {
    const initialState = {
      error: null
    };
    const reward = {name:"testReward1", pointValue:1000, purchased: true};
    const action = putRewardSuccess(reward);
    const result = rewardReducer(initialState, action)
    expect(result).toEqual(initialState);
  });

  //   it('PUT_REWARD_ERROR should set error: action.err', () => {
  //   const err = {message:'test PUT Reward Error'};
  //   const initialState = {
  //     error: null
  //   };
  //   const action = putRewardError(err);
  //   const result = rewardReducer(initialState, action)
  //   expect(result.error).toEqual(err);
  // });

  it('DELETE_REWARD_SUCCESS should return state', () => {
    const initialState = {
      error: null
    };
    const action = deleteRewardsSuccess();
    const result = rewardReducer(initialState, action)
    expect(result).toEqual(initialState);
  });

  //   it('DELETE_REWARDS_ERROR should set error: action.err', () => {
  //   const err = {message:'test DELETE Reward Error'};
  //   const initialState = {
  //     error: null
  //   };
  //   const action = deleteRewardsError(err);
  //   const result = rewardReducer(initialState, action)
  //   expect(result.error).toEqual(err);
  // });

});
