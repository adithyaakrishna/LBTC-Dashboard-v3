import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAGEfhllCHp8z3P6JIj29OYzYVRWk2tNJk",
    authDomain: "lbtc-dashboard-v3.firebaseapp.com",
    databaseURL: "https://lbtc-dashboard-v3.firebaseio.com",
    projectId: "lbtc-dashboard-v3",
    storageBucket: "lbtc-dashboard-v3.appspot.com",
    messagingSenderId: "599541135638",
    appId: "1:599541135638:web:a647fb71666164cd113837",
    measurementId: "G-8LS8SQLZN2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();