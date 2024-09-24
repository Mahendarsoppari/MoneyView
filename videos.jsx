import React from 'react';

const VideoGallery = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-20 text-gray-600 text-5xl font-extrabold  mb-6"s>Mann hai toh money hai</h2>
      {/* <h2 className="text-20  text-5xl font-mono font-bold mb-6">Watch our latest campaign here #MannHaiTohMoneyHai</h2> */}
      <div className="flex  justify-center space-x-6">
        <div className="relative overflow-hidden   transition-transform duration-300 transform hover:scale-125">
          <iframe
            className="w-[700px] h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/FoHv80kXAaQ"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-125">
          <iframe
            className="w-[700px] h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/QJyFipzd0ak"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
