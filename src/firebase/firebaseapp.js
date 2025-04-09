import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyC7W9n53RsjJrOKFiTGgSrW88jfPBJrT8c',
    authDomain: 'yomiroku-ae7ed.firebaseapp.com',
    projectId: 'yomiroku-ae7ed',
    storageBucket: 'yomiroku-ae7ed.firebasestorage.app',
    messagingSenderId: '445062820914',
    appId: '1:445062820914:web:29ef547f708f7ba18ff82b',
    measurementId: 'G-PEGE35VE2F',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);