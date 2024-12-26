// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBMUtx6LVO3Dovo9AvyOg5u1xeIy5FJVvA",
//   authDomain: "poyscoco-4644a.firebaseapp.com",
//   databaseURL:
//     "https://poyscoco-4644a-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "poyscoco-4644a",
//   storageBucket: "poyscoco-4644a.firebasestorage.app",
//   messagingSenderId: "166888124957",
//   appId: "1:166888124957:web:23e9129755ad98238d0cf4",
//   measurementId: "G-0B5X8Y4EZH",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMUtx6LVO3Dovo9AvyOg5u1xeIy5FJVvA",
  authDomain: "poyscoco-4644a.firebaseapp.com",
  databaseURL:
    "https://poyscoco-4644a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "poyscoco-4644a",
  storageBucket: "poyscoco-4644a.appspot.com", // Updated to correct the storage bucket format
  messagingSenderId: "166888124957",
  appId: "1:166888124957:web:23e9129755ad98238d0cf4",
  measurementId: "G-0B5X8Y4EZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Reference
const db = getFirestore(app);

export default db;
