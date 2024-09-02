import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFhDfLf-u3grynyYysT60iErqrirlKNZY",
    authDomain: "react-auth-a0c23.firebaseapp.com",
    projectId: "react-auth-a0c23",
    storageBucket: "react-auth-a0c23.appspot.com",
    messagingSenderId: "999427719968",
    appId: "1:999427719968:web:b50bb301870b5ca259cd45",
    measurementId: "G-TF2ZJQ213K"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;
  