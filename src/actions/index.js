// import axios from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
import BaseAxios from './NetworkCaller';
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  LOGIN_API,
  USER_LOGOUT,
  USER_LOGIN_CLEAR,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  FETCH_CARDS_LOADING,
  DATA_API,
} from '../constants';

export function clearDetails(actionType) {
  return dispatch => {
    dispatch({type: actionType});
  };
}

export function updateStoreDetails(actionType, payload) {
  return dispatch => {
    dispatch({type: actionType, payload: payload});
  };
}

export function userLogin(data) {
  return dispatch => {
    BaseAxios.post(
      LOGIN_API,
      data,
      {},
      dispatch,
      userLoginLoading,
      userLoginSuccess,
      userLoginError,
    );
  };
}

export const userLoginError = error => {
  return {type: USER_LOGIN_ERROR, payload: {}};
};

export const userLoginSuccess = data => {
  return {type: USER_LOGIN_SUCCESS, payload: data};
};

export const userLoginLoading = data => {
  return {
    type: USER_LOGIN_LOADING,
    payload: {},
  };
};

export function fetchCardsData(data) {
  return dispatch => {
    BaseAxios.post(
      DATA_API,
      data,
      {},
      dispatch,
      fetchCardsDataLoading,
      fetchCardsDataSuccess,
      fetchCardsDataError,
    );
  };
}

export const fetchCardsDataError = error => {
  return {type: FETCH_CARDS_ERROR, payload: {}};
};

export const fetchCardsDataSuccess = data => {
  return {type: FETCH_CARDS_SUCCESS, payload: data};
};

export const fetchCardsDataLoading = data => {
  return {
    type: FETCH_CARDS_LOADING,
    payload: {},
  };
};
