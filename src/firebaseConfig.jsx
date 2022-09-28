import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAr6qfrvlWNaPlS7cCcbcovCKtYXIdMqhc",
    authDomain: "collectibles-74c25.firebaseapp.com",
    projectId: "collectibles-74c25",
    storageBucket: "collectibles-74c25.appspot.com",
    messagingSenderId: "452636319771",
    appId: "1:452636319771:web:914007d6456f1abf6a58be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);