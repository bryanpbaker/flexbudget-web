import { combineReducers } from 'redux';
import CurrentUserReducer from './currentUser.reducer';
import PayPeriodsReducer from './pay-periods.reducer';
import SelectedPayPeriodReducer from './selectedPayPeriod.reducer';
import CategoriesReducer from './categories.reducer';

const rootReducer = combineReducers({
  currentUser: CurrentUserReducer,
  payPeriods: PayPeriodsReducer,
  selectedPayPeriod: SelectedPayPeriodReducer,
  categories: CategoriesReducer
});

export default rootReducer;
