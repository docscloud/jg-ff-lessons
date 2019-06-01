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

    const itemsRef = dbRef.child(`${uid}/items`);
    // child_added listener receives all added childs on items collection
    itemsRef.on('child_added', d =>
      dispatch({ type: 'ADD_TASK_DONE', task: d.val() })
    );

    // child_changed listener receives the item that was changed on every change
    itemsRef.on('child_changed', d =>
      dispatch({ type: 'CHECK_ITEM_DONE', item: d.val() })
    );

    // child_removed listener receives every removed item
    itemsRef.on('child_removed', d =>
      dispatch({ type: 'REMOVE_ITEM_DONE', item: d.val() })
    );

    dbRef.child(`${uid}/user`).on('value', d => console.log('USER', d.val()));
  }

  return { type: 'DATA_NOT_LOADED' };
};
