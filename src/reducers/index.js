import { combineReducers } from 'redux';
import CurrentUserReducer from './currentUser.reducer';
import BudgetsReducer from './budgets.reducer';
import SelectedBudgetReducer from './selectedBudget.reducer';

const rootReducer = combineReducers({
  currentUser: CurrentUserReducer,
  budgets: BudgetsReducer,
  selectedBudget: SelectedBudgetReducer
});

export default rootReducer;
