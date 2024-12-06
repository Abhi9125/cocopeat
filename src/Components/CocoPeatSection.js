import React from "react";
import GrowingCrops from "./GrowingCrops";
import CocoPeatBenefits from "./CocoPeatBenefits";

const CocoPeatSection = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-[#F5F1E0]">
      <div className="container mx-auto space-y-12">
        <GrowingCrops />
        <CocoPeatBenefits />
      </div>
    </section>
  );
};

export default CocoPeatSection;
