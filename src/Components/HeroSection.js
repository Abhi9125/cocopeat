import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#A8BDA1] opacity-75"></div>{" "}
      {/* Soft Sage Green overlay */}
      <div className="relative text-center">
        <h2 className="text-4xl font-bold">High-Quality Cocopeat Products</h2>
        <p className="mt-4 text-lg">Sustainable & Organic Soil Enhancements</p>
      </div>
    </section>
  );
};

export default HeroSection;
