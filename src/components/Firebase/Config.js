import { firebase, initializeApp } from 'firebase/app';
import firebaseui from 'firebaseui';



const firebaseConfig = {
    apiKey: "AIzaSyAviin84mdNM-6vdNeLRd_R646XhsKUpfk",
    authDomain: "login-form-app-profile-picture.firebaseapp.com",
    projectId: "login-form-app-profile-picture",
    storageBucket: "login-form-app-profile-picture.appspot.com",
    messagingSenderId: "797860966461",
    appId: "1:797860966461:web:54e5a10ec2534f33f43a54"
  };

const app = initializeApp(firebaseConfig);
const ui = new firebaseui.auth.AuthUI(firebase.auth())

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  });


