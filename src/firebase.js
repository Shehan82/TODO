

import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCZJ0dTArRRhITQeEBs-y7hguaVwfLlPUI",
    authDomain: "todo-app-58ecc.firebaseapp.com",
    databaseURL: "https://todo-app-58ecc.firebaseio.com",
    projectId: "todo-app-58ecc",
    storageBucket: "todo-app-58ecc.appspot.com",
    messagingSenderId: "395756382603",
    appId: "1:395756382603:web:43c066bb3e989b91fe678e",
    measurementId: "G-HBL68M4LV2"

});

const db = firebaseApp.firestore();

export default db;