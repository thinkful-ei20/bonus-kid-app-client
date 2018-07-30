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
} from '../../actions/rewards';

const initialState = {
  error: null
};

describe('rewardReducer', () => {

  it('should return the initial state', () => {
    const result = rewardReducer(undefined, {})
    expect(result).toEqual(initialState)
  });

  it('POST_REWARD_SUCCESS should just return state?', () => {
    const reward = {name:"testReward", pointValue:100, purchased: false};
    const action = postRewardSuccess(reward);
    const result = rewardReducer(initialState, action)
    expect(result).toEqual(initialState);
  });

  // it('POST_REWARD_ERROR should set error: action.err', () => {
  //   const initialState = {
  //     error: null
  //   };
  //   const err = {message:"test Reward Error"};
  //   const action = postRewardError(err);
  //   const result = rewardReducer(initialState, action)
  //   expect(result.error).toEqual(err);
  // });





});
