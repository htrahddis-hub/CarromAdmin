// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8zwAWJaw8YBeGL3g0mKsALm_2mxYqgig",
  authDomain: "my-project-1652069437924.firebaseapp.com",
  projectId: "my-project-1652069437924",
  storageBucket: "my-project-1652069437924.appspot.com",
  messagingSenderId: "410204449576",
  appId: "1:410204449576:web:84f7be64efe116699bfe1d",
  measurementId: "G-RBWV0XF0KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
