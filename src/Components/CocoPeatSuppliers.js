// import React from "react";
// import { motion } from "framer-motion";
// import CocoPeatGrowingCrops from "../Images/Web_Images/coconut.jpg";

// const CocoPeatSuppliers = () => {
//   return (
//     <section className="flex flex-col items-center space-y-8 py-8 sm:py-12 px-4 sm:px-6 bg-white">
//       {/* Section Heading */}
//       <motion.h2
//         className="text-2xl md:text-3xl font-bold font-serif text-[#2F5233] text-center"
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//       >
//         Coco Peat and Coconut Suppliers
//       </motion.h2>

//       {/* Content Layout */}
//       <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl mx-auto">
//         {/* Text Content */}
//         <motion.div
//           className="w-full md:w-1/2 text-[#2F5233]"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-sm md:text-xl leading-relaxed font-sans mb-6">
//             Poyscoco is a proud supplier of commercial Coco Peat to farms around
//             the globe. Experienced in working with commercial farms of fruit and
//             vegetable crops, our team coordinates with you and provides you with
//             the 100% organic products you need for improving your farm.
//           </p>

//           {/* CTA Button */}
//           <motion.a
//             href="/contact"
//             className="inline-block px-6 py-3 bg-[#2F5233] text-white font-sans text-lg rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Learn More
//           </motion.a>
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src={CocoPeatGrowingCrops}
//             alt="Coco Peat Growing Crops"
//             className="rounded-lg h-72 shadow-lg w-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CocoPeatSuppliers;

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import CocoPeatGrowingCrops from "../Images/Web_Images/coconut.jpg";

const CocoPeatSuppliers = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Coco Peat & Coconut Suppliers | Poyscoco</title>
        <meta
          name="description"
          content="Poyscoco is a trusted supplier of 100% organic Coco Peat and Coconut products to commercial farms worldwide. Enhance your farm's productivity with our sustainable solutions."
        />
        <meta
          name="keywords"
          content="Coco Peat suppliers, coconut suppliers, organic farming, sustainable agriculture, commercial farms, Poyscoco"
        />
      </Helmet>

      <section
        className="flex flex-col items-center space-y-8 py-8 sm:py-12 px-4 sm:px-6 bg-white"
        aria-labelledby="coco-peat-suppliers-heading"
      >
        {/* Section Heading */}
        <motion.h2
          id="coco-peat-suppliers-heading"
          className="text-2xl md:text-3xl font-bold font-serif text-[#2F5233] text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Coco Peat and Coconut Suppliers
        </motion.h2>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-[#2F5233]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm md:text-xl leading-relaxed font-sans mb-6">
              Poyscoco is a proud supplier of commercial Coco Peat to farms
              around the globe. Experienced in working with commercial farms of
              fruit and vegetable crops, our team coordinates with you and
              provides you with the 100% organic products you need for improving
              your farm.
            </p>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#2F5233] text-white font-sans text-lg rounded-lg hover:bg-[#1E3B2B] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch with Us
            </motion.a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={CocoPeatGrowingCrops}
              alt="Eco-friendly Coco Peat and Coconut Products for Sustainable Farming"
              className="rounded-lg h-72 shadow-lg w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CocoPeatSuppliers;
