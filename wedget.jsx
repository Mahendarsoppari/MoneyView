import React from 'react';

const Widget = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
      <div className="flex flex-col md:flex-row justify-center  px-8 space-y-4 md:space-y-0 md:space-x-4">
        {/* Review 1 */}
        <div className="bg-white py-30 w-[800px]  border-2 border-gray-300 p-12 rounded-lg shadow-md transition-transform duration-300 ">
          <div className="flex items-center space-x-4">
            <img className="w-12 h-12 rounded-full" src="https://moneyview.in/images/ShantanuGupta.webp" alt="Shantanu Gupta" />
            <div>
              <h3 className="text-lg font-semibold">Shantanu Gupta</h3>
              <p className="text-sm text-gray-500">Feb 26, 2023</p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex space-x-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
              <span className="text-yellow-500">⭐</span>
            </div>
            <p className="mt-2 text-gray-700">Thank you so much for the service! Your app claim fast loan approval. Got the amount in minutes.</p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-white py-30 w-[800px] border-2 border-gray-300 py-30 p-12 rounded-lg shadow-md transition-transform duration-300">
  <div className="flex items-center space-x-4">
    <img className="w-12 h-12 rounded-full" src="https://moneyview.in/images/VikramSher.webp" alt="Vikram Sher" />
    <div>
      <h3 className="text-lg font-semibold">Vikram Sher</h3>
      <p className="text-sm text-gray-500">Feb 26, 2023</p>
    </div>
  </div>
  <div className="mt-4"> {/* Increased margin-top for better spacing */}
    <div className="flex space-x-1 mb-2"> {/* Added margin-bottom for star rating */}
      <span className="text-yellow-500">⭐</span>
      <span className="text-yellow-500">⭐</span>
      <span className="text-yellow-500">⭐</span>
      <span className="text-yellow-500">⭐</span>
      <span className="text-gray-300">⭐</span>
    </div>
    <p className="text-gray-700">{/* Remove 'mt-2' for consistent spacing */}
      Had a great experience regarding credit. They just provide you instant credit in times of need. Thanks a lot 😊 for helping me.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Widget;
