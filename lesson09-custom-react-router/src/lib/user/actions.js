import firebase from 'firebase';
import Cookie from 'js-cookie';
import dbRef from '../../dbRef';

export const authDone = ({ uid, email }) => ({
  type: 'AUTH_DONE',
  user: { uid, email }
});

export const authUser = ({ username, password }) => ({ dispatch }) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .then(firebaseUser => {
      const { uid, email } = firebaseUser.user;
      Cookie.set('todo_user', uid);
      Cookie.set('todo_email', email);
      dispatch(authDone({ uid, email }));

      return { uid, email };
    })
    .then(() => dispatch(initialiseListeners()));

  return { type: 'AUTH_USER' };
};

export const logOut = () => ({ dispatch }) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      Cookie.remove('todo_user');
      Cookie.remove('todo_email');
      dispatch({ type: 'LOGGED_OUT' });
    })
    .catch(error => dispatch({ type: 'LOGOUT_ERROR', error }));

  return { type: 'LOGOUT_STARTED' };
};

export const initialiseListeners = () => ({ dispatch }) => {
  const uid = Cookie.get('todo_user');
  const email = Cookie.get('todo_email');

  if (uid) {
    dispatch(authDone({ uid, email }));

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
  }

  return { type: 'INITIALISE_LISTENERS' };
};
