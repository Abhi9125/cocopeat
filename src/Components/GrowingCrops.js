import React from "react";
import CocoPeatGrowingCrops from "../Images/il_1588xN.2729534689_5jyd.webp";

const GrowingCrops = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={CocoPeatGrowingCrops}
          alt="Coco Peat Growing Crops"
          className="rounded-lg shadow-md w-full"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 text-[#2F5233]">
        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
          <span className="text-3xl">Why Choose</span> Coco Peat for Growing
          Crops
        </h2>
        <p className="text-base md:text-lg leading-relaxed font-sans">
          Coco Peat is proven as the superior growing medium among other
          alternative growing mediums in soilless cultivation. Coco Peat is also
          known as Coir Fiber or Coir Substrate. The powder material within the
          coconut husk is known as Coco Peat. While extracting fiber from
          coconut husk, the Coco Peat is formed as a byproduct. It is a popular
          growing medium for indoor and outdoor plants.
        </p>
      </div>
    </div>
  );
};

export default GrowingCrops;
