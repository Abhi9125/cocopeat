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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   return (
//     <header className="bg-[#2F5233] text-white p-4 fixed top-0 w-full z-10">
//       <nav className="flex justify-between items-center container mx-auto">
//         <Link to="/" className="text-2xl font-bold">
//           POYSCOCO EXPERT
//         </Link>
//         <div className="space-x-6 relative">
//           <a href="#about" className="hover:text-[#A8BDA1]">
//             Home
//           </a>

//           <a href="#about" className="hover:text-[#A8BDA1]">
//             About us
//           </a>

//           <div
//             className="inline-block relative"
//             onMouseEnter={() => setShowDropdown(true)}
//             onMouseLeave={() => setShowDropdown(false)}
//           >
//             <a href="#products" className="hover:text-[#A8BDA1]">
//               Products
//             </a>

//             {showDropdown && (
//               <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/dry-coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Dry Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/desiccated-coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Desiccated Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-oil"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coconut Oil
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-husk-chips"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coconut Husk Chips
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-fiber"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Fiber
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/curled-coir"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Curled Coir
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-yarn"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Yarn
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-mats"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Mats
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                   {/* Add more product links as needed */}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <a href="#contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownTimeout = useRef(null);

//   const handleMouseEnter = () => {
//     // Clear any existing timeout to prevent closing the dropdown too early
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     // Set a delay to hide the dropdown when the user moves away
//     dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 200);
//   };

//   return (
//     <header className="bg-[#2F5233] text-white p-4 pr-20 fixed top-0 w-full z-10">
//       <nav className="flex justify-between items-center container mx-auto ">
//         <Link to="/" className="text-2xl font-bold">
//           POYS COCO EXPORTS
//         </Link>
//         <div className="space-x-6 relative">
//           <Link to="/" className="hover:text-[#A8BDA1]">
//             Home
//           </Link>

//           <Link to="/about-us" className="hover:text-[#A8BDA1]">
//             About us
//           </Link>

//           {/* Products Dropdown */}

//           <div
//             className="inline-block relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a href="#products" className="hover:text-[#A8BDA1]">
//               Products
//             </a>

//             {showDropdown && (
//               <div
//                 className="absolute left-0 mt-2 w-80 bg-green-400 text-black shadow-lg rounded-md"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/dry-coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Dry Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/desiccated-coconut"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Desiccated Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-oil"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coconut Oil
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-husk-chips"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coconut Husk Chips
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-fiber"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Fiber
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/curled-coir"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Curled Coir
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-yarn"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Yarn
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-mats"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Mats
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                   {/* Add more product links as needed */}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <a href="#contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownTimeout = useRef(null);

//   const handleMouseEnter = () => {
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 200);
//   };

//   return (
//     <header className="bg-[#2F5233] text-white p-4 pr-20 fixed top-0 w-full z-10">
//       <nav className="flex justify-between items-center container mx-auto">
//         <Link to="/" className="text-2xl font-bold">
//           POYS COCO EXPORTS
//         </Link>
//         <div className="space-x-6 relative">
//           <Link to="/" className="hover:text-[#A8BDA1]">
//             Home
//           </Link>

//           <Link to="/about-us" className="hover:text-[#A8BDA1]">
//             About us
//           </Link>

//           {/* Products Dropdown */}
//           <div
//             className="inline-block relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a href="#products" className="hover:text-[#A8BDA1]">
//               Products
//             </a>

//             {showDropdown && (
//               <div
//                 className="absolute left-0 mt-2 w-80 bg-[#A8BDA1] text-[#2F5233] shadow-lg rounded-md"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/dry-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Dry Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/desiccated-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Desiccated Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-oil"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut Oil
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-husk-chips"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut Husk Chips
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-fiber"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Fiber
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/curled-coir"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Curled Coir
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-yarn"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Yarn
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-mats"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Mats
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <a href="contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownTimeout = useRef(null);

//   const handleMouseEnter = () => {
//     if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 200);
//   };

//   return (
//     <header className="bg-[#2F5233] text-white p-4 pr-20 fixed top-0 w-full z-10">
//       <nav className="flex justify-between items-center container mx-auto">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold font-serif">
//           POYS COCO EXPORTS
//         </Link>

//         {/* Navigation Links */}
//         <div className="space-x-6 relative font-serif">
//           <Link to="/" className="hover:text-[#A8BDA1]">
//             Home
//           </Link>

//           <Link to="/about-us" className="hover:text-[#A8BDA1]">
//             About us
//           </Link>

//           {/* Products Dropdown */}
//           <div
//             className="inline-block relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a href="#products" className="hover:text-[#A8BDA1]">
//               Products
//             </a>

//             {showDropdown && (
//               <div
//                 className="absolute left-0 mt-2 w-80 bg-[#A8BDA1] text-[#2F5233] shadow-lg rounded-md font-sans"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/dry-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Dry Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/desiccated-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Desiccated Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-oil"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut Oil
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-husk-chips"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut Husk Chips
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-fiber"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Fiber
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/curled-coir"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Curled Coir
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-yarn"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Yarn
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-mats"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Mats
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to="/contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showProductDropdown, setShowProductDropdown] = useState(false);
//   const [showCocopeatDropdown, setShowCocopeatDropdown] = useState(false);

