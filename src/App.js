// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
// import HeroSection from "./Components/HeroSection";
// import About from "./Components/About";
// import Products from "./Components/Products";
// // import Footer from "./Components/Footer";
// import ProductPage from "./Components/Coconut"; // Individual product page component
// // import Contact from "./Components/Contact"; // Contact page component

// function App() {
//   return (
//     <Router>
//       <Header />
//       {/* Main Content Area */}
//       <div className="pt-16 pb-16">
//         {" "}
//         {/* Adjust padding to fit fixed header/footer */}
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <About />
//                 <Products />
//               </>
//             }
//           />
//           <Route path="/products/:productName" element={<ProductPage />} />{" "}
//           {/* Dynamic route for each product */}
//           {/* <Route path="/contact" element={<Contact />} /> Contact page route */}
//         </Routes>
//       </div>
//       {/* <Footer /> */}
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
import Cocopeat from "./Components/Cocopeat";
import ContactUs from "./Components/ContactUs";
import Breadcrumb from "./Components/Breadcrumb";
import InteractiveProductCategories from "./Components/InteractiveProductCategories";
import BenefitsSection from "./Components/BenefitsSection";
import HowItWorks from "./Components/HowItWorks";
import FeaturedProducts from "./Components/FeaturedProducts";
import EnvironmentalImpact from "./Components/EnvironmentalImpact";

function App() {
  return (
    <Router>
      <Header />
      {/* <Breadcrumb /> */}
      <div className="pt-16 pb-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <InteractiveProductCategories />
                <BenefitsSection />
                <HowItWorks />
                <FeaturedProducts />
                <EnvironmentalImpact />
                {/* <Cocopeat />
                <Products /> */}
              </>
            }
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
