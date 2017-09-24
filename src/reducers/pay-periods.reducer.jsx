import { FETCH_PAY_PERIODS } from '../actions/PayPeriodActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FETCH_PAY_PERIODS:
      return action.payload;
  }
}
