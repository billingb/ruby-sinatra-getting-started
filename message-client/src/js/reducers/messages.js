import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  messages: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_MESSAGES:
      return { ...state,
        isFetching: true
      };
    case types.FETCH_MESSAGES_SUCCESS:
      return {...state,
        isFetching: false,
        messages: action.messages
      };
    case types.FETCH_MESSAGES_ERROR:
      return {...state,
        isFetching: false,
        errors: action.errors};
    default:
      return state;
  }
}
