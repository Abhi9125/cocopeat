import React from "react";
import { FaLeaf, FaTint, FaBug } from "react-icons/fa"; // Correctly import react-icons

const CocoPeatBenefits = () => {
  const benefits = [
    {
      icon: <FaLeaf className="text-[#2F5233]" />,
      title: "Eco-Friendly",
      description: "Coco Peat is an eco-friendly medium for healthy crops.",
    },
    {
      icon: <FaTint className="text-[#2F5233]" />,
      title: "Water Retention",
      description: "Long-term water-holding capacity for optimal growth.",
    },
    {
      icon: <FaBug className="text-[#2F5233]" />,
      title: "Reduced Pests",
      description:
        "Coco Peat reduces pests and disease, ensuring healthy crops.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold font-serif text-center mb-8 text-[#2F5233]">
        Benefits of Growing in Coco Peat
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-[#2F5233] mb-2">
              {benefit.title}
            </h3>
            <p className="text-sm text-[#6B4F4F]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CocoPeatBenefits;
