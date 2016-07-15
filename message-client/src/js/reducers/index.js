import { combineReducers } from 'redux';
import friendList from './friendList';
import authentication from './authentication';

const rootReducer = combineReducers({
  friendList,
  authentication
});

export default rootReducer;
