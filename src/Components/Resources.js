import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";
import CocoPeatInterestingChoiceForGardenImg from "../Images/Web_Images/COCO Peat an interesting choice for the garden.jpg";
import COCOPeatKnownBestSoilImproverImg from "../Images/Web_Images/COCO Peat is known as the best soil improver.jpg";

const resourcesData = [
  {
    title: "Coco Peat",
    description:
      "Coco Peat is an eco-friendly and sustainable growing medium designed for optimal crop growth and environmental conservation.",
    sections: [
      {
        subtitle: "COCO Peat - an interesting choice for the garden",
        details: [
          "COCO Peat comes from the outer husk of the coconut. It is a particularly effective soil improver that optimizes the air and water balance of the soil. This quickly improves the soil and makes it noticeably healthier. Thanks to its unique properties, such as high water absorption, improved soil ventilation and increased organic content, coconut fiber offers a natural and effective solution for various soil types. This makes it an extremely sustainable and versatile choice, both for garden enthusiasts who strive for a healthy garden and for agricultural professionals. POYSCOCO supplies the best quality COCO Peat and Coconut products.",
        ],
        image: CocoPeatInterestingChoiceForGardenImg,
      },
      {
        subtitle:
          "COCO Peat is known as the best soil improver (except for acid-loving plants)",
        details: [
          "COCO Peat is the outer husk of the coconut and improves both air and water management. Since COCO Peat is completely organic, it also increases the organic content of the soil. A good soil must both quickly drain excess water and be able to store sufficient water for dry periods. Also very important is good soil ventilation. The resilient COCO Peat ensures optimum soil ventilation. While considered among the best substrates, it is not usable straight from nature because of very high salt content—which has been expertly removed, buffered, and aged.",
        ],
        // Optionally, add an image:
        // image: COCOPeatKnownBestSoilImproverImg,
      },
      {
        subtitle: "Additional benefits:",
        details: [
          "Prevents moss growth during the winter months.",
          "The loose structure stimulates root development.",
          "100% organic.",
          "Breaks down slower than other organic materials (usable for up to 5 years).",
          "Reusable since mineral residues can be rinsed out.",
          "Promotes rapid growth.",
        ],
        note: "Take control of the feeding routine to avoid deficiencies.",
      },
      {
        subtitle: "Comparison with perlite and vermiculite",
        details: [
          "Perlite and vermiculite only provide an airy soil, but do not add anything essential. COCO Peat, on the other hand, enhances the chemical and biological fertility of the soil.",
          "It greatly increases the organic content in the soil, whereas perlite and vermiculite are not organic.",
        ],
      },
      {
        subtitle: "Comparison with peat",
        details: [
          "Peat acidifies the soil and is therefore better for acid-loving plants, while COCO Peat suits a broader range of plants.",
          "Pure peat tends to “clog” the soil over time and requires mixing with other materials to keep the soil airy.",
          "Once dried, peat struggles to absorb water quickly, unlike COCO Peat.",
        ],
      },
      {
        subtitle: "Comparison with stone or rock wool",
        details: [
          "Growing on rock wool or stone wool is challenging and requires precise pH management. Rock wool typically has a high pH and must be watered with a low pH solution.",
          "COCO Peat helps moderate pH fluctuations and adds organic content—something rock wool cannot do.",
          "Our personal opinion is that coir is superior to other mediums, which is why professionals are increasingly switching to it.",
        ],
      },
      {
        subtitle: "Coconut fiber compared to other ground covers",
        details: [
          "Rock or stone wool requires extensive knowledge due to its high pH and potential for collapse if not properly managed.",
          "COCO Peat regulates pH and enriches the soil organically, offering a simpler and more effective solution.",
          "Our personal opinion: coir outperforms other mediums, which is why it’s our only offering.",
        ],
      },
      {
        subtitle: "Characteristics of Poyscoco Coco Peat",
        details: [
          "Organic, biodegradable, and environmentally friendly substrate",
          "Very low EC – ideal for 'sensitive' crops",
          "Balanced and stabilized pH with extremely low potassium and sodium",
          "Extremely low heavy metals and pesticide residues",
          "High air-filled porosity (AFP) for optimal oxygen exchange, drainage, and water retention",
          "High water holding capacity (WHC) to avoid waterlogging",
          "High cation exchange capacity (CEC) to help plants absorb nutrients",
        ],
      },
      {
        subtitle: "Advantages of Poyscoco Coco Peat",
        details: [
          "Reduces environmental waste",
          "Creates optimal conditions for plant growth",
          "Improves crop quality and productivity",
          "Lowers plant disease risk compared to traditional soil",
          "Reduces labor and maintenance costs",
          "Versatile for both horticulture and non-horticulture applications",
        ],
      },
      {
        subtitle: "Instruction to Use the Poyscoco Coco Peat",
        details: [
          "Step 1: Hydrate the cube or block with fresh water.",
          "Step 2: Stir it with your hands to accelerate expansion.",
          "Step 3: Remove an adequate amount of coco coir.",
          "Step 4: Place it in seedling trays for nurseries or in pots for transplanting.",
          "Step 5: Transplant the seedlings once ready.",
          "Step 6: Water and feed with your chosen or recommended nutrient.",
        ],
        note: "Take control of the feeding routine to avoid deficiencies.",
      },
      {
        subtitle: "Preservation of Poyscoco Coco Peat",
        details: [
          "Store in a cool, dry, and well-ventilated area.",
          "Keep it away from direct sunlight.",
          "Avoid any potential sources of contamination.",
          "Use within the manufacturer’s recommended expiry date.",
        ],
      },
      {
        subtitle: "Coconut Fiber Compared to Other Ground Covers",
        details: [],
        table: {
          headers: [
            "Characteristic",
            "COCO Peat",
            "Perlite/Vermiculite",
            "Peat",
            "Stone/Rock Wool",
          ],
          rows: [
            ["Organic Content", "High", "No", "Low", "No"],
            [
              "Water Absorption",
              "Very high",
              "Moderate",
              "Moderate",
              "Moderate",
            ],
            [
              "pH Value",
              "Neutral (6.0 - 6.8)",
              "N/A",
              "Acidifying",
              "Requires adjustment",
            ],
            [
              "Sustainability",
              "Long (up to 5 years)",
              "Varies",
              "Short",
              "Varies",
            ],
            [
              "Environmental Friendliness",
              "Renewable",
              "Varies",
              "Non-renewable",
              "Non-renewable",
            ],
          ],
        },
      },
    ],
  },
];

