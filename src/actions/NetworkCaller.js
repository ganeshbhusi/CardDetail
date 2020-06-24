import {APP_URL} from '../constants';
import axios from 'axios';
import {emptyObjectData} from '../utilities';

function baseAxios(options) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept-Language': options.language ? options.language : 'en',
    lang: options.lang ? options.lang : 'en',
    ...options.extraHeaders,
  };

  return axios.create({
    baseURL: APP_URL,
    timeout: options.timeout || 30000,
    headers: defaultHeaders,
  });
}

function executeRequest(
  method,
  pathname,
  data,
  options = {},
  dispatch,
  loadingCallback,
  successCallback,
  errorCallback,
) {
  const body =
    method === 'get' || !data
      ? {}
      : {
          data,
        };
  const reqObj = {
    method,
    url: pathname,
    params: options.query,
    ...body,
  };
  const baseAxiosRequest = baseAxios(options);
  return new Promise((resolve, reject) => {
    return baseAxiosRequest
      .request(reqObj)
      .then(res => {
        if (emptyObjectData(res) || emptyObjectData(res.data)) {
          dispatch(successCallback([]));
        } else {
          dispatch(successCallback(res.data));
        }
        resolve(res);
      })
      .catch(error => {
        dispatch(errorCallback(error));
        reject(error);
      });
  });
}

export default {
  post(
    pathname,
    data,
    options,
    dispatch,
    loadingCallback,
    successCallback,
    errorCallback,
  ) {
    dispatch(loadingCallback());
    return executeRequest(
      'post',
      pathname,
      data,
      options,
      dispatch,
      loadingCallback,
      successCallback,
      errorCallback,
    );
  },
};
