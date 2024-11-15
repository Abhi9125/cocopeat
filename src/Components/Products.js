// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import tenderCoconut from "../Images/Products/tender coco.png";
// import coconut from "../Images/Products/coconut.png";
// import drycoconut from "../Images/Products/dry coco.png";
// import desiccatedcoconut from "../Images/Products/desiccated.png";
// import coconutoil from "../Images/Products/oil.png";
// import huskchips from "../Images/Products/husk.png";
// import coirfiber from "../Images/Products/coir fiber.png";
// import curledcoir from "../Images/Products/curled coir.png";
// import coiryarn from "../Images/Products/yarn.png";
// import coirmats from "../Images/Products/mats.png";
// import coirpeat from "../Images/Products/Coir Peat.png";
// import peatgrowbag from "../Images/Products/Coir Peat Grow Bag.png";
// import gardenarticles from "../Images/Products/Coir Garden Articles.png";
// import geotextiles from "../Images/Products/Coir Geo Textiles.png";
// const Products = () => {
//   const products = [
//     {
//       name: "Tender Coconut",
//       description: "Fresh and natural",
//       imageUrl: tenderCoconut,
//     },
//     {
//       name: "Coconut",
//       description: "Whole and fresh",
//       imageUrl: coconut,
//     },
//     {
//       name: "Dry Coconut",
//       description: "Ideal for cooking and oil extraction",
//       imageUrl: drycoconut,
//     },
//     {
//       name: "Desiccated Coconut",
//       description: "Perfect for baking and cooking",
//       imageUrl: desiccatedcoconut,
//     },
//     {
//       name: "Coconut Oil",
//       description: "Pure coconut oil",
//       imageUrl: coconutoil,
//     },
//     {
//       name: "Coconut Husk Chips",
//       description: "Ideal for potting",
//       imageUrl: huskchips,
//     },
//     {
//       name: "Coir Fiber",
//       description: "Used for various applications",
//       imageUrl: coirfiber,
//     },
//     {
//       name: "Curled Coir",
//       description: "Used in mattress manufacturing",
//       imageUrl: curledcoir,
//     },
//     {
//       name: "Coir Yarn",
//       description: "High-quality coir yarn",
//       imageUrl: coiryarn,
//     },
//     {
//       name: "Coir Mats",
//       description: "Eco-friendly mats",
//       imageUrl: coirmats,
//     },
//     {
//       name: "Coir Peat",
//       description: "Ideal for soil conditioning",
//       imageUrl: coirpeat,
//     },
//     {
//       name: "Coir Peat Grow Bag",
//       description: "Perfect for growing plants",
//       imageUrl: peatgrowbag,
//     },
//     {
//       name: "Coir Garden Articles",
//       description: "Various garden articles",
//       imageUrl: gardenarticles,
//     },
//     {
//       name: "Coir Geo Textiles",
//       description: "Used for erosion control",
//       imageUrl: geotextiles,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="products" className="p-6 bg-warmBeige">
//       <h2 className="text-3xl font-bold text-center text-deepGreen mb-4">
//         Our Products
//       </h2>
//       <Slider {...settings} className="max-w-5xl mx-auto">
//         {products.map((product, index) => (
//           <div key={index} className="p-4">
//             <div className="border border-neutralBrown rounded-lg shadow-lg">
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-t-md"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-semibold text-deepGreen">
//                   {product.name}
//                 </h3>
//                 <p className="mt-2 text-neutralBrown">{product.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Products;

// import React from "react";
// import Slider from "react-slick";
// import { useNavigate } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import tenderCoconut from "../Images/Products/tender coco.png";
// import coconut from "../Images/Products/coconut.png";
// import drycoconut from "../Images/Products/dry coco.png";
// import desiccatedcoconut from "../Images/Products/desiccated.png";
// import coconutoil from "../Images/Products/oil.png";
// import huskchips from "../Images/Products/husk.png";
// import coirfiber from "../Images/Products/coir fiber.png";
// import curledcoir from "../Images/Products/curled coir.png";
// import coiryarn from "../Images/Products/yarn.png";
// import coirmats from "../Images/Products/mats.png";
// import coirpeat from "../Images/Products/Coir Peat.png";
// import peatgrowbag from "../Images/Products/Coir Peat Grow Bag.png";
// import gardenarticles from "../Images/Products/Coir Garden Articles.png";
// import geotextiles from "../Images/Products/Coir Geo Textiles.png";

