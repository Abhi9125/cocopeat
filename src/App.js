// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
// import HeroSection from "./Components/HeroSection";
// import About from "./Components/About";
// import Footer from "./Components/Footer";
// import ProductDetails from "./Components/ProductDetails";
// import ContactUs from "./Components/ContactUs";
// import CocoPeatSection from "./Components/CocoPeatSection";
// import CocoPeatSuppliers from "./Components/CocoPeatSuppliers";
// import Resources from "./Components/Resources";
// import CocoPeatBenefits from "./Components/CocoPeatBenefits";
// import ScrollToTop from "./Components/ScrollToTop";
// import Product from "./Components/Product";

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Header />
//       <div className="pt-16 pb-16">
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <CocoPeatSection />
//                 <CocoPeatSuppliers />
//                 <CocoPeatBenefits />
//               </>
//             }
//           />

//           {/* Static Routes */}
//           <Route path="/about-us" element={<About />} />
//           <Route path="/product" element={<Product />} />
//           <Route
//             path="/product-details/:category"
//             element={<ProductDetails />}
//           />
//           <Route path="/resources" element={<Resources />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet"; // Global Helmet for default metadata
import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Lazy load components for performance optimization
const HeroSection = lazy(() => import("./Components/HeroSection"));
const About = lazy(() => import("./Components/About"));
const Product = lazy(() => import("./Components/Product"));
const ProductDetails = lazy(() => import("./Components/ProductDetails"));
const Resources = lazy(() => import("./Components/Resources"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const CocoPeatSection = lazy(() => import("./Components/CocoPeatSection"));
const CocoPeatSuppliers = lazy(() => import("./Components/CocoPeatSuppliers"));
const CocoPeatBenefits = lazy(() => import("./Components/CocoPeatBenefits"));

function App() {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Global metadata with Helmet */}
      <Helmet>
        <title>Poyscoco - Sustainable Growing Solutions</title>
        <meta
          name="description"
          content="Explore eco-friendly solutions for sustainable agriculture and horticulture with Poyscoco's premium coco peat products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <meta
          property="og:title"
          content="Poyscoco - Sustainable Growing Solutions"
        />
        <meta
          property="og:description"
          content="Discover high-quality coco peat and coconut-based products for sustainable farming."
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-16 pb-16">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <CocoPeatSection />
                  <CocoPeatSuppliers />
                  <CocoPeatBenefits />
                </>
              }
            />

            {/* Static Routes */}
            <Route path="/about-us" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route
              path="/product-details/:category"
              element={<ProductDetails />}
            />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Fallback Route */}
            <Route
              path="*"
              element={
                <div className="text-center py-20">
                  <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                  <p className="text-lg mt-4">
                    Oops! The page you're looking for doesn't exist.
                  </p>
                  <a
                    href="/"
                    className="mt-6 inline-block px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
                  >
                    Go Back to Home
                  </a>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
