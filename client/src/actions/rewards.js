import {API_BASE_URL} from '../config';
import{normalizeResponseErrors} from './utils';

//GET rewards
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
  //console.log('fetch launched');
  // console.log('this is auth', authToken);
  return fetch(`${API_BASE_URL}/rewards`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type' : 'application/json',
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data =>{
      dispatch(fetchRewardsSucces(data));
    })
    .catch(err => {
      dispatch(fetchRewardsError(err));
    });
}


//POST rewards
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


//PUT rewards
export const PUT_REWARDS_SUCCESS = 'PUT_REWARDS_SUCCESS';
export const putRewardsSuccess = reward => ({
  type: PUT_REWARDS_SUCCESS,
  reward
})

export const PUT_REWARDS_ERROR = 'PUT_REWARDS_ERROR';
export const putRewardsError = error => ({
  type: PUT_REWARDS_ERROR,
  error
})

//DELETE rewards
export const DELETE_REWARDS_SUCCESS = 'DELETE_REWARDS_SUCCESS';
export const deleteRewardsSuccess = () =>({
  type: DELETE_REWARDS_SUCCESS
})

export const DELETE_REWARDS_ERROR = 'DELETE_REWARDS_ERROR';
export const deleteRewardsError = error => ({
  type: DELETE_REWARDS_ERROR,
  error
})