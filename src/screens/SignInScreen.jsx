import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const SignInScreen = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>グーグルでログインする</button>
    </div>
  );
};

export default SignInScreen;
