import React from "react";

const BetterInEverySense = () => {
  return (
    <div className="bg-white  p-8">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-6">
        We're better in every sense!
      </h2>

      {/* Feature Boxes */}
      <div className="flex justify-center space-x-6 mb-8">
        <div className="border-2 border-gray-200 rounded-lg p-6 w-1/4 text-center">
          <img
            src="https://moneyview.in/images/ic-trust-factors-fully-personalised-v2.svg"
            alt="Fully personalized"
            className="mx-auto mb-3"
          />
          <p className="font-semibold">Fully personalized</p>
          <p className="text-sm text-gray-500">products for your needs</p>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-6 w-1/4 text-center">
          <img
            src="https://moneyview.in/images/ic-trust-factors-zero-paperwork-v2.svg"
            alt="Zero paperwork"
            className="mx-auto mb-3"
          />
          <p className="font-semibold">Zero paperwork</p>
          <p className="text-sm text-gray-500">makes it easy & faster</p>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-6 w-1/4 text-center">
          <img
            src="https://moneyview.in/images/ic-trust-factors-transparent-v2.svg"
            alt="Transparent"
            className="mx-auto mb-3"
          />
          <p className="font-semibold">100% transparent</p>
          <p className="text-sm text-gray-500">100% peace of mind</p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-purple-100  h-[500px] ml-4 rounded-lg py-6 flex justify-around items-center">
      
         <div className="text-center"> 
            <div className="flex">
          <img
            src="https://moneyview.in/images/ic-trustFactor-users.svg"
            alt="Star Icon"
            className="mx-auto mb-2"
          /> 
          <div> 
            <h2 className="text-3xl font-bold">Join</h2>
          <p className="text-6xl font-bold text-purple-700">4.8</p>
          <p className="text-lg text-gray-600">Rated on Play Store</p>
          </div>
          </div>
        </div>

        <div className="text-center"> 
            <div className="flex">
          <img
            src="https://moneyview.in/images/ic-trustFactor-rating.svg"
            alt="Star Icon"
            className="mx-auto mb-2"
          /> 
          <div> 
            <h2 className="text-3xl font-bold">Join</h2>
          <p className="text-6xl font-bold text-purple-700">4.8</p>
          <p className="text-lg text-gray-600">Rated on Play Store</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetterInEverySense;
