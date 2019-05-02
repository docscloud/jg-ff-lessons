import firebase from 'firebase';

export default state =>
  firebase
    .database()
    .ref(`users/${state.uid}`)
    .once('value')
    .then(snap => snap.val());
