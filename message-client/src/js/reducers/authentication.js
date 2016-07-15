import * as types from '../constants/ActionTypes';

const initialState = {
  token: null,
  userName: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CURRENT_USER:
      return { ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.token,
        userName: null,
        statusText: 'You have been successfully logged in.'
      };
    case types.LOGOUT_USER:
      return {...state,
        'isAuthenticated': false,
        token: null,
        'userName': null,
        'statusText': 'You have been successfully logged out.'
      };
    case types.LOGIN_ERROR:
    case types.SIGNUP_ERROR:
      return {...state,
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        userName: null,
        errors: action.errors};
    default:
      return state;
  }
}
