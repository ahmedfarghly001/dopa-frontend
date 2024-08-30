import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the countdown timer and pop-up visibility
  const [timer, setTimer] = useState(300); // 300 seconds (5 minutes)
  const [showPopup, setShowPopup] = useState(false);

  // useEffect to start the timer when the component mounts
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          setShowPopup(true); // Show the popup when the timer runs out
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  // Function to format timer seconds into minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <header className="bg-black text-white py-4">  {/* Reduced the vertical padding */}
        <div className="container mx-auto flex justify-between items-baseline px-10 pl-24">
          <div className="flex items-center space-x-16">
            <Link to="/">  {/* Wrap the logo in a Link */}
              <img src="/vertical.png" alt="Logo" className="h-16" />
            </Link>
          </div>
          <div className="flex items-center" style={{ marginTop: '-8px' }}>  {/* Added negative margin-top */}
            <div className="border-2 border-white rounded px-3 py-1 text-lg mr-4">
              {formatTime(timer)}
            </div>
            <Link to="/Login-Page" className="text-2xl font-medium hover:text-gray-400">Sign out</Link>
          </div>
        </div>
      </header>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2>Time's up!</h2>
            <p>Your session will expire soon.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
