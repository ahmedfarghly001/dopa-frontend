// Import React and useState for managing state
import React, { useState } from 'react';

const LoginPage = () => {
  // State to manage focus for username and password inputs
  const [isUsernameFocused, setUsernameFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="border-2 border-white p-12 rounded-lg w-full max-w-sm"> {/* Adjusted width here */}
        <div className="flex flex-col items-center">
          <div className="mb-8">
          <img src="./assets/vertical.png" alt="Dopa Logo" className="h-16" />
          </div>
          <h1 className="text-white text-xl mb-8">Welcome back</h1>
          <form className="w-full">
            <div className="mb-6">
              <input 
                type="text" 
                placeholder={!isUsernameFocused ? "Username" : ""} 
                className="w-full p-3 border-2 border-white bg-transparent text-white placeholder-white leading-tight focus:outline-none focus:border-white focus:bg-transparent"
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
              />
            </div>
            <div className="mb-8">
              <input 
                type="password" 
                placeholder={!isPasswordFocused ? "Password" : ""} 
                className="w-full p-3 border-2 border-white bg-transparent text-white placeholder-white leading-tight focus:outline-none focus:border-white focus:bg-transparent"
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
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
