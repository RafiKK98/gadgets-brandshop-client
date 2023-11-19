// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwWFw-Cc1Y7jscwxqMJz4QE2yc3jZwUdk",
    authDomain: "gadgets-brand-shop.firebaseapp.com",
    projectId: "gadgets-brand-shop",
    storageBucket: "gadgets-brand-shop.appspot.com",
    messagingSenderId: "632599133263",
    appId: "1:632599133263:web:8553ca217d013a503abe3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;