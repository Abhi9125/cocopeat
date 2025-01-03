// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLeaf,
//   FaTint,
//   FaBug,
//   FaSeedling,
//   FaWater,
//   FaAppleAlt,
// } from "react-icons/fa";

// const CocoPeatBenefits = () => {
//   const benefits = [
//     {
//       icon: <FaLeaf className="text-[#2F5233]" />,
//       title: "Eco-Friendly Growing Medium",
//       description:
//         "Coco Peat is a proven eco-friendly medium to grow healthy crops for bountiful yields.",
//     },
//     {
//       icon: <FaSeedling className="text-[#2F5233]" />,
//       title: "Increases Productivity and Quality",
//       description:
//         "Coco Peat enhances farm productivity and improves crop quality.",
//     },
//     {
//       icon: <FaBug className="text-[#2F5233]" />,
//       title: "Reduces Pests and Disease",
//       description:
//         "Coco Peat reduces pests and diseases, ensuring healthier crops.",
//     },
//     {
//       icon: <FaTint className="text-[#2F5233]" />,
//       title: "Long-Term Water Retention",
//       description:
//         "Provides excellent water-holding capacity for optimal crop growth at all stages.",
//     },
//     {
//       icon: <FaWater className="text-[#2F5233]" />,
//       title: "High Porosity",
//       description:
//         "Ensures proper aeration and root health, promoting strong plant development.",
//     },
//     {
//       icon: <FaAppleAlt className="text-[#2F5233]" />,
//       title: "Suitable for Various Crops",
//       description:
//         "Poyscoco's coco peat is perfect for hydroponic systems, cucumbers, tomatoes, blueberries, strawberries, ginger, and more.",
//     },
//   ];

//   return (
//     <motion.div
//       className="py-10 px-6"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//       }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-2xl md:text-3xl font-bold font-serif text-center mb-6 text-[#2F5233]">
//         Benefits of Growing in Coco Peat
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {benefits.map((benefit, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             <div className="text-3xl md:text-4xl mb-3">{benefit.icon}</div>
//             <h3 className="text-lg md:text-xl font-semibold text-[#2F5233] mb-2">
//               {benefit.title}
//             </h3>
//             <p className="text-sm md:text-base text-[#6B4F4F]">
//               {benefit.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default CocoPeatBenefits;

import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaTint,
  FaBug,
  FaSeedling,
  FaWater,
  FaAppleAlt,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const CocoPeatBenefits = () => {
  const benefits = [
    {
      icon: "🌱",
      title: "Eco-Friendly Growing Medium",
      description:
        "Coco Peat is a proven eco-friendly medium to grow healthy crops for bountiful yields.",
    },
    {
      icon: "🌾",
      title: "Increases Productivity and Quality",
      description:
        "Coco Peat enhances farm productivity and improves crop quality.",
    },
    {
      icon: "🐞",
      title: "Reduces Pests and Disease",
      description:
        "Coco Peat reduces pests and diseases, ensuring healthier crops.",
    },
    {
      icon: "💦",
      title: "Long-Term Water Retention",
      description:
        "Provides excellent water-holding capacity for optimal crop growth at all stages.",
    },
    {
      icon: "💧",
      title: "High Porosity",
      description:
        "Ensures proper aeration and root health, promoting strong plant development.",
    },
    {
      icon: "🍓",
      title: "Suitable for Various Crops",
      description:
        "Poyscoco's coco peat is perfect for hydroponic systems, cucumbers, tomatoes, blueberries, strawberries, ginger, and more.",
    },
  ];
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Coco Peat Benefits | Sustainable Gardening</title>
        <meta
          name="description"
          content="Explore the benefits of growing with Coco Peat, an eco-friendly and effective medium for sustainable gardening and farming."
        />
        <meta
          name="keywords"
          content="Coco Peat benefits, eco-friendly gardening, water retention, sustainable farming"
        />
      </Helmet>

      <motion.div
        className="py-10 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1 }}
        role="region"
        aria-labelledby="coco-peat-benefits-heading"
      >
        {/* Section Title */}
        <h2
          id="coco-peat-benefits-heading"
          className="text-2xl md:text-3xl font-bold font-serif text-center mb-6 text-[#2F5233]"
        >
          Benefits of Growing in Coco Peat
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className="text-3xl md:text-4xl mb-3"
                aria-hidden="true"
                role="img"
              >
                {benefit.icon}
              </div>
              <h3
                className="text-lg md:text-xl font-semibold text-[#2F5233] mb-2"
                aria-label={benefit.title}
              >
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-[#6B4F4F]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default CocoPeatBenefits;
