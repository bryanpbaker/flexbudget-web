import { AUTHENTICATE_USER, CURRENT_USER, CREATE_USER, FACEBOOK_AUTHENTICATE_USER } from '../actions/AuthActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case FACEBOOK_AUTHENTICATE_USER:
      return action.payload.user;
    case AUTHENTICATE_USER:
      return action.payload;
    case CURRENT_USER:
      return action.payload;
    case CREATE_USER:
      return action.payload;
  }
}
