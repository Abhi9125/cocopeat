// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
// import HeroSection from "./Components/HeroSection";
// import About from "./Components/About";
// import Products from "./Components/Products";
// import Footer from "./Components/Footer";
// import ProductPage from "./Components/ProductPage";

// import ContactUs from "./Components/ContactUs";

// import CocoPeatSection from "./Components/CocoPeatSection";
// import CocoPeatSuppliers from "./Components/CocoPeatSuppliers";
// import Resources from "./Components/Resources";

// function App() {
//   return (
//     <Router>
//       <Header />
//       {/* <Breadcrumb /> */}
//       <div className="pt-16 pb-16">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <CocoPeatSection />
//                 <CocoPeatSuppliers />
//               </>
//             }
//           />
//           <Route path="/about-us" element={<About />} />
//           <Route path="/products/:productId" element={<ProductPage />} />
//           {/* <Route path="/cocopeat/:productId" element={<ProductPage />} /> */}
//           <Route path="/products" element={<Products />} />
//           <Route path="/resources" element={<Resources />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
import ContactUs from "./Components/ContactUs";
import CocoPeatSection from "./Components/CocoPeatSection";
import CocoPeatSuppliers from "./Components/CocoPeatSuppliers";
import Resources from "./Components/Resources";
import ProductDetails from "./Components/ProductDetails";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Router>
      <Header setSelectedCategory={setSelectedCategory} />
      <div className="pt-16 pb-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CocoPeatSection />
                <CocoPeatSuppliers />
              </>
            }
          />
          <Route path="/about-us" element={<About />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route
            path="/products"
            element={
              <Products
                selectedCategory={selectedCategory} // Pass selectedCategory
              />
            }
          />
          <Route
            path="/product-details"
            element={<ProductDetails category={selectedCategory} />}
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
