import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productName } = useParams();

  return (
    <section className="p-6 bg-softGreen">
      <h2 className="text-3xl font-bold text-center text-deepGreen mb-4">
        {productName.replace("-", " ")}
      </h2>
      <p className="text-center max-w-2xl mx-auto text-neutralBrown">
        {/* Display specific product details here */}
        This is the detail page for {productName.replace("-", " ")}.
      </p>
    </section>
  );
};

export default ProductPage;
