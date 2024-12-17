import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import backgroundImage from "../Images/top-view-plants_23-2148175929.avif";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-[#F5F1E0]">
          Empowering Sustainable Growth
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-6 text-[#A8BDA1]">
          Discover the eco-friendly, sustainable choice for nurturing healthy
          plants with our premium cocopeat products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-[#2F5233] text-white font-sans text-base rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Shop Poys Coco Products
          </Link>
          <Link
            to="/about-us"
            className="px-6 py-3 bg-[#A8BDA1] text-[#2F5233] font-sans text-base rounded-lg hover:bg-[#8AA68E] transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/<your-phone-number>?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20products!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#25D366] text-white flex items-center space-x-2 px-4 py-3 rounded-full shadow-lg hover:bg-[#1EBE54] transition duration-300 z-20"
      >
        <FaWhatsapp className="text-xl md:text-3xl" />
        <span className="text-sm md:text-lg font-medium">Connect with us</span>
      </a>
    </section>
  );
};

export default HeroSection;
