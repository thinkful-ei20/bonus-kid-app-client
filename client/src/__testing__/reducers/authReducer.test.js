import authReducer from '../../reducers/authReducer'
import {
  setAuthToken,
  clearAuth,
  authRequest,
  authError,
  authSuccess
} from '../../actions/auth';

describe('authReducer', () => {

  it('should return the initial state', () => {
    const initialState = {
      authToken: null,
      loading: false,
      error: null,
      user: null
    };
    const result = authReducer(undefined, {})
    expect(result).toEqual(initialState)
  });

  it('setAuthToken should set an authToken', () => {
    const authTokenInput = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const initialState = {
      authToken: null,
      loading: false,
      error: null,
      user: null
    };
    const action = setAuthToken(authTokenInput);
    const result = authReducer(initialState, action)
    console.log(result);
    
    expect(result.authToken).toEqual(authTokenInput)
  });

  it('clearAuth should clear the authToken to null', () => {
    const initialState = {
      authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      loading: false,
      error: null,
      user: null
    };
    const action = clearAuth();
    const result = authReducer(initialState, action)
    expect(result.authToken).toEqual(null)
  });

  it('authRequest should set loading:false, error:null', () => {
    const initialState = {
      authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      loading: false,
      error: {message: "something"},
      user: null
    };
    
    const action = authRequest();
    const result = authReducer(initialState, action);    
    expect(result.loading).toEqual(true)
    expect(result.error).toEqual(null)
  });

  it('authError should set loading:false, error:action.err', () => {
    const err = {message: 'example'}
    const initialState = {
      authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      loading: true,
      error: null,
      user: null
    };
    const action = authError(err);
    const result = authReducer(initialState, action);    
    expect(result.error.message).toEqual('example');
    expect(result.error).toEqual(err);
    expect(result.loading).toEqual(false);
  });

  it('authSuccess should set loading:false, user:action.user', () => {
    const user = {
      name:"testName", 
      child: [
        {childName:"testChild"}
      ]
    };
    const initialState = {
      authToken: null,
      loading: true,
      error: null,
      user: null
    };
    const action = authSuccess(user);
    const result = authReducer(initialState, action);
    expect(result.user).toEqual(user);
    expect(result.user.name).toEqual('testName');
    expect(result.user.child[0].childName).toEqual('testChild');
    expect(result.loading).toEqual(false);
  });


});