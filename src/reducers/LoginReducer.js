import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGOUT,
  USER_LOGIN_CLEAR,
} from '../constants';

const initialState = {
  loggedInData: {success: null, message: ''},
  isUserLoggedIn: null,
  loginStarted: null,
  loginSuccess: null,
  loginFailed: null,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginStarted: true,
        loginSuccess: true,
        loginFailed: false,
        loggedInData: action.payload,
        isUserLoggedIn: action.payload.success,
      };
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loginStarted: true,
        loginSuccess: false,
        loginFailed: false,
        loggedInData: {success: null, message: ''},
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loginStarted: true,
        loginSuccess: false,
        loginFailed: true,
        loggedInData: {success: null, message: ''},
      };
    case USER_LOGIN_CLEAR:
      return {
        ...state,
        loginStarted: null,
        loginSuccess: null,
        loginFailed: null,
        loggedInData: {success: null, message: ''},
        isUserLoggedIn: null,
      };
    case USER_LOGOUT:
      return {
        loggedInData: {success: false, message: ''},
        isUserLoggedIn: false,
        loginStarted: false,
        loginSuccess: false,
        loginFailed: false,
      };
    case 'UPDATE_LOGIN_DATA':
      return {
        ...state,
        loginStarted: true,
        loginSuccess: true,
        loginFailed: false,
        loggedInData: action.payload,
        isUserLoggedIn: true,
      };
    default:
      return state;
  }
};
export default loginReducer;
