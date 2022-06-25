import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE-A_GkBhf3hcFWxAt2aLo-Cjw-EAJx1E",
  authDomain: "chatbox-aff77.firebaseapp.com",
  databaseURL: "https://chatbox-aff77.firebaseio.com",
  projectId: "chatbox-aff77",
  storageBucket: "chatbox-aff77.appspot.com",
  messagingSenderId: "876197962979",
  appId: "1:876197962979:web:053446cd03c247522c91d6",
  measurementId: "G-DF0CXF0ZZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;