import React from "react";
import { FaSeedling, FaExpand, FaWater } from "react-icons/fa"; // Icons for visual appeal
import tutorialVideo from "../Images/videoplayback.mp4"; // Replace with your actual video path
import cocoPeatBricksImage from "../Images/Products/Coir Peat.png"; // Replace with actual image paths
import growBagsImage from "../Images/Products/Coir Peat Grow Bag.png";

const steps = [
  {
    title: "Soak",
    icon: <FaWater className="text-[#2F5233] mr-2" />,
    description:
      "Start by soaking cocopeat in water to expand and hydrate it. The cocopeat will absorb the water and expand to its full potential.",
  },
  {
    title: "Expand",
    icon: <FaExpand className="text-[#2F5233] mr-2" />,
    description:
      "Allow the cocopeat to expand fully. This process increases its volume, making it ready to use as a planting medium.",
  },
  {
    title: "Plant",
    icon: <FaSeedling className="text-[#2F5233] mr-2" />,
    description:
      "Once expanded, cocopeat is ready for planting. Use it as a soil alternative or mix it with soil for improved water retention.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-[#F5F1E0]">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-[#2F5233] font-serif mb-10">
          How to Use Cocopeat
        </h2>

        {/* Step-by-Step Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-4xl">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#2F5233] font-serif mb-2">
                {step.title}
              </h3>
              <p className="text-[#6B4F4F] font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Applications by Product Type */}
        <div className="text-left mb-10">
          <h3 className="text-3xl font-semibold text-[#2F5233] font-serif text-center mb-6">
            Applications by Product Type
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <img
                src={growBagsImage}
                alt="Grow Bags"
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold text-[#2F5233] font-serif mb-2">
                Grow Bags
              </h4>
              <p className="text-[#6B4F4F] font-sans leading-relaxed text-center">
                Ideal for hydroponic systems and greenhouse environments, our
                cocopeat grow bags provide excellent water retention for healthy
                plant growth.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
              <img
                src={cocoPeatBricksImage}
                alt="Coco Peat Bricks"
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold text-[#2F5233] font-serif mb-2">
                Coco Peat Bricks
              </h4>
              <p className="text-[#6B4F4F] font-sans leading-relaxed text-center">
                Perfect for home gardening, coco peat bricks expand when soaked
                and provide an eco-friendly medium for container gardening.
              </p>
            </div>
          </div>
        </div>

        {/* Video Tutorial */}
        {/* <div className="text-center">
          <h3 className="text-3xl font-semibold text-[#2F5233] font-serif mb-6">
            Watch Our Tutorial
          </h3>
          <video
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
            src={tutorialVideo}
            controls
          ></video>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
