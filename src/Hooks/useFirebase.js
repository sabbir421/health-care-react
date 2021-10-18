import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initAuth from "../Firebase/FirebaseInit";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(user);
      setUser(result.user);
    });
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    user,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
