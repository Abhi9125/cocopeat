// import React from "react";

// const Header = () => {
//   return (
//     <header className="bg-[#2F5233] text-white p-4">
//       <nav className="flex justify-between items-center container mx-auto">
//         <h1 className="text-2xl font-bold">Cocopeat</h1>
//         <div className="space-x-6">
//           <a href="#about" className="hover:text-[#A8BDA1]">
//             About
//           </a>
//           <a href="#products" className="hover:text-[#A8BDA1]">
//             Products
//           </a>
//           <a href="#contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-[#2F5233] text-white p-4 fixed top-0 w-full z-10">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Cocopeat
        </Link>
        <div className="space-x-6 relative">
          <a href="#about" className="hover:text-[#A8BDA1]">
            About
          </a>

          <div
            className="inline-block relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <a href="#products" className="hover:text-[#A8BDA1]">
              Products
            </a>

            {showDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
                <ul>
                  <li>
                    <Link
                      to="/products/tender-coconut"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Tender Coconut
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coconut"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coconut
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/dry-coconut"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Dry Coconut
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/desiccated-coconut"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Desiccated Coconut
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coconut-oil"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coconut Oil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coconut-husk-chips"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coconut Husk Chips
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coir-fiber"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coir Fiber
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/curled-coir"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Curled Coir
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coir-yarn"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coir Yarn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coir-mats"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coir Mats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coir-peat"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coir Peat
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coir-peat-grow-bag"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coir Peat Grow Bag
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coir-garden-articles"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coir Garden Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/coir-geo-textiles"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Coir Geo Textiles
                    </Link>
                  </li>
                  {/* Add more product links as needed */}
                </ul>
              </div>
            )}
          </div>

          <a href="#contact" className="hover:text-[#A8BDA1]">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
