import fb from '../config/firebase.config';

const auth = fb.auth();

export const CREATE_USER = 'CREATE_USER';

export function createUser(email, password) {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        dispatch({ type: CREATE_USER, payload: user });
      })
      .catch(error => console.error(error));
  };
}