//   const productDropdownTimeout = useRef(null);
//   const cocopeatDropdownTimeout = useRef(null);

//   // Handlers for Products Dropdown
//   const handleProductMouseEnter = () => {
//     if (productDropdownTimeout.current)
//       clearTimeout(productDropdownTimeout.current);
//     setShowProductDropdown(true);
//   };

//   const handleProductMouseLeave = () => {
//     productDropdownTimeout.current = setTimeout(
//       () => setShowProductDropdown(false),
//       200
//     );
//   };

//   // Handlers for Cocopeat Dropdown
//   const handleCocopeatMouseEnter = () => {
//     if (cocopeatDropdownTimeout.current)
//       clearTimeout(cocopeatDropdownTimeout.current);
//     setShowCocopeatDropdown(true);
//   };

//   const handleCocopeatMouseLeave = () => {
//     cocopeatDropdownTimeout.current = setTimeout(
//       () => setShowCocopeatDropdown(false),
//       200
//     );
//   };

//   return (
//     <header className="bg-[#2F5233] text-white p-4 pr-20 fixed top-0 w-full z-10">
//       <nav className="flex justify-between items-center container mx-auto">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold font-serif">
//           POYS COCO EXPORTS
//         </Link>

//         {/* Navigation Links */}
//         <div className="space-x-6 relative font-serif">
//           <Link to="/" className="hover:text-[#A8BDA1]">
//             Home
//           </Link>
//           <Link to="/about-us" className="hover:text-[#A8BDA1]">
//             About us
//           </Link>

//           {/* Products Dropdown */}
//           <div
//             className="inline-block relative"
//             onMouseEnter={handleProductMouseEnter}
//             onMouseLeave={handleProductMouseLeave}
//           >
//             <a href="#products" className="hover:text-[#A8BDA1]">
//               Products
//             </a>
//             {showProductDropdown && (
//               <div
//                 className="absolute left-0 mt-2 w-80 bg-[#A8BDA1] text-[#2F5233] shadow-lg rounded-md font-sans"
//                 onMouseEnter={handleProductMouseEnter}
//                 onMouseLeave={handleProductMouseLeave}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-mats"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Mats
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-yarn"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Yarn
//                     </Link>
//                     <Link
//                       to="/products/curled-coir"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Curled Coir
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-fiber"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Fiber
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-husk-chips"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut Husk Chips
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coconut-oil"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut Oil
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/desiccated-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Desiccated Coconut
//                     </Link>
//                     <Link
//                       to="/products/dry-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Dry Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/Coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coconut
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>

//                   {/* Add more Product links as needed */}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Cocopeat Dropdown */}

//           <Link to="/contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showProductDropdown, setShowProductDropdown] = useState(false);
//   const productDropdownTimeout = useRef(null);

//   // Handlers for Products Dropdown
//   const handleProductMouseEnter = () => {
//     if (productDropdownTimeout.current)
//       clearTimeout(productDropdownTimeout.current);
//     setShowProductDropdown(true);
//   };

//   const handleProductMouseLeave = () => {
//     productDropdownTimeout.current = setTimeout(
//       () => setShowProductDropdown(false),
//       200
//     );
//   };

//   return (
//     <header className="bg-[#2F5233] text-white p-4 pr-20 fixed top-0 w-full z-20">
//       <nav className="flex justify-between items-center container mx-auto">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold font-serif">
//           POYS COCO EXPORTS
//         </Link>

//         {/* Navigation Links */}
//         <div className="space-x-6 relative font-serif">
//           <Link to="/" className="hover:text-[#A8BDA1]">
//             Home
//           </Link>
//           <Link to="/about-us" className="hover:text-[#A8BDA1]">
//             About us
//           </Link>

//           {/* Products Dropdown */}
//           <div
//             className="inline-block relative"
//             onMouseEnter={handleProductMouseEnter}
//             onMouseLeave={handleProductMouseLeave}
//           >
//             <a href="#products" className="hover:text-[#A8BDA1]">
//               Products
//             </a>
//             {showProductDropdown && (
//               <div
//                 className="absolute left-0 mt-2 w-80 bg-[#A8BDA1] text-[#2F5233] shadow-lg rounded-md font-sans z-30"
//                 onMouseEnter={handleProductMouseEnter}
//                 onMouseLeave={handleProductMouseLeave}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>
//                   {/* Add more Product links as needed */}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to="/contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [showProductDropdown, setShowProductDropdown] = useState(false);
//   const productDropdownTimeout = useRef(null);

//   // Handlers for Products Dropdown
//   const handleProductMouseEnter = () => {
//     if (productDropdownTimeout.current)
//       clearTimeout(productDropdownTimeout.current);
//     setShowProductDropdown(true);
//   };

