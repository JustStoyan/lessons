// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCJRTHug0NgN22c4hup5F8fvG2NuR77ASg",

    authDomain: "lessons-e9b70.firebaseapp.com",

    databaseURL: "https://lessons-e9b70-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "lessons-e9b70",

    storageBucket: "lessons-e9b70.appspot.com",

    messagingSenderId: "410910839837",

    appId: "1:410910839837:web:e9228b79c810e908afa2f4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;