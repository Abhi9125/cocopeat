import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import CompressedBlocksImage from "../Images/Web_Images/compressed blocks.jpg";
import GrowBagImage from "../Images/Web_Images/GrowBag.jpg";
import EasyGrowBagsImages from "../Images/Web_Images/easy grow bag.jpg";
import BagsImage from "../Images/Web_Images/Bags.jpg";
import CoirFiberImage from "../Images/Web_Images/coco fiber.jpg";
import CoirYarnImage from "../Images/Web_Images/coco yarn.jpg";
import TenderCoconutImage from "../Images/Web_Images/Tender coconut.jpg";
import CoconutImage from "../Images/Web_Images/coconut.jpg";
import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";
const Product = ({ setSelectedCategory }) => {
  const navigate = useNavigate();

  const productCategories = [
    {
      name: "Coco Peat",
      subcategories: [
        { name: "Compressed Blocks", image: CompressedBlocksImage },
        { name: "Grow Bag", image: GrowBagImage },
        { name: "Easy Grow Bags", image: EasyGrowBagsImages },
        { name: "Bags", image: BagsImage },
      ],
    },
    {
      name: "Coconut Fiber",
      subcategories: [
        { name: "Coir Fiber", image: CoirFiberImage },
        { name: "Coir Yarn", image: CoirYarnImage },
      ],
    },
    {
      name: "Coconut Products",
      subcategories: [
        { name: "Tender Coconut", image: TenderCoconutImage },
        { name: "Coconut", image: CoconutImage },
      ],
    },
  ];

  // const handleCardClick = (subcategory) => {
  //   setSelectedCategory(subcategory);
  //   navigate("/product-details");
  // };
  const handleCardClick = (subcategory) => {
    navigate(`/product-details/${subcategory}`);
  };

  return (
    <section className="bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center h-44 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`, // Replace with actual background image
        }}
      >
        <motion.nav
          className="text-sm text-white font-sans pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <Link to="/products" className="hover:underline">
            Products
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">Explore Our Products</span>
        </motion.nav>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-6 text-center"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Products
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {productCategories.map((category) =>
            category.subcategories.map((subcategory, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  default: { duration: 0.5, delay: index * 0.2 },
                  hover: { duration: 0.3 },
                }}
                onClick={() => handleCardClick(subcategory.name)}
              >
                <img
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#2F5233]">
                    {subcategory.name}
                  </h3>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
