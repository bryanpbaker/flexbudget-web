// import firebase config
import fb from '../config/firebase.config';
import shortid from 'shortid';

// firebase database() ref
const db = fb.database();

// parse uid of current user from localStorage
const userId = JSON.parse(localStorage.getItem(Object.keys(window.localStorage)
  .filter(item => item.startsWith('firebase:authUser'))[0])).uid;

// base pay periods node
const payPeriodsRef = db.ref(`users/${userId}`).child('pay-periods');

// action types
export const FETCH_PAY_PERIODS = 'FETCH_PAY_PERIODS';
export const CREATE_PAY_PERIOD = 'CREATE_PAY_PERIOD';
export const SELECTED_PAY_PERIOD = 'SELECTED_PAY_PERIOD';

/**
 * fetches a list of pay periods from firebase
 * @param  {string} uid the user's uid
 * @return {function} dispatch list of pay periods
 */
export function fetchPayPeriods() {
  return (dispatch) => {
    payPeriodsRef.on('value', (snapshot) => {
      dispatch({
        type: FETCH_PAY_PERIODS,
        payload: snapshot.val(),
      });
    });
  };
}

/**
 * fetches the currently selected pay period
 * @param  {string} uid the user's uid
 * @return {dispatch} dispatches the selected pay period
 */
export function fetchSelectedPayPeriod() {
  return (dispatch) => {
    payPeriodsRef.once('value')
    .then((snapshot) => {
      snapshot.forEach((payPeriod) => {
        if (payPeriod.val().selected === true) {
          dispatch({
            type: SELECTED_PAY_PERIOD,
            payload: payPeriod.val(),
          });
        }
      });
    });
  };
}

export function createPayPeriod(payPeriodName, startDate, endDate) {
  let newPayPeriodKey = '';

  return (dispatch) => {
    payPeriodsRef
      .push({
        id: shortid.generate(),
        name: payPeriodName,
        selected: true,
        startDate: startDate.format('MMMM D, YYYY'),
        endDate: endDate.format('MMMM D, YYYY'),
        balance: 0,
      })
      .then((res) => {
        newPayPeriodKey = res.key;
      })
      .then(() => {
        payPeriodsRef.once('value')
          .then((snapshot) => {
            snapshot.forEach((payPeriod) => {
              if (payPeriod.key !== newPayPeriodKey) {
                payPeriodsRef.child(payPeriod.key)
                  .update({
                    selected: false,
                  });
              } else {
                dispatch({
                  type: CREATE_PAY_PERIOD,
                  payload: payPeriod.val(),
                });
              }
            });
          });
      });
  };
}

export function selectPayPeriod(id) {

};
