import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCm0s93KD98PzZiAyQT1CsP6gPnzi-Exn4",
  authDomain: "filmino-app.firebaseapp.com",
  projectId: "filmino-app",
  storageBucket: "filmino-app.appspot.com",
  messagingSenderId: "1073729325285",
  appId: "1:1073729325285:web:47f509e7e213c5935f6c0c",
  measurementId: "G-8EHSB1T9F8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
