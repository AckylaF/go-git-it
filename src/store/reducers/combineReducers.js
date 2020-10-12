import { combineReducers } from 'redux';

import user from './user';
import userInput from './userInput';
import repos from './repos';
import error from './error';


export default combineReducers({
  user,
  userInput,
  repos,
  error
})