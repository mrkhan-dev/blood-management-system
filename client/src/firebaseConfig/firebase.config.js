// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUPhWbEUzEseIOaCQGNWMTjewE5erH_Q",
  authDomain: "blood-management-system-1.firebaseapp.com",
  projectId: "blood-management-system-1",
  storageBucket: "blood-management-system-1.appspot.com",
  messagingSenderId: "545524472222",
  appId: "1:545524472222:web:751f2d511431baa3465e8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
