// import React from "react";
// import { useParams } from "react-router-dom";

// const ProductPage = () => {
//   const { productName } = useParams();

//   return (
//     <section className="p-6 bg-softGreen">
//       <h2 className="text-3xl font-bold text-center text-deepGreen mb-4">
//         {productName.replace("-", " ")}
//       </h2>
//       <p className="text-center max-w-2xl mx-auto text-neutralBrown">
//         {/* Display specific product details here */}
//         This is the detail page for {productName.replace("-", " ")}.
//       </p>
//     </section>
//   );
// };

// export default ProductPage;

// src/Components/ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";
import productData from "../Data/ProductData";

const ProductPage = () => {
  const { productId } = useParams();
  const product = productData.find((item) => item.id === productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto mt-4"
      />
      <p className="mt-4">{product.description}</p>
      <ul className="mt-4 list-disc pl-5">
        {product.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
