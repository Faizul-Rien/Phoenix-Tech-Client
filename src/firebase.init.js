// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwl6za2EcAkM9jlaHVORMOM16t0iQPfLc",
  authDomain: "phoenix-tech-d726e.firebaseapp.com",
  projectId: "phoenix-tech-d726e",
  storageBucket: "phoenix-tech-d726e.appspot.com",
  messagingSenderId: "224194181532",
  appId: "1:224194181532:web:a65a1a2a57b679b52cb059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

