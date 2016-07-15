import * as types from '../constants/ActionTypes';

const initialState = {
  currentUser: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CURRENT_USER:
      return { ...state, currentUser: action.currentUser };
    case types.SIGNIN_ERROR:
    case types.SIGNUP_ERROR:
      return {...state, errors: action.errors};
    default:
      return state;
  }
}
