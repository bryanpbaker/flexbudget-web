import firebase from 'firebase';
import fb from '../config/firebase.config';

const auth = fb.auth();

export const CREATE_USER = 'CREATE_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const CURRENT_USER = 'CURRENT_USER';
export const FACEBOOK_AUTHENTICATE_USER = 'FACEBOOK_AUTHENTICATE_USER';

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

export function facebookAuthenticateUser() {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  return (dispatch) => {
    auth
      .signInWithPopup(facebookProvider)
        .then((response) => {
          dispatch({ type: FACEBOOK_AUTHENTICATE_USER, payload: response})
        });
  };
}

export function getCurrentUser() {
  return (dispatch) => {
    auth
      .onAuthStateChanged((user) => {
        if (user) {
          console.log('user', user);
          dispatch({ type: CURRENT_USER, payload: user });
        } else {
          dispatch({ type: CURRENT_USER, payload: false })
          console.log('No user is currently signed in');
        }
      });
  };
}

export function signUserOut() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: CURRENT_USER, payload: null })
      });
  }
}
