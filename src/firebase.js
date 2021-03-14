import firebase from "firebase"

  var firebaseConfig = {
    apiKey: "AIzaSyBwyHeIHtGePWXUV0DwLs5ByNH9FpiRReQ",
    authDomain: "bt3103-week-6-2c1d3.firebaseapp.com",
    projectId: "bt3103-week-6-2c1d3",
    storageBucket: "bt3103-week-6-2c1d3.appspot.com",
    messagingSenderId: "410566472071",
    appId: "1:410566472071:web:e05fc6dcd8079a5904a322",
    measurementId: "G-4J8D5M54D8"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;