import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import characters from './characters';

const rootReducer = combineReducers({
  user,
  flash,
  characters,
});

export default rootReducer;
