import React from "react";
import InfoCards from "./infopage";
import BetterInEverySense from "./BetterInEverySense";
// import AnimatedSVG from "./productssection";
import VideoGallery from "./videos";
import Footer from "./footer";
import Reviews from "./reviews";
import Widget from "./wedget";
import CreditTracker from "./creditTracker";
import FullStackWebDev from "./faq";
const HeroSection = () => {
  return (
    <>
    <div className="bg-green-800 text-white h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex items-center">
        {/* Left side text content */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-6xl font-bold">
            <span className="block">Mann hai</span>
            <span className="block text-green-400">toh money hai</span>
          </h1>
          <p className="text-lg text-gray-200">
            We help you take control of your finances with our full-suite of personalized financial products.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
            Download app
          </button>
        </div>

        {/* Right side image */}
        <div className="w-1/2">
          <img
            src="https://moneyview.in/images/home-page-header-banner-desktop.webp"
            alt="Person pointing"
            className="w-full h-auto object-cover"
          />
        </div>
      </div> 
   
    </div>
    <InfoCards/> 
    <BetterInEverySense/>
    {/* <AnimatedSVG/> */}
    <CreditTracker/>
    <Reviews/>
    <Widget/>
   
    <VideoGallery/> 
    <FullStackWebDev/>
    <Footer/>
    </>
  );
  
};

export default HeroSection;
