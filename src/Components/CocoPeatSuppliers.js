import React from "react";
import cocoPeatImage from "../Images/eco-friendly-coco-peat-briquette.jpg"; // Replace with actual image path

const CocoPeatSuppliers = () => {
  return (
    <section className="py-16 px-6 bg-[#F5F1E0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={cocoPeatImage}
            alt="Coco Peat Farm"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2 text-[#2F5233]">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Coco Peat and Coconut Suppliers
          </h2>
          <p className="text-lg leading-relaxed font-sans mb-6 text-[#6B4F4F]">
            Poyscoco is a proud supplier of commercial Coco Peat to the farms
            around the globe. Experienced in working with commercial farms of
            fruit and vegetable crops, our team coordinates with you and
            provides you the 100% organic products you need for improving your
            farm.
          </p>
          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-[#2F5233] text-white font-sans text-lg rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CocoPeatSuppliers;
