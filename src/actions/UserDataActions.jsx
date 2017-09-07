import fb from '../config/firebase.config';

const db = fb.database();

export const FETCH_BUDGETS = 'FETCH_BUDGETS';
export const CREATE_BUDGET = 'CREATE_BUDGET';

export function fetchBudgets(uid) {
  return (dispatch) => {
    db.ref(`users/${uid}`).child('budgets').on('value', (snapshot) => {
      dispatch({
        type: FETCH_BUDGETS,
        payload: snapshot.val(),
      });
    });
  };
}

export function fetchSelectedBudget(uid) {
  return (dispatch) => {
    db.ref(`users/${uid}`).child('budgets').once('value')
    .then((snapshot) => {
      // snapshot.forEach((budget) => {
      //   return budget.selected === true;
      // });
      console.log(snapshot);
    });
  }
}

export function createBudget(uid) {
  let newBudgetKey = '';

  return (dispatch) => {
    db.ref(`users/${uid}`).child('budgets')
      .push({
        selected: true,
        balance: 0
      })
      .then((res) => {
        console.log('Budget Created!', res)
        // dispatch({
        //   type: BUDGET_CREATED,
        //   payload
        // })
        newBudgetKey = res.key;
      })
      .then(() => {
        db.ref(`users/${uid}`).child('budgets').once('value')
          .then((snapshot) => {
            snapshot.forEach((budget) => {
              if (budget.key !== newBudgetKey) {
                db.ref(`users/${uid}`).child(`budgets/${budget.key}`)
                  .update({
                    selected: false,
                  });
              } else {
                dispatch({
                  type: CREATE_BUDGET,
                  payload: budget
                })
              }
            })
          });
      });
  };
}
