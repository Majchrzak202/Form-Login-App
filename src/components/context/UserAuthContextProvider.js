import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
  }, [user]);

  return (
    <userAuthContext.Provider value={{ logout, login, user, signUp }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useAuth() {
    return useContext(userAuthContext)
}
