import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CocoPeatImage from "../Images/Products/Coir Peat.png";
import GrowBagImage from "../Images/Products/Coir Peat Grow Bag.png";
import EasyGrowBagImage from "../Images/Products/Coir Garden Articles.png";
import TenderCoconutImage from "../Images/Products/tender coco.png";
import CoconutImage from "../Images/Products/coconut.png";
import CoirFiberImage from "../Images/Products/coir fiber.png";
import CoirYarnImage from "../Images/Products/yarn.png";

const Products = () => {
  const navigate = useNavigate();

  // Product Data
  const products = [
    { name: "Coco Peat", image: CocoPeatImage },
    { name: "Compressed Blocks", image: CocoPeatImage },
    { name: "Grow Bag", image: GrowBagImage },
    { name: "Easy Grow Bags", image: EasyGrowBagImage },
    { name: "Bags", image: EasyGrowBagImage },
    { name: "Coir Fiber", image: CoirFiberImage },
    { name: "Coir Yarn", image: CoirYarnImage },
    { name: "Tender Coconut", image: TenderCoconutImage },
    { name: "Coconut", image: CoconutImage },
  ];

  // Handle navigation to product details
  const handleProductClick = (productName) => {
    const productId = productName.replace(/\s+/g, "-").toLowerCase(); // Format product name as URL-safe
    navigate(`/products/${productId}`);
  };

  return (
    <section className="bg-[#F5F1E0] min-h-screen">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center h-40 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x400?text=Products')`,
        }}
      >
        <nav className="text-sm text-white">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">Products</span>
        </nav>
      </div>

      {/* Header */}
      <div className="container mx-auto text-center py-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-4">
          Our Products
        </h2>
        <p className="text-base sm:text-lg text-[#6B4F4F] max-w-3xl mx-auto">
          Explore our wide range of high-quality, eco-friendly coconut and coir
          products designed to meet your agricultural and horticultural needs.
        </p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-[#A8BDA1] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() => handleProductClick(product.name)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-[#2F5233] font-serif">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-8">
        <h4 className="text-xl font-bold text-[#2F5233] mb-4">
          Looking for more information?
        </h4>
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#2F5233] text-white rounded-lg hover:bg-[#1E3B2B] transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Products;
