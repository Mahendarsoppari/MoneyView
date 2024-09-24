// import React from "react";
// import Navbar from "./components/Navbar/navbar";
// import HeroSection from "./components/Herosection/heropage";
// import Credit from "./components/Credits/credit";
// function App() {
//   return (
//     <>
//     <div>
//       <Navbar />
//       <HeroSection />
//       <Credit />
//     </div>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// // import { useSelector } from 'react-redux';
// // import Navbar from "./components/Navbar/navbar";
// import HeroSection from "./components/Herosection/heropage";
// import Credit from "./components/Credits/credit";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar/navbar";
// function App() {
//   return (
//     <>
//       <div>
//         <BrowserRouter>
//           <Routes>
//             <Navbar />
//             <Route path="/" element={<Navbar />} />
//             <Route path="/hero" element={<HeroSection />} />
//             <Route path="/credit" element={<Credit />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import CreditScoreLogin from "./components/Credits/creditstorelogin";
import HeroSection from "./components/Herosection/heropage";
import CreditScorePage from "./components/Credits/creditcardspage";
import Credit from "./components/Credits/credit";
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed on all pages */}
      <Routes>
        <Route path="/hero" element={<HeroSection />} />{" "}
        <Route path="/credit" element={<CreditScoreLogin />} />{" "}
        <Route path="/creditscore" element={<Credit/>} />{" "}
        {/* <Route path="/credit" element={<CreditScorePage/>} />{" "} */}
        
        {/* Add the route for HeroSection */}
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
