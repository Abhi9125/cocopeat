// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../Images/Web_Images/logo-png.png";

// const Header = ({ setSelectedCategory }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // Handle scroll behavior
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // const handleCategoryClick = (category) => {
//   //   setSelectedCategory(category);
//   //   navigate("/product-details");
//   //   setIsDropdownVisible(false);
//   //   setIsMobileMenuOpen(false);
//   // };
//   const handleCategoryClick = (category) => {
//     navigate(`/product-details/${category}`);
//     setIsDropdownVisible(false);
//     setIsMobileMenuOpen(false);
//   };

//   const productCategories = [
//     {
//       name: "Coco Peat",
//       subcategories: [
//         "Compressed Blocks",
//         "Grow Bag",
//         "Easy Grow Bags",
//         "Bags",
//       ],
//     },
//     { name: "Coconut Fiber", subcategories: ["Coir Fiber", "Coir Yarn"] },
//     { name: "Coconut Products", subcategories: ["Tender Coconut", "Coconut"] },
//   ];

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow-md" : "bg-white"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo */}
//         <Link to="/" className="flex items-center justify-center h-28 md:h-24">
//           <img
//             src={logo}
//             alt="Poyscoco Logo"
//             className="h-full max-w-full object-contain"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8 text-[#2F5233]">
//           <Link to="/" className="hover:text-[#1E3B2B] transition duration-200">
//             Home
//           </Link>