// const Products = () => {
//   const navigate = useNavigate();

//   const products = [
//     {
//       name: "Tender Coconut",
//       description: "Fresh and natural",
//       imageUrl: tenderCoconut,
//     },
//     {
//       name: "Coconut",
//       description: "Whole and fresh",
//       imageUrl: coconut,
//     },
//     {
//       name: "Dry Coconut",
//       description: "Ideal for cooking and oil extraction",
//       imageUrl: drycoconut,
//     },
//     {
//       name: "Desiccated Coconut",
//       description: "Perfect for baking and cooking",
//       imageUrl: desiccatedcoconut,
//     },
//     {
//       name: "Coconut Oil",
//       description: "Pure coconut oil",
//       imageUrl: coconutoil,
//     },
//     {
//       name: "Coconut Husk Chips",
//       description: "Ideal for potting",
//       imageUrl: huskchips,
//     },
//     {
//       name: "Coir Fiber",
//       description: "Used for various applications",
//       imageUrl: coirfiber,
//     },
//     {
//       name: "Curled Coir",
//       description: "Used in mattress manufacturing",
//       imageUrl: curledcoir,
//     },
//     {
//       name: "Coir Yarn",
//       description: "High-quality coir yarn",
//       imageUrl: coiryarn,
//     },
//     {
//       name: "Coir Mats",
//       description: "Eco-friendly mats",
//       imageUrl: coirmats,
//     },
//     {
//       name: "Coir Peat",
//       description: "Ideal for soil conditioning",
//       imageUrl: coirpeat,
//     },
//     {
//       name: "Coir Peat Grow Bag",
//       description: "Perfect for growing plants",
//       imageUrl: peatgrowbag,
//     },
//     {
//       name: "Coir Garden Articles",
//       description: "Various garden articles",
//       imageUrl: gardenarticles,
//     },
//     {
//       name: "Coir Geo Textiles",
//       description: "Used for erosion control",
//       imageUrl: geotextiles,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     responsive: [
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   // Navigate to the product page
//   const handleProductClick = (productName) => {
//     navigate(`/products/${productName.replace(/\s+/g, "-").toLowerCase()}`);
//   };

//   return (
//     <section id="products" className="p-6 bg-warmBeige">
//       <h2 className="text-3xl font-bold text-center text-deepGreen mb-4">
//         Our Products
//       </h2>
//       <Slider {...settings} className="max-w-5xl mx-auto">
//         {products.map((product, index) => (
//           <div key={index} className="p-4">
//             <div
//               className="border border-neutralBrown rounded-lg shadow-lg cursor-pointer"
//               onClick={() => handleProductClick(product.name)}
//             >
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-full h-40 object-cover rounded-t-md"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-semibold text-deepGreen">
//                   {product.name}
//                 </h3>
//                 <p className="mt-2 text-neutralBrown">{product.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default Products;

import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Tender Coconut",
      description: "Fresh and natural",
      imageUrl: tenderCoconut,
    },
    {
      name: "Coconut",
      description: "Whole and fresh",
      imageUrl: coconut,
    },
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
    {
      name: "Coir Mats",
      description: "Eco-friendly mats",
      imageUrl: coirmats,
    },
    {
      name: "Coir Peat",
      description: "Ideal for soil conditioning",
      imageUrl: coirpeat,
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
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleProductClick = (productName) => {
    navigate(`/products/${productName.replace(/\s+/g, "-").toLowerCase()}`);
  };

  return (
    <section id="products" className="p-6 bg-[#F5F1E0]">
      <h2 className="text-3xl font-bold text-center text-[#2F5233] mb-8 font-serif">
        Our Products
      </h2>
      <Slider {...settings} className="max-w-5xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div
              className="border border-[#6B4F4F] bg-[#FFFFFF] rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={() => handleProductClick(product.name)}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-[#2F5233] font-serif">
                  {product.name}
                </h3>
                <p className="mt-2 text-[#6B4F4F] font-sans">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Products;
