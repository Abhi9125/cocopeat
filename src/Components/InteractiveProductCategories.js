// import React from "react";
// import { Link } from "react-router-dom";
// import { FaLeaf, FaStar } from "react-icons/fa"; // Optional icons for "Eco-Friendly" and "Most Popular"
// import cocoPeatBlocksImage from "../Images/Products/Coir Peat.png"; // Replace with actual image paths
// import growBagsImage from "../Images/Products/Coir Peat Grow Bag.png";
// import cocoPeatBricksImage from "../Images/banner-1.jpg";
// import Products from "./Products";

// const categories = [
//   {
//     name: "Coco Peat Blocks",
//     description:
//       "High-quality blocks for soil conditioning and water retention.",
//     image: cocoPeatBlocksImage,
//     link: "/products/coco-peat-blocks",
//     label: "Eco-Friendly",
//   },
//   {
//     name: "Grow Bags",
//     description: "Perfect for hydroponic systems and controlled environments.",
//     image: growBagsImage,
//     link: "/products/grow-bags",
//     label: "Most Popular",
//   },
//   {
//     name: "Coco Peat Bricks",
//     description: "Compact bricks for easy storage and expanded use.",
//     image: cocoPeatBricksImage,
//     link: "/products/coco-peat-bricks",
//   },
//   // Add more categories as needed
// ];

// const InteractiveProductCategories = () => {
//   return (
//     <section className="py-16 px-6 bg-[#F5F1E0]">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-4xl font-bold text-[#2F5233] font-serif text-center mb-10">
//           Explore Our Cocopeat Products
//         </h2>

//         {/* Horizontal Scroll Container */}
//         <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="relative flex-none w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
//             >
//               {/* Category Image */}
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-full h-48 object-cover rounded-t-lg"
//               />

//               {/* Category Content */}
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-[#2F5233] font-serif mb-2">
//                   {category.name}
//                 </h3>
//                 <p className="text-[#6B4F4F] text-sm font-sans leading-relaxed mb-4">
//                   {category.description}
//                 </p>

//                 {/* Optional Label */}
//                 {category.label && (
//                   <div className="absolute top-4 left-4 bg-[#A8BDA1] text-[#2F5233] text-xs px-2 py-1 rounded-full flex items-center space-x-1">
//                     {category.label === "Eco-Friendly" && <FaLeaf />}
//                     {category.label === "Most Popular" && <FaStar />}
//                     <span>{category.label}</span>
//                   </div>
//                 )}

//                 {/* View Products Button */}
//                 <Link
//                   to={category.link}
//                   className="inline-block mt-4 px-4 py-2 bg-[#2F5233] text-white text-sm font-sans rounded hover:bg-[#1E3B2B] transition duration-300"
//                 >
//                   View Products
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InteractiveProductCategories;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLeaf, FaStar } from "react-icons/fa"; // Optional icons for "Eco-Friendly" and "Most Popular"

// Importing all product images
import tenderCoconut from "../Images/Products/tender coco.png";
import coconut from "../Images/Products/coconut.png";
import drycoconut from "../Images/Products/dry coco.png";
import desiccatedcoconut from "../Images/Products/desiccated.png";
import coconutoil from "../Images/Products/oil.png";
import huskchips from "../Images/Products/husk.png";
import coirfiber from "../Images/Products/coir fiber.png";
import curledcoir from "../Images/Products/curled coir.png";
import coiryarn from "../Images/Products/yarn.png";
import coirmats from "../Images/Products/mats.png";
import coirpeat from "../Images/Products/Coir Peat.png";
import peatgrowbag from "../Images/Products/Coir Peat Grow Bag.png";
import gardenarticles from "../Images/Products/Coir Garden Articles.png";
import geotextiles from "../Images/Products/Coir Geo Textiles.png";

// Defining all products
const products = [
  {
    name: "Coir Peat",
    description: "Ideal for soil conditioning",
    imageUrl: coirpeat,
    label: "Most Popular",
  },
  {
    name: "Coir Peat Grow Bag",
    description: "Perfect for growing plants",
    imageUrl: peatgrowbag,
  },
  {
    name: "Coir Garden Articles",
    description: "Various garden articles",
    imageUrl: gardenarticles,
  },
  {
    name: "Coir Geo Textiles",
    description: "Used for erosion control",
    imageUrl: geotextiles,
  },
  {
    name: "Tender Coconut",
    description: "Fresh and natural",
    imageUrl: tenderCoconut,
    label: "Eco-Friendly",
  },
  { name: "Coconut", description: "Whole and fresh", imageUrl: coconut },
  {
    name: "Dry Coconut",
    description: "Ideal for cooking and oil extraction",
    imageUrl: drycoconut,
  },
  {
    name: "Desiccated Coconut",
    description: "Perfect for baking and cooking",
    imageUrl: desiccatedcoconut,
  },
  {
    name: "Coconut Oil",
    description: "Pure coconut oil",
    imageUrl: coconutoil,
  },
  {
    name: "Coconut Husk Chips",
    description: "Ideal for potting",
    imageUrl: huskchips,
  },
  {
    name: "Coir Fiber",
    description: "Used for various applications",
    imageUrl: coirfiber,
  },
  {
    name: "Curled Coir",
    description: "Used in mattress manufacturing",
    imageUrl: curledcoir,
  },
  {
    name: "Coir Yarn",
    description: "High-quality coir yarn",
    imageUrl: coiryarn,
  },
  { name: "Coir Mats", description: "Eco-friendly mats", imageUrl: coirmats },
];

const InteractiveProductCategories = () => {
  const navigate = useNavigate();

  // Navigate to product-specific pages
  const handleProductClick = (productName) => {
    navigate(`/products/${productName.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <section className="py-16 px-6 bg-[#F5F1E0]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-[#2F5233] font-serif text-center mb-10">
          Explore Our Cocopeat Products
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative flex-none w-72 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Product Image */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* Product Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#2F5233] font-serif mb-2">
                  {product.name}
                </h3>
                <p className="text-[#6B4F4F] text-sm font-sans leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Optional Label */}
                {product.label && (
                  <div className="absolute top-4 left-4 bg-[#A8BDA1] text-[#2F5233] text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                    {product.label === "Eco-Friendly" && <FaLeaf />}
                    {product.label === "Most Popular" && <FaStar />}
                    <span>{product.label}</span>
                  </div>
                )}

                {/* View Products Button */}
                <button
                  onClick={() => handleProductClick(product.name)}
                  className="w-full px-4 py-2 mt-4 bg-[#2F5233] text-white text-sm font-sans rounded hover:bg-[#1E3B2B] transition duration-300"
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductCategories;
