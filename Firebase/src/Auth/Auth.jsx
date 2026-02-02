import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const SignUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => console.log(user))
    .catch((error) => console.log(error.message));
};

export const SignIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => console.log(user.user))
    .catch((error) => console.log(error.message));
};