// Define which sections should behave as accordions
const accordionSections = [
  "Additional benefits:",
  "Comparison with perlite and vermiculite",
  "Comparison with peat",
  "Comparison with stone or rock wool",
  "Coconut fiber compared to other ground covers",
  "Characteristics of Poyscoco Coco Peat",
  "Advantages of Poyscoco Coco Peat",
  "Instruction to Use the Poyscoco Coco Peat",
  "Preservation of Poyscoco Coco Peat",
];

// const Resources = () => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (idx) => {
//     setOpenAccordion(openAccordion === idx ? null : idx);
//   };

//   return (
//     <section className="bg-gray-50 min-h-screen">
//       {/* Hero Banner */}
//       <motion.div
//         className="relative h-60 flex items-center justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <img
//           src={bannerImage}
//           alt="Resources Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <motion.nav
//           className="relative z-10 text-white text-lg font-medium"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>{" "}
//           <span className="mx-2">›</span>
//           <span className="font-semibold">Resources</span>
//         </motion.nav>
//       </motion.div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 sm:px-6 py-12">
//         {resourcesData.map((resource, resIndex) => (
//           <motion.div
//             key={resIndex}
//             className="mb-16 bg-white p-8 rounded-xl shadow-lg"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: resIndex * 0.3 }}
//             viewport={{ once: true }}
//           >
//             <motion.h2
//               className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-4"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {resource.title}
//             </motion.h2>
//             <motion.p
//               className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {resource.description}
//             </motion.p>

