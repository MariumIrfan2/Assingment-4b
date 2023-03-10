// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBr4akFNWZHU4mFeKfVVvoTwGY5BwTaxYk",
    authDomain: "fir-auth-afc9a.firebaseapp.com",
    databaseURL: "https://fir-auth-afc9a-default-rtdb.firebaseio.com",
    projectId: "fir-auth-afc9a",
    storageBucket: "fir-auth-afc9a.appspot.com",
    messagingSenderId: "398691867865",
    appId: "1:398691867865:web:6242d027ed3b0289e4f2c8",
    measurementId: "G-GVD6FTEQMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;