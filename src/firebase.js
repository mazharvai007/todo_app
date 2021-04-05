import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDJt2XVV_ogtNdSwUO5-pufx8l3O2Vgz98',
	authDomain: 'todoapp-e36ab.firebaseapp.com',
	projectId: 'todoapp-e36ab',
	storageBucket: 'todoapp-e36ab.appspot.com',
	messagingSenderId: '928959702475',
	appId: '1:928959702475:web:248b702d4d760c13b2c24e',
	measurementId: 'G-4GKED50HER',
});

const db = firebaseApp.firestore();

export default db;
