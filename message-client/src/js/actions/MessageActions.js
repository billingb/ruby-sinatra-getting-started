import * as types from '../constants/ActionTypes';
import { checkStatus } from '../utils';


export function fetchMessagesRequest() {
  return {
    type: types.FETCH_MESSAGES
  }
}

function fetchMessagesSuccess(messages) {
  return {
    type: types.FETCH_MESSAGES_SUCCESS,
    messages: messages
  }
}

function fetchMessagesError() {
  return {
    type: types.FETCH_MESSAGES_ERROR
  }
}

export function fetchMessages(token) {
  return (dispatch) => {
    dispatch(fetchMessagesRequest);
    console.log('Starting fetch for messages');
    return fetch('/messages', {
      headers: {'Authorization': token}
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchMessagesSuccess(json));
      }).catch(e => {
        console.log('Error making messages request' + e);
        dispatch(fetchMessagesError());
      })
  }
}
