import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import ContactUs from "./Components/ContactUs";
import CocoPeatSection from "./Components/CocoPeatSection";
import CocoPeatSuppliers from "./Components/CocoPeatSuppliers";
import Resources from "./Components/Resources";
import CocoPeatBenefits from "./Components/CocoPeatBenefits";
import ScrollToTop from "./Components/ScrollToTop";
import Product from "./Components/Product";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="pt-16 pb-16">
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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
