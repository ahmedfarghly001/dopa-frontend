import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  // State to manage focus for username and password inputs
  const [isUsernameFocused, setUsernameFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To handle error messages

  const navigate = useNavigate();

  // Validation function
  const validateForm = () => {
    if (!email || !password) {
      setError("Both fields are required.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in");
      // Redirect to the dashboard page
      navigate("/");
    } catch (error) {
      console.log(error);

      // Map Firebase error codes to custom error messages
      let errorMessage = "";
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "User not found. Please check your email address.";
          break;
        case "auth/wrong-password":
          errorMessage = "Invalid password. Please try again.";
          break;
        default:
          errorMessage = "An error occurred. Please try again later.";
      }

      setError(errorMessage);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="border-2 border-white p-12 rounded-lg w-full max-w-sm">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <img src="/vertical.png" alt="Dopa Logo" className="h-16" />
          </div>
          <h1 className="text-white text-xl mb-8">Welcome back</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-6">
              <input 
                type="text" 
                placeholder={!isUsernameFocused ? "Username" : ""} 
                className="w-full p-3 border-2 border-white bg-transparent text-white placeholder-white leading-tight focus:outline-none focus:border-white focus:bg-transparent"
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <input 
                type="password" 
                placeholder={!isPasswordFocused ? "Password" : ""} 
                className="w-full p-3 border-2 border-white bg-transparent text-white placeholder-white leading-tight focus:outline-none focus:border-white focus:bg-transparent"
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-teal hover:bg-teal-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