//             {/* Resource Sections */}
//             {resource.sections.map((section, idx) => {
//               const isAccordion = accordionSections.includes(section.subtitle);
//               return (
//                 <div key={idx} className="mb-6">
//                   <motion.div
//                     className={`flex items-center justify-between cursor-pointer p-4 rounded-t-xl ${
//                       isAccordion
//                         ? "bg-green-800 text-white"
//                         : "bg-green-100 text-green-900"
//                     }`}
//                     onClick={() => isAccordion && toggleAccordion(idx)}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                   >
//                     <h3 className="text-2xl font-semibold font-serif">
//                       {section.subtitle}
//                     </h3>
//                     {isAccordion && (
//                       <span className="text-3xl">
//                         {openAccordion === idx ? "−" : "+"}
//                       </span>
//                     )}
//                   </motion.div>
//                   <motion.div
//                     className="p-4 border border-t-0 border-green-200 rounded-b-xl bg-white overflow-hidden"
//                     initial={{
//                       height: isAccordion ? 0 : "auto",
//                       opacity: isAccordion ? 0 : 1,
//                     }}
//                     animate={{
//                       height:
//                         isAccordion && openAccordion === idx
//                           ? "auto"
//                           : isAccordion
//                           ? 0
//                           : "auto",
//                       opacity:
//                         isAccordion && openAccordion === idx
//                           ? 1
//                           : isAccordion
//                           ? 0
//                           : 1,
//                     }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     {section.image && (
//                       <motion.img
//                         src={section.image}
//                         alt={section.subtitle}
//                         className="w-full md:w-1/2 rounded-lg shadow-md mb-4 mx-auto"
//                         initial={{ x: -100, opacity: 0 }}
//                         whileInView={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                       />
//                     )}
//                     {section.details && section.details.length > 0 && (
//                       <ul className="list-disc pl-6 text-gray-700 space-y-2">
//                         {section.details.map((detail, detailIdx) => (
//                           <motion.li
//                             key={detailIdx}
//                             initial={{ opacity: 0, y: 10 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{
//                               duration: 0.4,
//                               delay: detailIdx * 0.2,
//                             }}
//                             viewport={{ once: true }}
//                           >
//                             {detail}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     )}
//                     {section.note && (
//                       <motion.p
//                         className="mt-4 text-sm text-gray-500 italic"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                       >
//                         Note: {section.note}
//                       </motion.p>
//                     )}
//                     {section.table && (
//                       <motion.div
//                         className="overflow-x-auto mt-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                       >
//                         <table className="min-w-full text-sm text-left text-gray-700 border border-green-200">
//                           <thead className="bg-green-50 text-green-800 font-bold">
//                             <tr>
//                               {section.table.headers.map((header, index) => (
//                                 <th
//                                   key={index}
//                                   className="px-4 py-2 border border-green-200"
//                                 >
//                                   {header}
//                                 </th>
//                               ))}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {section.table.rows.map((row, rowIndex) => (
//                               <motion.tr
//                                 key={rowIndex}
//                                 className="hover:bg-green-50"
//                                 initial={{ opacity: 0 }}
//                                 whileInView={{ opacity: 1 }}
//                                 transition={{
//                                   duration: 0.4,
//                                   delay: rowIndex * 0.2,
//                                 }}
//                                 viewport={{ once: true }}
//                               >
//                                 {row.map((cell, cellIndex) => (
//                                   <td
//                                     key={cellIndex}
//                                     className="px-4 py-2 border border-green-200"
//                                   >
//                                     {cell}
//                                   </td>
//                                 ))}
//                               </motion.tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         ))}

