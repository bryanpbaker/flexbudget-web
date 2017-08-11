import { combineReducers } from 'redux';
import CurrentUserReducer from './currentUser.reducer';

const rootReducer = combineReducers({
  currentUser: CurrentUserReducer,
});

export default rootReducer;