//   const handleProductMouseLeave = () => {
//     productDropdownTimeout.current = setTimeout(
//       () => setShowProductDropdown(false),
//       200
//     );
//   };

//   return (
//     <header className="bg-[#2F5233] text-white fixed top-0 w-full z-20 shadow-lg">
//       <div className="container mx-auto flex flex-col items-center py-4">
//         {/* Logo */}
//         <Link to="/" className="text-3xl font-bold font-serif mb-2">
//           POYS COCO EXPORTS
//         </Link>

//         {/* Navigation Links */}
//         <nav className="flex space-x-10 mt-5 font-serif">
//           <Link to="/" className="hover:text-[#A8BDA1]">
//             Home
//           </Link>
//           <Link to="/about-us" className="hover:text-[#A8BDA1]">
//             About us
//           </Link>

//           {/* Products Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={handleProductMouseEnter}
//             onMouseLeave={handleProductMouseLeave}
//           >
//             <a href="#products" className="hover:text-[#A8BDA1]">
//               Products
//             </a>
//             {showProductDropdown && (
//               <div
//                 className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-[#A8BDA1] text-[#2F5233] shadow-lg rounded-md font-sans z-30"
//                 onMouseEnter={handleProductMouseEnter}
//                 onMouseLeave={handleProductMouseLeave}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link to="/contact" className="hover:text-[#A8BDA1]">
//             Contact
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showProductDropdown, setShowProductDropdown] = useState(false);
//   const productDropdownTimeout = useRef(null);

//   // Handlers for Products Dropdown
//   const handleProductMouseEnter = () => {
//     if (productDropdownTimeout.current)
//       clearTimeout(productDropdownTimeout.current);
//     setShowProductDropdown(true);
//   };

//   const handleProductMouseLeave = () => {
//     productDropdownTimeout.current = setTimeout(
//       () => setShowProductDropdown(false),
//       200
//     );
//   };

//   // Handle scroll behavior
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // Show only navigation if scrolled more than 50px
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-20 shadow-md transition-transform duration-300 ${
//         isScrolled ? "bg-[#FFFFFF]" : "bg-white"
//       }`}
//     >
//       <div
//         className={`container mx-auto flex flex-col items-center py-4 transition-all duration-300 ${
//           isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
//         }`}
//       >
//         {/* Logo */}
//         <Link to="/" className="text-3xl font-bold font-serif text-[#2F5233]">
//           POYS COCO EXPORTS
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <div className="container mx-auto">
//         <nav
//           className={`flex justify-center space-x-8 font-sans text-[#2F5233] text-lg py-2 ${
//             isScrolled ? "py-4" : "py-2"
//           }`}
//         >
//           <Link
//             to="/"
//             className="hover:text-[#1E3B2B] hover:underline transition duration-200"
//           >
//             Home
//           </Link>

//           {/* Products Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={handleProductMouseEnter}
//             onMouseLeave={handleProductMouseLeave}
//           >
//             <span className="hover:text-[#1E3B2B] hover:underline transition duration-200 cursor-pointer">
//               Products
//             </span>
//             {showProductDropdown && (
//               <div
//                 className="absolute top-full left-0 mt-2 w-80 bg-[#A8BDA1] text-[#2F5233] shadow-lg rounded-md z-30"
//                 onMouseEnter={handleProductMouseEnter}
//                 onMouseLeave={handleProductMouseLeave}
//               >
//                 <ul>
//                   <li>
//                     <Link
//                       to="/products/coir-peat"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-peat-grow-bag"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Peat Grow Bag
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-garden-articles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Garden Articles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/coir-geo-textiles"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Coir Geo Textiles
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/products/tender-coconut"
//                       className="block px-4 py-2 hover:bg-[#F5F1E0]"
//                     >
//                       Tender Coconut
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <Link
//             to="/resources"
//             className="hover:text-[#1E3B2B] hover:underline transition duration-200"
//           >
//             Resources
//           </Link>
//           <Link
//             to="/about-us"
//             className="hover:text-[#1E3B2B] hover:underline transition duration-200"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-[#1E3B2B] hover:underline transition duration-200"
//           >
//             Contact
//           </Link>
//         </nav>
//       </div>
//       <hr className="border-t border-[#A8BDA1]" />
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Show only navigation if scrolled more than 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-20 shadow-md transition-transform duration-300 ${
        isScrolled ? "bg-[#FFFFFF]" : "bg-white"
      }`}
    >
      <div
        className={`container mx-auto flex flex-col items-center py-4 transition-all duration-300 ${
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold font-serif text-[#2F5233]">
          POYS COCO EXPORTS
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto">
        <nav
          className={`flex justify-center space-x-8 font-sans text-[#2F5233] text-lg py-2 ${
            isScrolled ? "py-4" : "py-2"
          }`}
        >
          <Link
            to="/"
            className="hover:text-[#1E3B2B] hover:underline transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-[#1E3B2B] hover:underline transition duration-200"
          >
            Products
          </Link>
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
