import React from "react";
import { FaTint, FaRecycle, FaLeaf } from "react-icons/fa"; // Icons for visual appeal
import impactInfographic from "../Images/banner-1.jpg"; // Replace with actual infographic image path
import { Link } from "react-router-dom";
const metrics = [
  {
    icon: <FaTint className="text-4xl text-[#2F5233] mb-2" />,
    title: "Liters of Water Saved",
    value: "1M+",
    description:
      "Our cocopeat retains water efficiently, helping reduce water usage.",
  },
  {
    icon: <FaRecycle className="text-4xl text-[#2F5233] mb-2" />,
    title: "Plastic Replaced",
    value: "500K+",
    description:
      "By using natural materials, we’re reducing reliance on plastic products.",
  },
  {
    icon: <FaLeaf className="text-4xl text-[#2F5233] mb-2" />,
    title: "Tons of CO₂ Reduced",
    value: "10K+",
    description:
      "Cocopeat helps offset CO₂ by promoting sustainable agriculture.",
  },
];

const EnvironmentalImpact = () => {
  return (
    <section className="py-16 px-6 bg-[#F5F1E0]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-[#2F5233] font-serif mb-10">
          Our Environmental Impact
        </h2>
        <p className="text-lg text-[#6B4F4F] font-sans mb-10">
          At POYS COCO EXPORTS, we are committed to protecting the environment
          through sustainable practices and products that help reduce waste,
          conserve resources, and promote a healthier planet.
        </p>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {metric.icon}
              <h3 className="text-3xl font-semibold text-[#2F5233] font-serif mb-1">
                {metric.value}
              </h3>
              <h4 className="text-xl font-semibold text-[#2F5233] font-serif mb-2">
                {metric.title}
              </h4>
              <p className="text-[#6B4F4F] font-sans leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Infographic Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-[#2F5233] font-serif mb-6">
            How Cocopeat Makes a Difference
          </h3>
          <img
            src={impactInfographic}
            alt="Environmental impact infographic"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Call-to-Action Button */}
        <Link
          to="/sustainability"
          className="inline-block px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
        >
          Join Us in Making a Difference
        </Link>
      </div>
    </section>
  );
};

export default EnvironmentalImpact;
