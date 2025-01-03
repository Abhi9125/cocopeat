// // import React from "react";
// // import { motion } from "framer-motion";
// // import CocoPeatGrowingCrops from "../Images/Web_Images/Coco-peat and coco-product.jpg";

// // const GrowingCrops = () => {
// //   return (
// //     <section className="flex flex-col items-center space-y-8">
// //       {/* Section Heading */}
// //       <motion.h2
// //         className="text-2xl md:text-3xl font-bold font-serif text-[#2F5233] text-center"
// //         initial={{ opacity: 0, y: -50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //         viewport={{ once: true }}
// //       >
// //         Why Choose Coco Peat for Growing Crops
// //       </motion.h2>

// //       {/* Content Layout */}
// //       <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl mx-auto">
// //         {/* Image Section */}
// //         <motion.div
// //           className="w-full md:w-1/2"
// //           initial={{ opacity: 0, x: -50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1 }}
// //           viewport={{ once: true }}
// //         >
// //           <img
// //             src={CocoPeatGrowingCrops}
// //             alt="Coco Peat Growing Crops"
// //             className="rounded-lg h-72 shadow-lg w-full object-cover"
// //           />
// //         </motion.div>

// //         {/* Text Content */}
// //         <motion.div
// //           className="w-full md:w-1/2 text-[#2F5233]"
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1 }}
// //           viewport={{ once: true }}
// //         >
// //           <p className="text-base md:text-lg leading-relaxed font-sans mb-4">
// //             Coco Peat is proven as the superior growing medium among other
// //             alternative growing mediums in soilless cultivation. Coco Peat is
// //             also known as Coir Fiber or Coir Substrate. The powder material
// //             within the coconut husk is known as Coco Peat.
// //           </p>
// //           <p className="text-base md:text-lg leading-relaxed font-sans">
// //             While extracting fiber from coconut husk, the Coco Peat is formed as
// //             a byproduct. It is a popular growing medium for indoor and outdoor
// //             plants, offering excellent water retention and root aeration.
// //           </p>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default GrowingCrops;

// import React from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
// import CocoPeatGrowingCrops from "../Images/Web_Images/Coco-peat and coco-product.jpg";

// const GrowingCrops = () => {
//   return (
//     <>
//       {/* Helmet for SEO */}
//       <Helmet>
//         <title>Benefits of Coco Peat for Growing Crops | Poyscoco</title>
//         <meta
//           name="description"
//           content="Discover why Coco Peat is the superior growing medium for crops. Ideal for indoor and outdoor plants, offering water retention and root aeration."
//         />
//         <meta
//           name="keywords"
//           content="Coco Peat, Growing Crops, Soilless Cultivation, Coir Fiber, Coir Substrate, Sustainable Farming"
//         />
//       </Helmet>

//       <section
//         className="flex flex-col items-center space-y-8"
//         aria-labelledby="growing-crops-heading"
//       >
//         {/* Section Heading */}
//         <motion.h2
//           id="growing-crops-heading"
//           className="text-2xl md:text-3xl font-bold font-serif text-[#2F5233] text-center"
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           Why Choose Coco Peat for Growing Crops
//         </motion.h2>

//         {/* Content Layout */}
//         <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl mx-auto">
//           {/* Image Section */}
//           <motion.div
//             className="w-full md:w-1/2"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <img
//               src={CocoPeatGrowingCrops}
//               alt="Coco Peat being used for growing healthy crops"
//               className="rounded-lg h-72 shadow-lg w-full object-cover"
//               loading="lazy" // Lazy-load the image
//             />
//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             className="w-full md:w-1/2 text-[#2F5233]"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <p
//               className="text-base md:text-lg leading-relaxed font-sans mb-4"
//               aria-label="Description of Coco Peat benefits"
//             >
//               Coco Peat is proven as the superior growing medium among other
//               alternative growing mediums in soilless cultivation. Coco Peat is
//               also known as Coir Fiber or Coir Substrate. The powder material
//               within the coconut husk is known as Coco Peat.
//             </p>
//             <p
//               className="text-base md:text-lg leading-relaxed font-sans"
//               aria-label="How Coco Peat is formed and its advantages"
//             >
//               While extracting fiber from coconut husk, the Coco Peat is formed
//               as a byproduct. It is a popular growing medium for indoor and
//               outdoor plants, offering excellent water retention and root
//               aeration.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default GrowingCrops;

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import CocoPeatGrowingCrops from "../Images/Web_Images/Coco-peat and coco-product.jpg";

const GrowingCrops = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Why Choose Coco Peat for Growing Crops | Poyscoco</title>
        <meta
          name="description"
          content="Learn why Coco Peat is the superior growing medium for soilless cultivation. Enhance your plant growth with eco-friendly and sustainable Coco Peat."
        />
        <meta
          name="keywords"
          content="coco peat, growing crops, soilless cultivation, coir fiber, sustainable farming"
        />
      </Helmet>

      <section
        className="flex flex-col items-center space-y-8"
        aria-labelledby="growing-crops-heading"
      >
        {/* Section Heading */}
        <motion.h2
          id="growing-crops-heading"
          className="text-2xl md:text-3xl font-bold font-serif text-[#2F5233] text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Coco Peat for Growing Crops
        </motion.h2>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl mx-auto">
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
              alt="Coco Peat: Superior Growing Medium for Crops"
              className="rounded-lg h-72 shadow-lg w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-[#2F5233]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg leading-relaxed font-sans mb-4">
              Coco Peat is proven as the superior growing medium among other
              alternative growing mediums in soilless cultivation. Coco Peat is
              also known as Coir Fiber or Coir Substrate. The powder material
              within the coconut husk is known as Coco Peat.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-sans">
              While extracting fiber from coconut husk, the Coco Peat is formed
              as a byproduct. It is a popular growing medium for indoor and
              outdoor plants, offering excellent water retention and root
              aeration.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GrowingCrops;
