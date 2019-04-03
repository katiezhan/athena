import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDTD3pOnwl5JYVNJKrBLCcvAo6YwLeBXw8",
    authDomain: "athena-ai-7677d.firebaseapp.com",
    databaseURL: "https://athena-ai-7677d.firebaseio.com",
    projectId: "athena-ai-7677d",
    storageBucket: "athena-ai-7677d.appspot.com",
    messagingSenderId: "863886539764"
  };
var fire = firebase.initializeApp(config);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default fire