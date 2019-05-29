import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD2EBqu7jFw8yfcV7qVPk-vKJFS7F-oXs0',
  authDomain: 'todo-adc74.firebaseapp.com',
  databaseURL: 'https://todo-adc74.firebaseio.com',
  projectId: 'todo-adc74',
  storageBucket: 'todo-adc74.appspot.com',
  messagingSenderId: '285511969067',
  appId: '1:285511969067:web:7924aa28c8b592de'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();

export default dbRef;
