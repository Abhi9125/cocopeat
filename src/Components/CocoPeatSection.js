// import React from "react";
// import GrowingCrops from "./GrowingCrops";
// import CocoPeatBenefits from "./CocoPeatBenefits";
// import { motion } from "framer-motion";

// const CocoPeatSection = () => {
//   return (
//     <section className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
//       <motion.div
//         className="container mx-auto space-y-12"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         <GrowingCrops />
//       </motion.div>
//     </section>
//   );
// };

// export default CocoPeatSection;

import React from "react";
import GrowingCrops from "./GrowingCrops";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const CocoPeatSection = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Coco Peat: A Sustainable Choice for Gardening | Poyscoco</title>
        <meta
          name="description"
          content="Discover the advantages of Coco Peat for sustainable gardening and soilless farming. Perfect for growing crops with eco-friendly solutions."
        />
        <meta
          name="keywords"
          content="Coco Peat, gardening, sustainable farming, soilless cultivation, eco-friendly"
        />
      </Helmet>

      <section
        className="py-8 sm:py-12 px-4 sm:px-6 bg-white"
        aria-labelledby="coco-peat-section"
      >
        <motion.div
          id="coco-peat-section"
          className="container mx-auto space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <GrowingCrops />
        </motion.div>
      </section>
    </>
  );
};

export default CocoPeatSection;
