import { API_BASE_URL } from '../../config';
import * as actions from '../../actions/auth';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS
} from '../actions/auth';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

  it('should have a type of SET_AUTH_TOKEN', () => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';    
    const expectedAction = {
      type: 'SET_AUTH_TOKEN',
      authToken
    }
    const result = actions.setAuthToken(authToken);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_AUTH', () => {
    const expectedAction = {
      type: 'CLEAR_AUTH'      
    }
    const result = actions.clearAuth();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of AUTH_REQUEST', () => {
    const expectedAction = {
      type: 'AUTH_REQUEST'      
    }
    const result = actions.authRequest();
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of AUTH_SUCCESS', () => {
    const user = {}
    const expectedAction = {
      type: 'AUTH_SUCCESS',
      user      
    }
    const result = actions.authSuccess(user);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of AUTH_ERROR', () => {
    const err = 'string'
    const expectedAction = {
      type: 'AUTH_ERROR',
      err      
    }
    const result = actions.authError(err);
    expect(result).toEqual(expectedAction);
  });

  //needed:
  // storeAuthInfo, loginParent,loginChild, registerUser, registerChild, refreshAuthToken

});

// describe('asnyc loginParent action', () => {
//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });

//   it('should call storeAuthInfo and authRequest', () => {
//     const username = 'testGuy';
//     const password = 'password'
//     fetchMock
//       .getOnce('/login', 
//         {
//           body: JSON.stringify({ username, password }),
//           headers: { 'Content-Type': 'application/json' }
//         })

//     const expectedActions = [
//       { type: AUTH_REQUEST },      
//     ]    





//   });




// })
