import React from "react";
import { useParams } from "react-router-dom";
import productData from "../Data/ProductData";
import Breadcrumb from "./Breadcrumb";

const ProductPage = () => {
  const { productId } = useParams();
  const product = productData.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-3xl font-bold text-[#2F5233] font-serif">
          Product Not Found
        </h2>
        <p className="text-[#6B4F4F] font-sans">
          We couldn't find the product you're looking for. Please check our
          other offerings!
        </p>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb />
      <section className="py-12 px-6 bg-[#F5F1E0]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-4xl font-bold text-[#2F5233] font-serif mb-4">
                {product.name}
              </h2>
              <p className="text-lg text-[#6B4F4F] font-sans leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-[#2F5233] font-serif mb-2">
                    Benefits
                  </h3>
                  <ul className="list-disc pl-5 text-[#6B4F4F] font-sans">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="mb-1">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Call-to-Action */}
              {/* <button className="px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300">
                Add to Cart
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
