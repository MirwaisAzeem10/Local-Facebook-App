// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdQTn5SxFTrLlR1YV0Mx75ZN3S3hlQ8IE",
  authDomain: "mybook-d10.firebaseapp.com",
  projectId: "mybook-d10",
  storageBucket: "mybook-d10.appspot.com",
  messagingSenderId: "1002461604039",
  appId: "1:1002461604039:web:3e4e4519c74febc7af76e2",
  measurementId: "G-R3RVV0XNEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);