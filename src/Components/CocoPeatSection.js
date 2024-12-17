import React from "react";
import GrowingCrops from "./GrowingCrops";
import CocoPeatBenefits from "./CocoPeatBenefits";
import { motion } from "framer-motion";

const CocoPeatSection = () => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-[#F5F1E0]">
      <motion.div
        className="container mx-auto space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <GrowingCrops />
      </motion.div>
    </section>
  );
};

export default CocoPeatSection;
