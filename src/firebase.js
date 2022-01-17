// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE5svvcctNm7lCFXxQjK7KIsKIZlhZe7A",
  authDomain: "sage-b2c61.firebaseapp.com",
  projectId: "sage-b2c61",
  storageBucket: "sage-b2c61.appspot.com",
  messagingSenderId: "388490816286",
  appId: "1:388490816286:web:3a718a4f9cb41344f0370f",
  measurementId: "G-KDSN5PBL0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;