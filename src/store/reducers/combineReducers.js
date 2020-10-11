import { combineReducers } from 'redux';

import user from './user';
import userInput from './userInput';
import error from './error';


export default combineReducers({
  user,
  userInput,
  error
})