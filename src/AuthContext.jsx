import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase_config";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to the Firebase auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      setUser(userCredential.user);
      console.log("logged in");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      console.log("logged out");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    // Show a loading state while checking the authentication status
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
