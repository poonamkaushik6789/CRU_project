/*
Created By: Ashish Swami
Created Date: 01/06/2022
*/

import {
  SIGNUP_CREDENTIALS,
  SET_LOGIN_CREDENTIAL,
  SET_LOGIN_LOADER,
  SET_NETWORK_STATE,
  SET_DEFAULT_AUTH_SCREEN,
  
} from '../actions/ActionTypes';

// Redux states
const initialState = {
  isInternetConnected: false,
  loginCredentials: null,
  loginLoader: false,
  defaultAuthScreen: "Login"  //Login, ResetPaswword
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_NETWORK_STATE:
      return {
        ...state,
        isInternetConnected: action.payload,
      };
    case SET_LOGIN_CREDENTIAL:
      console.log('SET_LOGIN_CREDENTIAL:', action.payload)
      return {
        ...state,
        loginCredentials: action.payload,
      };
    case SET_LOGIN_LOADER:
      return {
        ...state,
        loginLoader: action.payload,
      };    
    case SET_DEFAULT_AUTH_SCREEN:
      return {
        ...state,
        defaultAuthScreen: action.payload,
      };
    default:
      return state;
  }
};

export default Auth;
