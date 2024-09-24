import React, { useEffect, useState } from 'react';

const CreditTracker = () => {
  const [score, setScore] = useState(0);

  // Simulate score animation
  useEffect(() => {
    let currentScore = 0;
    const interval = setInterval(() => {
      if (currentScore < 720) {
        currentScore += 10; // Increment score by 10
        setScore(currentScore);
      } else {
        clearInterval(interval);
      }
    }, 30); // Update every 30 milliseconds for smooth animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-auto m-10 p-8 h-auto bg-white rounded-lg shadow-lg">
      {/* Left Section */}
      <div className="flex-1 md:mr-8">
        <h2 className="text-5xl font-extrabold font-mono text-gray-800 mb-4">Credit Tracker</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Improve your credit score with in-depth insights & personalized tips - all 100% FREE!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white shadow-lg py-6 px-5 rounded-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 duration-300 max-w-sm">
  <img src="https://moneyview.in/images/ic-ct-free-reports-V3.svg" alt="Free Monthly Report" className="w-16 h-16 mx-auto mb-4" />
  <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">Free Monthly Report</h1>
  <p className="text-gray-600 text-center text-sm">
    Get your monthly credit report and personalized insights for free.
  </p>
</div>

<div className="bg-white shadow-lg py-6 px-5 rounded-lg transition transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 duration-300 max-w-sm">
  <img src="https://moneyview.in/images/ic-ct-free-reports-V3.svg" alt="Free Monthly Report" className="w-16 h-16 mx-auto mb-4" />
  <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">Free Monthly Report</h1>
  <p className="text-gray-600 text-center text-sm">
    Get your monthly credit report and personalized insights for free.
  </p>
</div>

        </div>

       
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center justify-center mt-8 md:mt-0">
        <div className="relative w-64 h-56 mb-4">
          {/* Background Half Circle */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
            {/* Full background arc */}
            <path
              d="M10,90 A90,90 0 1,1 190,90"
              stroke="rgba(0, 0, 0, 0.1)"
              strokeWidth="10"
              fill="none"
            />
            {/* Progress arc with animation */}
            <path
              d="M10,90 A90,90 0 1,1 190,90"
              stroke="green"
              strokeWidth="10"
              fill="none"
              strokeDasharray="360"
              strokeDashoffset={360 - (score / 720) * 360} // Adjusts the stroke based on score
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 2s ease-in-out' }} // Smooth animation
            />
          </svg>

          {/* Center Score */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-purple-700">{score}</span>
          </div>
        </div>
        {/* <span className="text-lg font-bold text-green-600">Good</span> */}
      </div>
    </div>
  );
};

export default CreditTracker;
