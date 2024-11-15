import React, { useState } from "react";
import { FaCartPlus, FaEye } from "react-icons/fa";
import productImage1 from "../Images/banner-1.jpg"; // Replace with actual image paths
import productImage2 from "../Images/banner-1.jpg";
import productImage3 from "../Images/banner-1.jpg";

const products = [
  {
    id: 1,
    name: "Coco Peat Block",
    description:
      "Premium quality coco peat block for gardening and soil conditioning.",
    price: "$15",
    image: productImage1,
  },
  {
    id: 2,
    name: "Grow Bag",
    description:
      "Ideal for hydroponics and indoor gardening, with excellent water retention.",
    price: "$20",
    image: productImage2,
  },
  {
    id: 3,
    name: "Coco Peat Brick",
    description:
      "Compact coco peat brick, perfect for home gardening and potted plants.",
    price: "$10",
    image: productImage3,
  },
  // Add more products as needed
];

const FeaturedProducts = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Open Quick View Modal
  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  // Close Quick View Modal
  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <section className="py-16 px-6 bg-[#F5F1E0]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-[#2F5233] font-serif mb-10">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2F5233] font-serif mb-2">
                {product.name}
              </h3>
              <p className="text-[#6B4F4F] font-sans text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <div className="text-[#2F5233] font-semibold text-lg mb-4">
                {product.price}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => openQuickView(product)}
                  className="flex items-center text-[#2F5233] hover:text-[#1E3B2B] transition duration-300"
                >
                  <FaEye className="mr-1" /> Quick View
                </button>
                <button className="px-4 py-2 bg-[#2F5233] text-white rounded-lg hover:bg-[#1E3B2B] transition duration-300">
                  <FaCartPlus className="inline mr-1" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
              <button
                onClick={closeQuickView}
                className="absolute top-4 right-4 text-[#2F5233] font-semibold"
              >
                X
              </button>
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#2F5233] font-serif mb-2">
                {quickViewProduct.name}
              </h3>
              <p className="text-[#6B4F4F] font-sans leading-relaxed mb-4">
                {quickViewProduct.description}
              </p>
              <div className="text-[#2F5233] font-semibold text-lg mb-6">
                {quickViewProduct.price}
              </div>
              <button className="w-full px-4 py-2 bg-[#2F5233] text-white rounded-lg hover:bg-[#1E3B2B] transition duration-300">
                <FaCartPlus className="inline mr-1" /> Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
