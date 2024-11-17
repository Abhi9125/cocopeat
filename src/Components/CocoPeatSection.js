import React from "react";
import GrowingCrops from "./GrowingCrops";
import CocoPeatBenefits from "./CocoPeatBenefits";

const CocoPeatSection = () => {
  return (
    <section className="py-16 px-6 bg-[#F5F1E0]">
      <div className="container mx-auto space-y-16">
        <GrowingCrops />
        <CocoPeatBenefits />
      </div>
    </section>
  );
};

export default CocoPeatSection;
