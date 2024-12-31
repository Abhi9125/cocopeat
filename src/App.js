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

// import React, { useState } from "react";
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
// import ProductDetails from "./Components/ProductDetails";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("");

//   return (
//     <Router>
//       <Header setSelectedCategory={setSelectedCategory} />
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
//           <Route
//             path="/products"
//             element={
//               <Products
//                 selectedCategory={selectedCategory} // Pass selectedCategory
//               />
//             }
//           />
//           <Route
//             path="/product-details"
//             element={<ProductDetails category={selectedCategory} />}
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
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
// import HeroSection from "./Components/HeroSection";
// import About from "./Components/About";
// // import Products from "./Components/Products";
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
//   const [selectedCategory, setSelectedCategory] = useState("");

//   return (
//     <Router>
//       <ScrollToTop />
//       <Header setSelectedCategory={setSelectedCategory} />
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
//           {/* <Route path="/" element={<Products />} /> */}
//           {/* <Route path="/products/:productId" element={<ProductPage />} /> */}
//           {/* <Route
//             path="/products"
//             element={
//               <Products
//                 selectedCategory={selectedCategory} // Pass selectedCategory
//               />
//             }
//           /> */}
//           <Route
//             path="/product-details"
//             element={<ProductDetails category={selectedCategory} />}
//           />
//           <Route
//             path="/product-details/:category"
//             element={<ProductDetails />}
//           />

//           <Route path="/resources" element={<Resources />} />
//           <Route path="/contact" element={<ContactUs />} />

//           <Route
//             path="/product"
//             element={<Product setSelectedCategory={setSelectedCategory} />}
//           />

//           {/* Dynamic Product Details Page */}
//           {/* <Route path="/products/:productId" element={<ProductDetails />} /> */}
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

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
