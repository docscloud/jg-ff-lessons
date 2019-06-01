import firebase from 'firebase';
import Cookie from 'js-cookie';
import dbRef from '../../dbRef';

export const authUser = user => ({ type: 'AUTH_DONE', user });

export const logOut = () => ({ dispatch }) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      Cookie.remove('todo_user');
      dispatch({ type: 'LOGGED_OUT' });
    })
    .catch(error => dispatch({ type: 'LOGOUT_ERROR', error }));

  return { type: 'LOGOUT_STARTED' };
};

export const loadData = () => ({ dispatch }) => {
  const uid = Cookie.get('todo_user');
  console.log('UID', uid);

  if (uid) {
    dbRef
      .child(`${uid}`)
      .once('value')
      .then(data => data.val())
      .then(data => dispatch({ type: 'DATA_LOADED', data }));

    // child_added listener receives all added childs on items collection
    dbRef.child(`${uid}/items`).on('child_added', d => {
      const task = d.val();
      dispatch({ type: 'ADD_TASK_DONE', task });
    });
  }

  return { type: 'DATA_NOT_LOADED' };
};
