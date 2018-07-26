import {API_BASE_URL} from '../config';
import{normalizeResponseErrors} from './utils';
import { storeAuthInfo } from './auth';

//========================== GET rewards =======================
export const FETCH_REWARDS_SUCCESS = 'FETCH_REWARDS_REQUEST';
export const fetchRewardsSucces = rewards  =>({
  type:FETCH_REWARDS_SUCCESS,
  rewards
});

export const FETCH_REWARDS_ERROR = 'FETCH_REWARDS_ERROR';
export const fetchRewardsError = error => ({
  type: FETCH_REWARDS_ERROR,
  error
});


export const fetchRewards = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log('fetch launched');
  return fetch(`${API_BASE_URL}/rewards`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type' : 'application/json',
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(fetchRewardsError(err));
    });
}


//======================= POST rewards =======================
export const POST_REWARDS_SUCCESS = 'POST_REWARDS_SUCCESS';
export const postRewardsSuccess = rewards => ({
  type: POST_REWARDS_SUCCESS,
  rewards
})

export const POST_REWARDS_ERROR = 'POST_REWARDS_ERROR';
export const postRewardsError = error => ({
  type: POST_REWARDS_ERROR,
  error
})

export const postReward = (reward) => (dispatch, getState) => {
  console.log('post reward ran');
  console.log(reward);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/rewards`, {
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
      dispatch(postRewardsError(err));
    });
};


//==================== PUT rewards ==============================
export const PUT_REWARDS_SUCCESS = 'PUT_REWARDS_SUCCESS';
export const putRewardsSuccess = rewards => ({
  type: PUT_REWARDS_SUCCESS,
  rewards
})

export const PUT_REWARDS_ERROR = 'PUT_REWARDS_ERROR';
export const putRewardsError = error => ({
  type: PUT_REWARDS_ERROR,
  error
})

export const editRewards = (_id, reward) => (dispatch, getState) => {
  console.log('edit reward ran');
  console.log(reward);
  console.log(_id);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/rewards/${_id}`, {
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
      dispatch(putRewardsError(err));
    });
};

//========================= DELETE rewards ================================
export const DELETE_REWARDS_SUCCESS = 'DELETE_REWARDS_SUCCESS';
export const deleteRewardsSuccess = () =>({
  type: DELETE_REWARDS_SUCCESS
})

export const DELETE_REWARDS_ERROR = 'DELETE_REWARDS_ERROR';
export const deleteRewardsError = error => ({
  type: DELETE_REWARDS_ERROR,
  error
})

export const deleteRewards = (_id) => (dispatch, getState) =>{
  console.log('delete dispatched');
  console.log('this is input id', _id);
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/rewards/${_id}`,{
    method:'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
  }) 
    .then(res=>normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(deleteRewardsError(err));
    })

}

// ================= GET REWARDS AS A CHILD =========================

// export const CHILD_GET_REWARDS = 'CHILD_GET_REWARDS';
// export const getChildRewardsSuccess = (rewards) => ({
//   type: CHILD_GET_REWARDS,
//   rewards
// })

//reuse the failed get request from parent
export const childGetRewards = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(authToken)
  return fetch(`${API_BASE_URL}/rewards/child`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'appilication/json'
    },
  })
    .then (res => normalizeResponseErrors(res))
    .then (res => res.json())
    .then (data => dispatch(fetchRewardsSucces(data)))
    //.then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err =>{
      dispatch(fetchRewardsError(err))
    });
};

// ================= PURCHASE REWARD AS A CHILD =========================

export const childBuyReward = (_id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/rewards/child/${_id}`, {
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
    dispatch(fetchRewardsError(err))
  });
}