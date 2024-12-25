import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../Images/Web_Images/logo-png.png";

const Header = ({ setSelectedCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate("/product-details");
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center h-28 md:h-24">
          <img
            src={logo}
            alt="Poyscoco Logo"
            className="h-full max-w-full object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[#2F5233]">
          <Link to="/" className="hover:text-[#1E3B2B] transition duration-200">
            Home
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <span className="cursor-pointer hover:text-[#1E3B2B] transition duration-200">
              Products
            </span>
            <AnimatePresence>
              {isDropdownVisible && (
                <motion.div
                  className="absolute right-[-20rem] top-full mt-4 bg-[#2F5233] text-white rounded-lg shadow-lg p-4 w-[80vw] max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-6 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {productCategories.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-bold text-lg mb-2">
                        {category.name}
                      </h4>
                      <ul className="space-y-1">
                        {category.subcategories.map((sub, idx) => (
                          <li
                            key={idx}
                            onClick={() => handleCategoryClick(sub)}
                            className="hover:text-[#A8BDA1] cursor-pointer"
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
            className="hover:text-[#1E3B2B] transition duration-200"
          >
            Resources
          </Link>
          <Link
            to="/about-us"
            className="hover:text-[#1E3B2B] transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-[#2F5233] text-white rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-2xl text-[#2F5233]"
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
            className="md:hidden bg-[#2F5233] text-white p-6 fixed top-0 left-0 w-full h-screen overflow-auto z-50"
          >
            <ul className="space-y-4 text-lg">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <span
                  onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                  className="cursor-pointer block"
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
                              className="hover:text-[#A8BDA1] cursor-pointer"
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
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
