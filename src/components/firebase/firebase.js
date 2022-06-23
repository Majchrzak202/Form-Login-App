import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Qq1w7UjDEZZECDLFYO3bW3PyD2uxpyQ",
  authDomain: "fir-in-loginform-react.firebaseapp.com",
  projectId: "fir-in-loginform-react",
  storageBucket: "fir-in-loginform-react.appspot.com",
  messagingSenderId: "518967437707",
  appId: "1:518967437707:web:89fe3be65f408da72ce78e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
