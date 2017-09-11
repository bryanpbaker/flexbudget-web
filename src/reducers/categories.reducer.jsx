import { FETCH_CATEGORIES } from '../actions/BudgetActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FETCH_CATEGORIES:
      return action.payload;
  }
}
