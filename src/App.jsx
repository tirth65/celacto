// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import Home from "./pages/Home.jsx";
// import AboutPage from "./pages/AboutPage.jsx";
// import GlobalDistributionPage from './pages/GlobalDistributionPage'; // or wherever you saved it
// import WarehousingPage from "./pages/WarehousingPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-slate-50 text-slate-900">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services/global-distribution" element={<GlobalDistributionPage />} />
//             <Route path="/services/warehousing" element={<WarehousingPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GlobalDistributionPage from './pages/GlobalDistributionPage';
import WarehousingPage from "./pages/WarehousingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";


// -----------------------------
// Scroll to Top on Route Change
// -----------------------------
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If NO hash (#section), scroll to top
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};


// -----------------------------
// Main App Component
// -----------------------------
const App = () => {
  return (
    <BrowserRouter>
      {/* call scroll-to-top handler */}
      <ScrollToTop />

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/global-distribution" element={<GlobalDistributionPage />} />
            <Route path="/services/warehousing" element={<WarehousingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
