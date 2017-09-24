import { CREATE_PAY_PERIOD, SELECTED_PAY_PERIOD } from '../actions/PayPeriodActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case CREATE_PAY_PERIOD:
      return action.payload
    case SELECTED_PAY_PERIOD:
      return action.payload
  }
}
