import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ProfilePage from './ProfilePage';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyCU-J3UgwX_N_8O_T6PRKD4DCVqoBmc79I",
    authDomain: "images-smt.firebaseapp.com",
    databaseURL: "https://images-smt.firebaseio.com",
    projectId: "images-smt",
    storageBucket: "images-smt.appspot.com",
    messagingSenderId: "713698469156"
  };
  firebase.initializeApp(config);

ReactDOM.render(<ProfilePage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
