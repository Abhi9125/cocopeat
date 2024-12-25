import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";
import CocoPeatInterestingChoiceForGardenImg from "../Images/Web_Images/Resource1.jpg";
import COCOPeatKnownBestSoilImproverImg from "../Images/Web_Images/Resource2.jpg";
import CharacteristicsPoyscocoCocoPeatImg from "../Images/Web_Images/Resource3.jpg";
import AdvantagesPoyscocoCocoPeatImg from "../Images/Web_Images/Resource4.jpg";
const resourcesData = [
  {
    title: "Coco Peat",
    description:
      "Coco Peat is an eco-friendly and sustainable growing medium designed for optimal crop growth and environmental conservation.",
    sections: [
      {
        subtitle: "COCO Peat - an interesting choice for the garden",
        details: [
          "COCO Peat comes from the outer husk of the coconut. It is a particularly effective soil improver that optimizes the air and water balance of the soil. This quickly improves the soil and makes it noticeably healthier. Thanks to its unique properties, such as high water absorption, improved soil ventilation and increased organic content, coconut fiber offers a natural and effective solution for various soil types. This makes it an extremely sustainable and versatile choice, both for garden enthusiasts who strive for a healthy garden and for agricultural professionals. POYSCOCO supplies the best quality COCO Peat and Coconut products. ",
        ],
        image: CocoPeatInterestingChoiceForGardenImg,
      },
      {
        subtitle:
          "COCO Peat is known as the best soil improver (except for acid-loving plants)",
        details: [
          "COCO Peat is the outer husk of the coconut and improves both air and water management. Since COCO Peat is completely organic, COCO Peat also increases the organic content of the soil. A good soil must both quickly drain excess water and be able to store sufficient water for dry periods. Also very important is good soil ventilation. The resilient COCO Peat ensure optimum soil ventilation.COCO Peat are considered to be among the best substrates, but are not usable when pure from nature due to the very high salt content. This salt has all been expertly removed, perfectly buffered and aged. Therefore, when you buy coconut fibers, you must be sure that this work has been done properly.",
        ],
        image: COCOPeatKnownBestSoilImproverImg,
      },
      {
        subtitle: "Additional benefits:",
        details: [
          "•	Prevents moss growth during the winter months.",
          "The loose structure stimulates root development.",
          "100% organic.",
          "Breaks down slower than other organic materials. Can be used for about 5 years before it breaks down.",
          "Unlike other potting soils, it can be reused several times because the mineral residues can be rinsed out.",
          "Promotes rapid growth.",
        ],
        note: "Take control of the feeding routine to avoid deficiencies.",
      },
      {
        subtitle: "Comparison with perlite and vermiculite",
        details: [
          "Perlite and vermiculite only provide an airy soil, but do not add anything essential to the soil. COCO Peat do. They have a favorable effect on the chemical and biological fertility of the soil.",
          "COCO Peat greatly increases the organic content in the soil. Perlite and vermiculite are not organic at all.",
        ],
      },
      {
        subtitle: "Comparison with peat",
        details: [
          "Peat acidifies the soil and is therefore preferable for acid-loving plants, while COCO Peat are better for normal plants.",
          "Pure peat has the disadvantage that the soil eventually becomes “clogged”, so it is necessary to mix it with other materials that keep the soil airy.",
          "Once dried, peat has difficulty absorbing water quickly, unlike COCO Peat.",
        ],
      },
      {
        subtitle: "Comparison with stone or rock wool",
        details: [
          "Growing on rock wool or stone wool is not that easy and requires a certain amount of knowledge. Rock wool has a high pH value by itself, so it is important to water it well with a low pH value (5.1 to 5.5). You also have to make sure that the pH of the rock wool is never lower than 5.0 or it loses its resilience and can collapse completely.",
          "COCO Peat partly regulates the pH itself and will moderate pH fluctuations.",
          "Here too the same as perlite and vermiculite. Rock or rock wool do not add anything essential to the soil.",
          "COCO Peat greatly increase the organic content in the soil. Rock wool or stone wool are not organic at all.",
          "Our personal opinion is that coir is better than all other mediums, which is why we only offer coir. Professionals are increasingly switching to coir because of its many advantages.",
        ],
      },
      {
        subtitle: "Coconut fiber compared to other ground covers",
        details: [
          "Growing on rock wool or stone wool is not that easy and requires a certain amount of knowledge. Rock wool has a high pH value by itself, so it is important to water it well with a low pH value (5.1 to 5.5). You also have to make sure that the pH of the rock wool is never lower than 5.0 or it loses its resilience and can collapse completely.",
          "COCO Peat partly regulates the pH itself and will moderate pH fluctuations.",
          "Here too the same as perlite and vermiculite. Rock or rock wool do not add anything essential to the soil.",
          "COCO Peat greatly increase the organic content in the soil. Rock wool or stone wool are not organic at all.",
          "Our personal opinion is that coir is better than all other mediums, which is why we only offer coir. Professionals are increasingly switching to coir because of its many advantages.",
        ],
      },
      {
        subtitle: "Coconut fiber compared to other ground covers",
        details: [
          "Growing on rock wool or stone wool is not that easy and requires a certain amount of knowledge. Rock wool has a high pH value by itself, so it is important to water it well with a low pH value (5.1 to 5.5). You also have to make sure that the pH of the rock wool is never lower than 5.0 or it loses its resilience and can collapse completely.",
          "COCO Peat partly regulates the pH itself and will moderate pH fluctuations.",
          "Here too the same as perlite and vermiculite. Rock or rock wool do not add anything essential to the soil.",
          "COCO Peat greatly increase the organic content in the soil. Rock wool or stone wool are not organic at all.",
          "Our personal opinion is that coir is better than all other mediums, which is why we only offer coir. Professionals are increasingly switching to coir because of its many advantages.",
        ],
      },
      {
        subtitle: "Characteristics of Poyscoco Coco Peat",
        details: [
          "Organic, biodegradable and environmentally friendly substrate",
          "Very low EC, especially suitable for 'sensitive' crops",
          "Balanced and stabilized pH levels, with extremely low potassium and sodium contents, suitable for many different crops",
          "Extremely low heavy metals and pesticide residues",
          "High air-filled porosity (AFP) provides good medium structure (not too loose or too dense), good oxygen exchange, proper drainage, good water retention, and nutrient uptake for better plant growth",
          "Good drainage as well as high water holding capacity (WHC) helps to retain moisture and avoid water logging for plants.",
          "High Cation exchange capacity (CEC) helps plants absorb necessary nutrients",
        ],
        image: CharacteristicsPoyscocoCocoPeatImg,
      },
      {
        subtitle: "Advantages of Poyscoco Coco Peat",
        details: [
          "Protects and reduces the amount of waste in the environment",
          "Creates favorable conditions and an ideal environment for plant growth",
          "Improves crop quality and productivity",
          "Reduces the risk of plant diseases compared to traditional soil",
          "Helps growers save costs in efforts of caring and using labor",
          "Versatile growing medium for both horticulture and non-horticulture fields",
        ],
        image: AdvantagesPoyscocoCocoPeatImg,
      },
      {
        subtitle: "Instruction to Use the Poyscoco Coco Peat",
        details: [
          "Step 1: Hydrate the cube or brick/block with fresh water.",
          "Step 2: While waiting for it to expand to fullness, use hands to stir it up for quicker expansion.",
          "Step 3: Take out an adequate amount of coco coir.",
          "Step 4: Put it into seedling/propagation trays if it is for nurseries, or pots/containers if it is for transplanting.",
          "Step 5: For growing plants, transplant the seedlings into the pots/containers.",
          "Step 6: Water and feed the plants with your own or recommended nutrient.",
        ],
        note: "Take control of the feeding routine to avoid deficiencies.",
      },
      {
        subtitle: "Preservation of Poyscoco Coco Peat",
        details: [
          "Store in a dry place: Keep the dehydrated coco coir in a cool, dry, and well-ventilated area.",
          "Keep it away from sunlight: Direct sunlight can damage the coco coir.",
          "Avoid contamination: Keep the coir away from any potential sources of contamination.",
          "Use within the expiry date as recommended by the manufacturer.",
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
              "Not applicable",
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

const Resources = () => {
  return (
    <section className="bg-[#F5F1E0] min-h-screen">
      {/* Breadcrumb Section */}
      <motion.div
        className="bg-cover bg-center h-40 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`, // Replace with an actual banner image
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.nav
          className="text-sm text-white font-sans"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">Resources</span>
        </motion.nav>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-10">
        {resourcesData.map((resource, index) => (
          <motion.div
            key={index}
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Resource Title */}
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-6 text-center"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {resource.title}
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-[#6B4F4F] font-sans leading-relaxed mb-8 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {resource.description}
            </motion.p>

            {/* Resource Sections */}
            {resource.sections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-8 mb-8"
              >
                {section.image && (
                  <motion.img
                    src={section.image}
                    alt={section.subtitle}
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
                <motion.div
                  className="w-full"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-2xl font-semibold text-[#2F5233] font-serif mb-4"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {section.subtitle}
                  </motion.h3>
                  {section.details.length > 0 && (
                    <ul className="list-disc pl-6 text-[#6B4F4F] font-sans space-y-2">
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
                      className="mt-4 text-sm text-[#A8BDA1] italic"
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
                      <table className="min-w-full text-sm text-left text-[#6B4F4F] border-collapse border border-[#A8BDA1]">
                        <thead className="bg-[#F5F1E0] text-[#2F5233] font-bold">
                          <tr>
                            {section.table.headers.map((header, index) => (
                              <th
                                key={index}
                                className="px-4 py-2 border border-[#A8BDA1]"
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
                              className="hover:bg-[#F5F5F5]"
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
                                  className="px-4 py-2 border border-[#A8BDA1] text-[#6B4F4F]"
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
            ))}
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
            className="px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