//           {/* Products Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsDropdownVisible(true)}
//             onMouseLeave={() => setIsDropdownVisible(false)}
//           >
//             <span className="cursor-pointer hover:text-[#1E3B2B] transition duration-200">
//               Products
//             </span>
//             <AnimatePresence>
//               {isDropdownVisible && (
//                 <motion.div
//                   className="absolute right-[-20rem] top-full mt-4 bg-[#2F5233] text-white rounded-lg shadow-lg p-4 w-[80vw] max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-6 z-50"
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {productCategories.map((category, index) => (
//                     <div key={index}>
//                       <h4 className="font-bold text-lg mb-2">
//                         {category.name}
//                       </h4>
//                       <ul className="space-y-1">
//                         {category.subcategories.map((sub, idx) => (
//                           <li
//                             key={idx}
//                             onClick={() => handleCategoryClick(sub)}
//                             className="hover:text-[#A8BDA1] cursor-pointer"
//                           >
//                             {sub}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <Link
//             to="/resources"
//             className="hover:text-[#1E3B2B] transition duration-200"
//           >
//             Resources
//           </Link>
//           <Link
//             to="/about-us"
//             className="hover:text-[#1E3B2B] transition duration-200"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="px-4 py-2 bg-[#2F5233] text-white rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//           >
//             Get in Touch
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//             className="text-2xl text-[#2F5233]"
//           >
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-[#2F5233] text-white p-6 fixed top-0 left-0 w-full h-screen overflow-auto z-50"
//           >
//             <ul className="space-y-4 text-lg">
//               <li>
//                 <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <span
//                   onClick={() => setIsDropdownVisible(!isDropdownVisible)}
//                   className="cursor-pointer block"
//                 >
//                   Products
//                 </span>
//                 {isDropdownVisible && (
//                   <ul className="ml-4 mt-2 space-y-2">
//                     {productCategories.map((category, index) => (
//                       <li key={index} className="font-semibold">
//                         {category.name}
//                         <ul className="ml-4 mt-1 space-y-1 text-sm">
//                           {category.subcategories.map((sub, idx) => (
//                             <li
//                               key={idx}
//                               onClick={() => handleCategoryClick(sub)}
//                               className="hover:text-[#A8BDA1] cursor-pointer"
//                             >
//                               {sub}
//                             </li>
//                           ))}
//                         </ul>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//               <li>
//                 <Link
//                   to="/resources"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   Resources
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Helmet } from "react-helmet";
// import logo from "../Images/Web_Images/logo-png.png";

// const Header = ({ setSelectedCategory }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // Handle scroll behavior
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleCategoryClick = (category) => {
//     navigate(`/product-details/${category}`);
//     setIsDropdownVisible(false);
//     setIsMobileMenuOpen(false);
//   };

//   const productCategories = [
//     {
//       name: "Coco Peat",
//       subcategories: [
//         "Compressed Blocks",
//         "Grow Bag",
//         "Easy Grow Bags",
//         "Bags",
//       ],
//     },
//     { name: "Coconut Fiber", subcategories: ["Coir Fiber", "Coir Yarn"] },
//     { name: "Coconut Products", subcategories: ["Tender Coconut", "Coconut"] },
//   ];

//   return (
//     <>
//       {/* Helmet for Dynamic Title and Meta */}
//       <Helmet>
//         <title>Poyscoco - Sustainable Coco Peat and Coconut Products</title>
//         <meta
//           name="description"
//           content="Explore Poyscoco's premium Coco Peat, Coconut Fiber, and other sustainable products for horticulture, floriculture, and agriculture."
//         />
//       </Helmet>

//       <header
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white shadow-md" : "bg-white"
//         }`}
//         role="banner"
//       >
//         <div className="container mx-auto flex items-center justify-between py-4 px-6">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="flex items-center justify-center h-28 md:h-24"
//             aria-label="Poyscoco Home"
//           >
//             <img
//               src={logo}
//               alt="Poyscoco Logo"
//               className="h-full max-w-full object-contain"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav
//             className="hidden md:flex items-center space-x-8 text-[#2F5233]"
//             role="navigation"
//             aria-label="Main Navigation"
//           >
//             <Link
//               to="/"
//               className="hover:text-[#1E3B2B] text-lg  transition duration-200"
//               aria-label="Home"
//             >
//               Home
//             </Link>

//             {/* Products Dropdown */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setIsDropdownVisible(true)}
//               onMouseLeave={() => setIsDropdownVisible(false)}
//             >
//               <span
//                 className="cursor-pointer hover:text-[#1E3B2B] text-lg transition duration-200"
//                 role="button"
//                 aria-haspopup="true"
//                 aria-expanded={isDropdownVisible}
//               >
//                 Products
//               </span>
//               <AnimatePresence>
//                 {isDropdownVisible && (
//                   <motion.div
//                     className="absolute right-[-20rem] top-full mt-4 bg-[#2F5233] text-white rounded-lg shadow-lg p-4 w-[80vw] max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-6 z-50"
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {productCategories.map((category, index) => (
//                       <div key={index}>
//                         <h4 className="font-bold text-lg mb-2">
//                           {category.name}
//                         </h4>
//                         <ul className="space-y-1">
//                           {category.subcategories.map((sub, idx) => (
//                             <li
//                               key={idx}
//                               onClick={() => handleCategoryClick(sub)}
//                               className="hover:text-[#A8BDA1] cursor-pointer"
//                               role="menuitem"
//                             >
//                               {sub}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link
//               to="/resources"
//               className="hover:text-[#1E3B2B] text-lg transition duration-200"
//               aria-label="Resources"
//             >
//               Resources
//             </Link>
//             <Link
//               to="/about-us"
//               className="hover:text-[#1E3B2B] text-lg transition duration-200"
//               aria-label="About Us"
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               className="px-4 py-2 bg-[#2F5233] text-lg text-white rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//               aria-label="Contact Us"
//             >
//               Get in Touch
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen((prev) => !prev)}
//               className="text-2xl text-[#2F5233]"
//               aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
//             >
//               {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden bg-[#2F5233] text-white p-6 fixed top-0 left-0 w-full h-screen overflow-auto z-50"
//               role="menu"
//             >
//               <ul className="space-y-4 text-lg">
//                 <li>
//                   <Link
//                     to="/"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     role="menuitem"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <span
//                     onClick={() => setIsDropdownVisible(!isDropdownVisible)}
//                     className="cursor-pointer block"
//                     role="button"
//                     aria-haspopup="true"
//                     aria-expanded={isDropdownVisible}
//                   >
//                     Products
//                   </span>
//                   {isDropdownVisible && (
//                     <ul className="ml-4 mt-2 space-y-2">
//                       {productCategories.map((category, index) => (
//                         <li key={index} className="font-semibold">
//                           {category.name}
//                           <ul className="ml-4 mt-1 space-y-1 text-sm">
//                             {category.subcategories.map((sub, idx) => (
//                               <li
//                                 key={idx}
//                                 onClick={() => handleCategoryClick(sub)}
//                                 className="hover:text-[#A8BDA1] cursor-pointer"
//                                 role="menuitem"
//                               >
//                                 {sub}
//                               </li>
//                             ))}
//                           </ul>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//                 <li>
//                   <Link
//                     to="/resources"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     role="menuitem"
//                   >
//                     Resources
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/about-us"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     role="menuitem"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     role="menuitem"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Helmet } from "react-helmet";
import logo from "../Images/Web_Images/logo-png.png";

const Header = ({ setSelectedCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/product-details/${category}`);
    setIsDropdownVisible(false);
    setIsMobileMenuOpen(false);
  };

  const productCategories = [
    {
      name: "Coco Peat",
      subcategories: [
        "Compressed Blocks",
        "Grow Bag",
        "Easy Grow Bags",
        "Bags",
      ],
    },
    { name: "Coconut Fiber", subcategories: ["Coir Fiber", "Coir Yarn"] },
    { name: "Coconut Products", subcategories: ["Tender Coconut", "Coconut"] },
  ];

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Poyscoco - Sustainable Coco Peat and Coconut Products</title>
        <meta
          name="description"
          content="Explore Poyscoco's premium Coco Peat, Coconut Fiber, and other sustainable products for horticulture, floriculture, and agriculture."
        />
      </Helmet>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
        role="banner"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center h-20 md:h-24"
            aria-label="Poyscoco Home"
          >
            <img
              src={logo}
              alt="Poyscoco Logo"
              className="h-full max-w-full object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8 text-green-800 font-sans text-lg"
            role="navigation"
            aria-label="Main Navigation"
          >
            <Link
              to="/"
              className="hover:text-green-900 transition duration-200"
              aria-label="Home"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <span
                className="cursor-pointer hover:text-green-900 transition duration-200"
                role="button"
                aria-haspopup="true"
                aria-expanded={isDropdownVisible}
              >
                Products
              </span>
              <AnimatePresence>
                {isDropdownVisible && (
                  <motion.div
                    className="absolute right-[-20rem] top-full mt-4 bg-green-800 text-white rounded-lg shadow-lg p-4 w-[80vw] max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-6 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {productCategories.map((category, index) => (
                      <div key={index}>
                        <h4 className="font-bold text-lg mb-2 font-serif">
                          {category.name}
                        </h4>
                        <ul className="space-y-1">
                          {category.subcategories.map((sub, idx) => (
                            <li
                              key={idx}
                              onClick={() => handleCategoryClick(sub)}
                              className="hover:text-green-300 cursor-pointer"
                              role="menuitem"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/resources"
              className="hover:text-green-900 transition duration-200"
              aria-label="Resources"
            >
              Resources
            </Link>
            <Link
              to="/about-us"
              className="hover:text-green-900 transition duration-200"
              aria-label="About Us"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 transition duration-300"
              aria-label="Contact Us"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="text-2xl text-green-800"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-green-800 text-white p-6 fixed top-0 left-0 w-full h-screen overflow-auto z-50"
              role="menu"
            >
              <ul className="space-y-4 text-lg font-sans">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span
                    onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                    className="cursor-pointer block"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={isDropdownVisible}
                  >
                    Products
                  </span>
                  {isDropdownVisible && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {productCategories.map((category, index) => (
                        <li key={index} className="font-semibold">
                          {category.name}
                          <ul className="ml-4 mt-1 space-y-1 text-sm">
                            {category.subcategories.map((sub, idx) => (
                              <li
                                key={idx}
                                onClick={() => handleCategoryClick(sub)}
                                className="hover:text-green-300 cursor-pointer"
                                role="menuitem"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/resources"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    role="menuitem"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
