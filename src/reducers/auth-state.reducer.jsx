import { AUTH_STATE } from '../actions/AuthActions';

export default function (state = null, action) {
  switch (action.type) {
    default: return state;
    case AUTH_STATE:
      if (action.payload) {
        return action.payload;
      }

      return state;
  }
}
