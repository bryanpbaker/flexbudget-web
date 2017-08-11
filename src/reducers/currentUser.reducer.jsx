import { AUTHENTICATE_USER, CURRENT_USER, CREATE_USER } from '../actions/AuthActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case AUTHENTICATE_USER:
      return action.payload;
    case CURRENT_USER:
      return action.payload;
    case CREATE_USER:
      return action.payload;
  }
}
