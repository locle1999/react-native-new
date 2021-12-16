
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBlXvw5fUYjcSV-50scAmm6GN1Ldm0XNWE",
    authDomain: "reactnativefresh.firebaseapp.com",
    projectId: "reactnativefresh",
    storageBucket: "reactnativefresh.appspot.com",
    messagingSenderId: "985921171747",
    appId: "1:985921171747:web:6218896fcb76cf8b435c96",
    measurementId: "G-XQ8669K9VE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth()
export { auth, db };
