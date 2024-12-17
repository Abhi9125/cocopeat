import React from "react";
import {
  FaLeaf,
  FaTint,
  FaBug,
  FaSeedling,
  FaWater,
  FaAppleAlt,
} from "react-icons/fa";

const CocoPeatBenefits = () => {
  const benefits = [
    {
      icon: <FaLeaf className="text-[#2F5233]" />,
      title: "Eco-Friendly Growing Medium",
      description:
        "Coco Peat is a proven eco-friendly medium to grow healthy crops for bountiful yields.",
    },
    {
      icon: <FaSeedling className="text-[#2F5233]" />,
      title: "Increases Productivity and Quality",
      description:
        "Coco Peat enhances farm productivity and improves crop quality.",
    },
    {
      icon: <FaBug className="text-[#2F5233]" />,
      title: "Reduces Pests and Disease",
      description:
        "Coco Peat reduces pests and diseases, ensuring healthier crops.",
    },
    {
      icon: <FaTint className="text-[#2F5233]" />,
      title: "Long-Term Water Retention",
      description:
        "Provides excellent water-holding capacity for optimal crop growth at all stages.",
    },
    {
      icon: <FaWater className="text-[#2F5233]" />,
      title: "High Porosity",
      description:
        "Ensures proper aeration and root health, promoting strong plant development.",
    },
    {
      icon: <FaAppleAlt className="text-[#2F5233]" />,
      title: "Suitable for Various Crops",
      description:
        "Poyscoco's coco peat is perfect for hydroponic systems, cucumbers, tomatoes, blueberries, strawberries, ginger, and more.",
    },
  ];

  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold font-serif text-center mb-6 text-[#2F5233]">
        Benefits of Growing in Coco Peat
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <div className="text-3xl md:text-4xl mb-3">{benefit.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-[#2F5233] mb-2">
              {benefit.title}
            </h3>
            <p className="text-sm md:text-base text-[#6B4F4F]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocoPeatBenefits;
