import { combineReducers } from 'redux';
import friendList from './friendList';
import authentication from './authentication';
import messages from './messages';

const rootReducer = combineReducers({
  friendList,
  authentication,
  messages
});

export default rootReducer;
