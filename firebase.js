import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAtvOAx_ys2BK3SlN7Gn9VORa7E3S4LDr4",
    authDomain: "reactnotificacion.firebaseapp.com",
    databaseURL: "https://reactnotificacion.firebaseio.com",
    projectId: "reactnotificacion",
    storageBucket: "reactnotificacion.appspot.com",
    messagingSenderId: "614596991281"
  };
  firebase.initializeApp(config);

  export default firebase;
