import fb from '../config/firebase.config';

const auth = fb.auth();

export const CREATE_USER = 'CREATE_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const CURRENT_USER = 'CURRENT_USER';

export function createUser(email, password) {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User created!');
        console.log(user);
        dispatch({ type: CREATE_USER, payload: user });
      })
      .catch(error => console.error(error));
  };
}

export function authenticateUser(email, password) {
  return (dispatch) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User Logged In!');
        console.log(user);
        dispatch({ type: AUTHENTICATE_USER, payload: user });
      })
      .catch(error => console.error(error));
  };
}
