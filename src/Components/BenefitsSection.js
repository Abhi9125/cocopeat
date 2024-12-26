import React, { useState } from "react";
import { FaWater, FaLeaf, FaBug } from "react-icons/fa"; // Icons for visual appeal

const benefits = [
  {
    title: "Water Retention",
    icon: <FaWater className="text-[#2F5233] mr-2" />,
    description:
      "Cocopeat retains moisture well, providing consistent hydration for plants and reducing the frequency of watering.",
  },
  {
    title: "Eco-Friendly",
    icon: <FaLeaf className="text-[#2F5233] mr-2" />,
    description:
      "Made from natural coconut husk, cocopeat is a sustainable and biodegradable alternative to traditional soil.",
  },
  {
    title: "Reduced Pests",
    icon: <FaBug className="text-[#2F5233] mr-2" />,
    description:
      "The natural composition of cocopeat helps prevent common pests, keeping plants healthier and reducing the need for pesticides.",
  },
  // Add more benefits as needed
];

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open/close accordion items
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-[#2F5233] font-serif text-center mb-10">
          Why Choose Cocopeat?
        </h2>

        {/* Accordion Section */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-[#A8BDA1] overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center text-xl font-semibold text-[#2F5233] font-serif">
                  {benefit.icon} {benefit.title}
                </div>
                <span className="text-[#6B4F4F]">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              {activeIndex === index && (
                <div className="px-6 py-4 bg-[#F5F1E0] text-[#6B4F4F] font-sans leading-relaxed">
                  {benefit.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
