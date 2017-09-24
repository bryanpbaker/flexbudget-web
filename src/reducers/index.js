import { combineReducers } from 'redux';
import CurrentUserReducer from './currentUser.reducer';
import AuthStateReducer from './auth-state.reducer';
import PayPeriodsReducer from './pay-periods.reducer';
import SelectedPayPeriodReducer from './selectedPayPeriod.reducer';
import CategoriesReducer from './categories.reducer';

const rootReducer = combineReducers({
  authState: AuthStateReducer,
  currentUser: CurrentUserReducer,
  payPeriods: PayPeriodsReducer,
  selectedPayPeriod: SelectedPayPeriodReducer,
  categories: CategoriesReducer
});

export default rootReducer;
