import React from 'react'
import CreditScoreLogin from './creditstorelogin';
import CreditScorePage from './creditcardspage';
import Footer from '../Herosection/footer';
import FullStackWebDev from '../Herosection/faq';

function Credit() {
    return (
        <div>
          <CreditScoreLogin/>
          <CreditScorePage/> 
          <FullStackWebDev/>
          <Footer/>
        </div>
    )
}

export default Credit;
