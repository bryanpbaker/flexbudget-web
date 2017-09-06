import fb from '../config/firebase.config';

const db = fb.database();

export const CREATE_USER_PROFILE = 'CREATE_USER_PROFILE';

export function createUserData(uid, name, email) {
  return (dispatch) => {
    db.ref(`users/${uid}`)
      .set({
        username: name.replace(/\s/g, '').toLowerCase(),
        email,
      })
      .then(() => console.log('User data has been created!'));
  };
}