//         {/* CTA Button */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <Link
//             to="/contact"
//             className="inline-block px-8 py-3 bg-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-900 transition duration-300"
//           >
//             Get in Touch with Us
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Resources = () => {
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (idx) => {
//     setOpenAccordion(openAccordion === idx ? null : idx);
//   };

//   return (
//     <section className="bg-gray-50 min-h-screen">
//       {/* Hero Banner */}
//       <motion.div
//         className="relative h-60 flex items-center justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <img
//           src={bannerImage}
//           alt="Resources Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <motion.nav
//           className="relative z-10 text-white text-lg font-medium"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//           <span className="mx-2">›</span>
//           <span className="font-semibold">Resources</span>
//         </motion.nav>
//       </motion.div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 sm:px-6 py-12">
//         {resourcesData.map((resource, resIndex) => (
//           <motion.div
//             key={resIndex}
//             className="mb-16 bg-white p-8 rounded-xl shadow-lg"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: resIndex * 0.3 }}
//             viewport={{ once: true }}
//           >
//             <motion.h2
//               className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-4"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {resource.title}
//             </motion.h2>
//             <motion.p
//               className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               {resource.description}
//             </motion.p>

//             {/* Resource Sections */}
//             {resource.sections.map((section, idx) => {
//               const isAccordion = accordionSections.includes(section.subtitle);
//               return (
//                 <div key={idx} className="mb-6">
//                   <motion.div
//                     className={`flex items-center justify-between cursor-pointer p-4 rounded-t-xl ${
//                       isAccordion
//                         ? "bg-green-800 text-white"
//                         : "bg-green-100 text-green-900"
//                     }`}
//                     onClick={() => isAccordion && toggleAccordion(idx)}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                   >
//                     <h3 className="text-2xl font-semibold font-serif">
//                       {section.subtitle}
//                     </h3>
//                     {isAccordion && (
//                       <span className="text-3xl">
//                         {openAccordion === idx ? "−" : "+"}
//                       </span>
//                     )}
//                   </motion.div>
//                   <motion.div
//                     className="p-4 border border-t-0 border-green-200 rounded-b-xl bg-white overflow-hidden"
//                     initial={{
//                       height: isAccordion ? 0 : "auto",
//                       opacity: isAccordion ? 0 : 1,
//                     }}
//                     animate={{
//                       height:
//                         isAccordion && openAccordion === idx
//                           ? "auto"
//                           : isAccordion
//                           ? 0
//                           : "auto",
//                       opacity:
//                         isAccordion && openAccordion === idx
//                           ? 1
//                           : isAccordion
//                           ? 0
//                           : 1,
//                     }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     {section.image && (
//                       <motion.img
//                         src={section.image}
//                         alt={section.subtitle}
//                         className="w-full md:w-1/2 rounded-lg shadow-md mb-4 mx-auto"
//                         initial={{ x: -100, opacity: 0 }}
//                         whileInView={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                       />
//                     )}
//                     {section.details && section.details.length > 0 && (
//                       <ul className="list-disc pl-6 text-gray-700 space-y-2">
//                         {section.details.map((detail, detailIdx) => (
//                           <motion.li
//                             key={detailIdx}
//                             initial={{ opacity: 0, y: 10 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{
//                               duration: 0.4,
//                               delay: detailIdx * 0.2,
//                             }}
//                             viewport={{ once: true }}
//                           >
//                             {detail}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     )}
//                     {section.note && (
//                       <motion.p
//                         className="mt-4 text-sm text-gray-500 italic"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                       >
//                         Note: {section.note}
//                       </motion.p>
//                     )}
//                     {section.table && (
//                       <motion.div
//                         className="overflow-x-auto mt-4"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                       >
//                         <table className="min-w-full text-sm text-left text-gray-700 border border-green-200">
//                           <thead className="bg-green-50 text-green-800 font-bold">
//                             <tr>
//                               {section.table.headers.map((header, index) => (
//                                 <th
//                                   key={index}
//                                   className="px-4 py-2 border border-green-200"
//                                 >
//                                   {header}
//                                 </th>
//                               ))}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {section.table.rows.map((row, rowIndex) => (
//                               <motion.tr
//                                 key={rowIndex}
//                                 className="hover:bg-green-50"
//                                 initial={{ opacity: 0 }}
//                                 whileInView={{ opacity: 1 }}
//                                 transition={{
//                                   duration: 0.4,
//                                   delay: rowIndex * 0.2,
//                                 }}
//                                 viewport={{ once: true }}
//                               >
//                                 {row.map((cell, cellIndex) => (
//                                   <td
//                                     key={cellIndex}
//                                     className="px-4 py-2 border border-green-200"
//                                   >
//                                     {cell}
//                                   </td>
//                                 ))}
//                               </motion.tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         ))}

//         {/* CTA Button */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <Link
//             to="/contact"
//             className="inline-block px-8 py-3 bg-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-900 transition duration-300"
//           >
//             Get in Touch with Us
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

const Resources = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <motion.div
        className="relative h-60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerImage}
          alt="Resources Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.nav
          className="relative z-10 text-white text-lg font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="font-semibold">Resources</span>
        </motion.nav>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {resourcesData.map((resource, resIndex) => (
          <motion.div
            key={resIndex}
            className="mb-16 bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: resIndex * 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-center text-green-800 mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {resource.title}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {resource.description}
            </motion.p>

            {/* Resource Sections */}
            {resource.sections.map((section, idx) => {
              const isAccordion = accordionSections.includes(section.subtitle);
              return (
                <div
                  key={idx}
                  className="mb-6"
                  // On hover, open this accordion section if it's meant to be an accordion.
                  onMouseEnter={
                    isAccordion ? () => setOpenAccordion(idx) : undefined
                  }
                  onMouseLeave={
                    isAccordion ? () => setOpenAccordion(null) : undefined
                  }
                >
                  <motion.div
                    className={`flex items-center justify-between cursor-pointer p-4 rounded-t-xl ${
                      isAccordion
                        ? "bg-green-800 text-white"
                        : "bg-green-100 text-green-900"
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-semibold font-serif">
                      {section.subtitle}
                    </h3>
                    {isAccordion && (
                      <span className="text-3xl">
                        {openAccordion === idx ? "−" : "+"}
                      </span>
                    )}
                  </motion.div>
                  <motion.div
                    className="p-4 border border-t-0 border-green-200 rounded-b-xl bg-white overflow-hidden"
                    initial={{
                      height: isAccordion ? 0 : "auto",
                      opacity: isAccordion ? 0 : 1,
                    }}
                    animate={{
                      height:
                        isAccordion && openAccordion === idx
                          ? "auto"
                          : isAccordion
                          ? 0
                          : "auto",
                      opacity:
                        isAccordion && openAccordion === idx
                          ? 1
                          : isAccordion
                          ? 0
                          : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {section.image && (
                      <motion.img
                        src={section.image}
                        alt={section.subtitle}
                        className="w-full md:w-1/2 rounded-lg shadow-md mb-4 mx-auto"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    )}
                    {section.details && section.details.length > 0 && (
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        {section.details.map((detail, detailIdx) => (
                          <motion.li
                            key={detailIdx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: detailIdx * 0.2,
                            }}
                            viewport={{ once: true }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <motion.p
                        className="mt-4 text-sm text-gray-500 italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Note: {section.note}
                      </motion.p>
                    )}
                    {section.table && (
                      <motion.div
                        className="overflow-x-auto mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <table className="min-w-full text-sm text-left text-gray-700 border border-green-200">
                          <thead className="bg-green-50 text-green-800 font-bold">
                            <tr>
                              {section.table.headers.map((header, index) => (
                                <th
                                  key={index}
                                  className="px-4 py-2 border border-green-200"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <motion.tr
                                key={rowIndex}
                                className="hover:bg-green-50"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                  duration: 0.4,
                                  delay: rowIndex * 0.2,
                                }}
                                viewport={{ once: true }}
                              >
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    className="px-4 py-2 border border-green-200"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        ))}

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-900 transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
