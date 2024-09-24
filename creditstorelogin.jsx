import React from 'react';
// import CreditScoreLogin from './creditstorelogin';
import CreditScorePage from './creditcardspage';
import Footer from '../Herosection/footer';
import FullStackWebDev from '../Herosection/faq';
const CreditScoreLogin = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-background p-4">
      {/* Left Section - Form */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-semibold  text-center mb-4 font-mono ">
          Track your <br/> <span className="text-primary">credit score</span> <br/> for <span className="text-primary">free</span>
        </h1>
          <div className='flex p-3'>
        <div className=" flex items-start mb-2">
          <img src="https://moneyview.in/images/ic-credit-score-powered-by.svg" alt="Powered by CIBIL" className="mr-2" />
          <span className="text-sm text-muted-foreground">Powered by CIBIL</span>
        </div>
        <div className=" flex pl-2 items-start mb-2">
          <img src="https://moneyview.in/images/ic-credit-score-no-spam.svg" alt="Powered by CIBIL" className="mr-2" />
          <span className="text-sm text-muted-foreground">No spam calls</span>
        </div>
        </div>

        <div className="flex items-start mb-4">
  <input 
    type="text" 
    placeholder="Enter Mobile Number" 
    className="border border-gray-300 rounded-lg p-3 w-full max-w-xs text-gray-700 focus:outline-none focus:border-[#00ccff] focus:ring-2 focus:ring-[#00ccff] transition duration-200 ease-in-out shadow-sm bg-white"
  />
</div>

        <p className="text-xs text-muted-foreground mb-4">An OTP will be sent for verification</p>

        <button className="bg-green-800 text-white font-semibold hover:bg-[#0098F1] p-3  w-full max-w-xs shadow-lg transform hover:scale-105 transition duration-300 ease-in-out mb-4">
  Get score & more
</button>

        <div className="flex justify-between w-full max-w-xs mb-4">
          <div className="flex flex-col items-center">
            <img src="https://moneyview.in/images/ctProdDetailsCalendarIcon.svg" alt="Monthly free reports" className="mb-1" />
            <span className="text-sm">Monthly free reports</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://moneyview.in/images/ctProdDetailsGrowthIcon.svg" alt="Insights for better score" className="mb-1" />
            <span className="text-sm">Insights for better score</span>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <span className="text-xs text-muted-foreground">
            By proceeding, you agree to our <a href="#" className="text-primary">Terms & Conditions</a> & <a href="#" className="text-primary">Privacy Policy</a>
          </span>
        </div>
      </div>

      {/* Right Section - Dummy Image */}
      <div className="hidden md:flex items-center justify-center w-full md:w-1/2">
        <img src="https://moneyview.in/images/CTBannerDesktop.webp" alt="Credit Tracker" className="rounded-lg " />
      </div>
     
    </div>
     <CreditScorePage/> 
     <FullStackWebDev/>
     <Footer/>
     </>
  );
};

export default CreditScoreLogin;
