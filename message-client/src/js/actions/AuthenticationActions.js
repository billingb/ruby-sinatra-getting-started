import * as types from '../constants/ActionTypes';
import { checkStatus } from '../utils';
import { push } from 'react-router-redux';


function signupSuccess(json) {
  console.log('signup successful: ' + json.token);
  localStorage.setItem('authToken', json.token);
  return {
    type: types.CURRENT_USER,
    token: json.token
  }
}

export function loginUser(token) {
  console.log('login from token: ' + token);
  localStorage.setItem('authToken', token);
  return {
    type: types.CURRENT_USER,
    token: token
  }
}

function signupError() {
  localStorage.removeItem('authToken');
  return {
    type: types.SIGNUP_ERROR
    // error: json.error
  }
}

function loginError() {
  localStorage.removeItem('authToken');
  return {
    type: types.LOGIN_ERROR
  }
}

export function signUp(data) {
  return (dispatch) => {
    console.log('Starting fetch for signup with data' + data.JSON);
    return fetch('/signup?email=' + data.email + '&password=' + data.password, {method: 'POST'})
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        dispatch(signupSuccess(json));
        dispatch(push('/'));
      }).catch(e => {
        console.log('Error making signup request' + e);
        dispatch(signupError());
      })
  }
}

export function login(data) {
  return (dispatch) => {
    console.log('Starting fetch for signup with data' + data.JSON);
    return fetch('/login?email=' + data.email + '&password=' + data.password, {method: 'POST'})
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        dispatch(signupSuccess(json));
        dispatch(push('/'));
      }).catch(e => {
        console.log('Error making signup request' + e);
        dispatch(loginError());
      })
  }
}
