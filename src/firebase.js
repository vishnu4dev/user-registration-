import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBgLSMkcC2R2m5Ro6uXuLaOsfIfgnrwijY",
  authDomain: "register-user-54fea.firebaseapp.com",
  databaseURL: "https://register-user-54fea.firebaseio.com",
  projectId: "register-user-54fea",
  storageBucket: "register-user-54fea.appspot.com",
  messagingSenderId: "393359394742",
  appId: "1:393359394742:web:496e1e027cd5b2fa57e317",
  measurementId: "G-135MB7WH34"
};
var firedb = firebase.initializeApp(firebaseConfig);

export default firedb.database().ref();
