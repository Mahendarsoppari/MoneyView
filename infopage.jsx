import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const InfoCards = () => {
  return (
    <div className="flex space-x-4 p-4 px-20">

      <div className="bg-white h-[400px]  w-[700px] border-2 border-gray-300 dark:bg-card rounded-lg shadow-md  mx-auto"> 
    <div className="flex justify-between">
        <h2 className="text-5xl p-3 font-bold text-zinc-800 font-mono dark:text-zinc-200">Personal<br/> Loan</h2>
        <img src="https://moneyview.in/images/plProductCardRsIcon.webp" alt="Personal Loan Icon" className="w-24 h-24"/>
    </div>

    <p className="text-2xl p-3 text-zinc-600 dark:text-zinc-400">
        Get up to <br/> <span className="font-semibold ">₹10L</span> in 10 mins
    </p> 

    <div className='bg-green-300 h-[180px] bg-opacity-20 w-full rounded-b-lg'> {/* Use w-full for responsiveness */}
        <ul className="mt-4 space-y-2"> 
            <div className='flex items-center p-5'>
                <img src='https://moneyview.in/images/ic-productSection-pl-prop1.svg' className="w-6 h-6 mr-2" alt="Zero paperwork"/>
                <li className="text-zinc-500 dark:text-zinc-300">Zero paperwork</li>
            </div>
            <div className='flex items-center pl-5'>
                <img src='https://moneyview.in/images/ic-productSection-pl-prop2.svg' className="w-6 h-6 mr-2" alt="Affordable EMIs"/>
                <li className="text-zinc-500 dark:text-zinc-300">Affordable EMIs</li>
            </div>
        </ul>
    </div>
     </div>


      {/* Credit Tracker Card */}
      <div className="bg-white h-[400px]  bg-opacity-20 w-[700px] border-2 border-gray-300 dark:bg-card rounded-lg shadow-md  mx-auto"> 
    <div className="flex justify-between">
        <h2 className="text-5xl p-3 font-bold text-zinc-800 font-mono dark:text-zinc-200">Credit<br/> Tracker</h2>
        <img src="https://moneyview.in/images/CT_ProductIconDesktop.webp" alt="Personal Loan Icon" className="w-24 h-24"/>
    </div>

    <p className="text-2xl p-3 text-zinc-600 dark:text-zinc-400">
        Get up to <br/> <span className="font-semibold ">₹10L</span> in 10 mins
    </p> 

    <div className='bg-orange-300 h-[180px] bg-opacity-20 w-full rounded-b-lg'> {/* Use w-full for responsiveness */}
        <ul className="mt-4 space-y-2"> 
            <div className='flex items-center p-5'>
                <img src='https://moneyview.in/images/ic-productSection-pl-prop1.svg' className="w-6 h-6 mr-2" alt="Zero paperwork"/>
                <li className="text-zinc-500 dark:text-zinc-300">Zero paperwork</li>
            </div>
            <div className='flex items-center pl-5'>
                <img src='https://moneyview.in/images/ic-productSection-pl-prop2.svg' className="w-6 h-6 mr-2" alt="Affordable EMIs"/>
                <li className="text-zinc-500 dark:text-zinc-300">Affordable EMIs</li>
            </div>
        </ul>
    </div>
     </div>
    </div>
  );
};

export default InfoCards;
