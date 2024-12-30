import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import backgroundImage from "../Images/Web_Images/Main-banner.jpg";
import logo from "../Images/Web_Images/Comapany_logo.jpg";
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
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="flex flex-col items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-[#F5F1E0]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={logo} className="h-20 mb-4" alt="Logo" />
          Empowering Sustainable Growth
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-6 text-[#A8BDA1]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Discover the eco-friendly, sustainable choice for nurturing healthy
          plants with our premium cocopeat products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {/* <Link
            to="/products"
            className="px-6 py-3 bg-[#2F5233] text-white font-sans text-base rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Shop Poys Coco Products
          </Link> */}
          <Link
            to="/about-us"
            className="px-6 py-3 bg-[#A8BDA1] text-[#2F5233] font-sans text-base rounded-lg hover:bg-[#8AA68E] transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/91-9842455534?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20products!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#25D366] text-white flex items-center space-x-2 px-4 py-3 rounded-full shadow-lg hover:bg-[#1EBE54] transition duration-300 z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 2 }}
      >
        <FaWhatsapp className="text-xl md:text-3xl" />
        <span className="text-sm md:text-lg font-medium">Connect with us</span>
      </motion.a>
    </section>
  );
};

export default HeroSection;
