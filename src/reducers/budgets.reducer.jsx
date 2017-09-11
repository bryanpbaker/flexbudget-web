import { FETCH_BUDGETS } from '../actions/BudgetActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FETCH_BUDGETS:
      return action.payload;
  }
}
