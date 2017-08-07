import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCBYuIYVbb-JpzpAyZcw3llhfV1s-98rM8',
  authDomain: 'budgetapp-62fb5.firebaseapp.com',
  databaseURL: 'https://budgetapp-62fb5.firebaseio.com',
  projectId: 'budgetapp-62fb5',
  storageBucket: 'budgetapp-62fb5.appspot.com',
  messagingSenderId: '299624564975',
};

const fb = firebase.initializeApp(config);

export default fb;
