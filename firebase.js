import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyApSxanyBb6D2IVtFCL29dHsRaq4xV2CG4",
  authDomain: "blog-comments-995eb.firebaseapp.com",
  databaseURL: "https://blog-comments-995eb.firebaseio.com",
  projectId: "blog-comments-995eb",
  storageBucket: "blog-comments-995eb.appspot.com",
  messagingSenderId: "335918297592",
  appId: "1:335918297592:web:30f56d162560dc1df6260d"
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase