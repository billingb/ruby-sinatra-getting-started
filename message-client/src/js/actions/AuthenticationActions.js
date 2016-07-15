import * as types from '../constants/ActionTypes';
import { checkStatus } from '../utils';
import { push } from 'react-router-redux';


function signupSuccess(json) {
  console.log('signup successful: ' + json.token);
  return {
    type: types.CURRENT_USER,
    currentUser: json.token
  }
}

function signupError(json) {
  return {
    type: types.SIGNUP_ERROR
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
        dispatch(push('/friends'));
      }).catch(e => {
        console.log('Error making signup request' + e);
        // e.response.json()
        //   .then((errorJSON) => {
        //     dispatch(signupError(errorJSON));
        //   });
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
        dispatch(push('/friends'));
      }).catch(e => {
        console.log('Error making signup request' + e);
        // e.response.json()
        //   .then((errorJSON) => {
        //     dispatch(signupError(errorJSON));
        //   });
      })
  }
}
