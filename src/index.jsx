import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr6qfrvlWNaPlS7cCcbcovCKtYXIdMqhc",
  authDomain: "collectibles-74c25.firebaseapp.com",
  projectId: "collectibles-74c25",
  storageBucket: "collectibles-74c25.appspot.com",
  messagingSenderId: "452636319771",
  appId: "1:452636319771:web:914007d6456f1abf6a58be"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);