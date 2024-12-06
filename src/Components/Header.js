import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setSelectedCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const navigate = useNavigate();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Show dropdown on hover with a slight delay
  const showDropdown = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsDropdownVisible(true);
  };

  // Hide dropdown with a delay to allow interaction
  const hideDropdown = () => {
    const timeout = setTimeout(() => setIsDropdownVisible(false), 200);
    setDropdownTimeout(timeout);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate("/product-details"); // Navigate to the product details page
    setIsDropdownVisible(false); // Hide the dropdown
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 shadow-md transition-transform duration-300 ${
        isScrolled ? "bg-[#FFFFFF]" : "bg-white"
      }`}
    >
      {/* Logo Section */}
      <div
        className={`container mx-auto flex items-center justify-center py-4 transition-all duration-300 ${
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
        }`}
      >
        <Link to="/" className="text-3xl font-bold font-serif text-[#2F5233]">
          POYS COCO EXPORTS
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto relative">
        <nav className="flex justify-center space-x-8 font-sans text-[#2F5233] text-lg py-2">
          <Link
            to="/"
            className="hover:text-[#1E3B2B] hover:underline transition duration-200"
          >
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <span className="hover:text-[#1E3B2B] hover:underline transition duration-200 cursor-pointer">
              Products
            </span>
            {isDropdownVisible && (
              <div
                className="absolute left-0 top-full mt-2 bg-[#2F5233] text-white rounded-lg shadow-lg p-4 w-[60vw] max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-4 z-50"
                onMouseEnter={showDropdown} // Prevent hiding when interacting with dropdown
                onMouseLeave={hideDropdown} // Allow hiding when leaving the dropdown
              >
                <div>
                  <h4 className="font-bold text-lg mb-2">Coco Peat</h4>
                  <ul className="space-y-1 text-sm">
                    <li
                      onClick={() => handleCategoryClick("Coco Peat")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Coco Peat
                    </li>
                    <li
                      onClick={() => handleCategoryClick("Compressed Blocks")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Compressed Blocks
                    </li>
                    <li
                      onClick={() => handleCategoryClick("Grow Bag")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Grow Bag
                    </li>
                    <li
                      onClick={() => handleCategoryClick("Easy Grow Bags")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Easy Grow Bags
                    </li>
                    <li
                      onClick={() => handleCategoryClick("Bags")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Bags
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Coconut Fiber</h4>
                  <ul className="space-y-1 text-sm">
                    <li
                      onClick={() => handleCategoryClick("Coir Fiber")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Coir Fiber
                    </li>
                    <li
                      onClick={() => handleCategoryClick("Coir Yarn")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Coir Yarn
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Coconut</h4>
                  <ul className="space-y-1 text-sm">
                    <li
                      onClick={() => handleCategoryClick("Tender Coconut")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Tender Coconut
                    </li>
                    <li
                      onClick={() => handleCategoryClick("Coconut")}
                      className="hover:text-[#A8BDA1] transition duration-200 cursor-pointer"
                    >
                      Coconut
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/resources"
            className="hover:text-[#1E3B2B] hover:underline transition duration-200"
          >
            Resources
          </Link>
          <Link
            to="/about-us"
            className="hover:text-[#1E3B2B] hover:underline transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#1E3B2B] hover:underline transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
      <hr className="border-t border-[#A8BDA1]" />
    </header>
  );
};

export default Header;
