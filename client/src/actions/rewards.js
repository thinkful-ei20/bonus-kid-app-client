import {API_BASE_URL} from '../config';
import{normalizeResponseErrors} from './utils';
import { storeAuthInfo, refreshAuthToken } from './auth';

//======================= POST rewards =======================
export const POST_REWARD_SUCCESS = 'POST_REWARD_SUCCESS';
export const postRewardSuccess = reward => ({
  type: POST_REWARD_SUCCESS,
  reward
})

export const POST_REWARD_ERROR = 'POST_REWARD_ERROR';
export const postRewardError = err => ({
  type: POST_REWARD_ERROR,
  err
})

export const postReward = (id, reward) => (dispatch, getState) => {
  console.log('post reward ran');
  console.log(reward);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/rewards/${id}`, {
    method:'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify({
      name: reward.name,
      pointValue: reward.pointValue
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(postRewardError(err));
    });
};


//==================== PUT rewards ==============================
export const PUT_REWARD_SUCCESS = 'PUT_REWARD_SUCCESS';
export const putRewardSuccess = reward => ({
  type: PUT_REWARD_SUCCESS,
  reward
})

export const PUT_REWARD_ERROR = 'PUT_REWARD_ERROR';
export const putRewardError = err => ({
  type: PUT_REWARD_ERROR,
  err
})

export const editReward = (id, reward) => (dispatch, getState) => {
  console.log('edit reward ran');
  console.log(reward);
  console.log(id);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/rewards/${id}`, {
    method:'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type' : 'application/json'
    },
    body: JSON.stringify({
      name: reward.name,
      pointValue: reward.pointValue
    })
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(putRewardError(err));
    });
};

//========================= DELETE rewards ================================
export const DELETE_REWARDS_SUCCESS = 'DELETE_REWARDS_SUCCESS';
export const deleteRewardsSuccess = () =>({
  type: DELETE_REWARDS_SUCCESS
})

export const DELETE_REWARDS_ERROR = 'DELETE_REWARDS_ERROR';
export const deleteRewardsError = err => ({
  type: DELETE_REWARDS_ERROR,
  err
})

export const deleteRewards = (id) => (dispatch, getState) =>{
  console.log('delete dispatched');
  console.log('this is input id', id);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/rewards/${id}`,{
    method:'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
  }) 
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .then(() => dispatch(deleteRewardsSuccess()))
    .catch(err => dispatch(deleteRewardsError(err)))
}

// ================= PURCHASE REWARD AS A CHILD =========================

export const childBuyReward = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/rewards/child/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      purchased: true
    })
  })
  .then (res => normalizeResponseErrors(res))
  .then (res => res.json())
  .then(({authToken}) => storeAuthInfo(authToken, dispatch))
  .catch(err =>{
    console.log(err)
  });
}