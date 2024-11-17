// import React from "react";
// import Banner1 from "../Images/banner-1.jpg";
// import Banner2 from "../Images/banner-1.jpg";
// import Banner3 from "../Images/banner-1.jpg";
// import Banner4 from "../Images/banner-1.jpg";
// import Banner5 from "../Images/banner-1.jpg";
// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
//       style={{ backgroundImage: { Banner1 } }}
//     >
//       <div className="absolute inset-0 bg-[#A8BDA1] opacity-75"></div>{" "}
//       {/* Soft Sage Green overlay */}
//       <div className="relative text-center">
//         <h2 className="text-4xl font-bold">High-Quality Cocopeat Products</h2>
//         <p className="mt-4 text-lg">Sustainable & Organic Soil Enhancements</p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from "react";
// import Banner1 from "../Images/banner-1.jpg";
// import Banner2 from "../Images/banner-2.jpg";
// import Banner3 from "../Images/banner-3.jpg";
// import Banner4 from "../Images/banner-4.jpg";
// import Banner5 from "../Images/banner-5.jpg";

// const banners = [Banner1];

// const HeroSection = () => {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
//     }, 3000); // 3 seconds per banner
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative bg-cover bg-center h-80 transition-all duration-700 ease-in-out"
//       style={{ backgroundImage: `url(${banners[currentBanner]})` }}
//     >
//       <div className="absolute inset-0 bg-[#A8BDA1] opacity-10"></div>{" "}
//       {/* Overlay */}
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from "react";
// import Banner1 from "../Images/banner-1.jpg";
// import Banner2 from "../Images/banner-1.jpg";
// import Banner3 from "../Images/banner-1.jpg";
// import Banner4 from "../Images/banner-1.jpg";
// import Banner5 from "../Images/banner-1.jpg";

// const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

// const HeroSection = () => {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
//     }, 3000); // 3 seconds per banner
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className="relative bg-cover bg-center h-80 transition-transform duration-[10000ms] ease-in-out scale-100 hover:scale-110"
//       style={{ backgroundImage: `url(${banners[currentBanner]})` }}
//     >
//       <div className="absolute inset-0 bg-[#A8BDA1] opacity-10"></div>{" "}
//       {/* Overlay */}
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from "react";
// import Banner1 from "../Images/banner-1.jpg";
// import Banner2 from "../Images/banner-1.jpg";
// import Banner3 from "../Images/banner-1.jpg";
// import Banner4 from "../Images/banner-1.jpg";
// import Banner5 from "../Images/banner-1.jpg";

// const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

// const HeroSection = () => {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
//     }, 1000); // 3 seconds per banner
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden w-full h-80">
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-in-out"
//         style={{
//           backgroundImage: `url(${banners[currentBanner]})`,
//           transform: `scale(1.1)`,
//         }}
//       >
//         <div className="absolute inset-0 bg-[#A8BDA1] opacity-10"></div>{" "}
//         {/* Overlay */}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useState, useEffect } from "react";
// import Banner1 from "../Images/banner-1.jpg";
// import Banner2 from "../Images/banner-1.jpg";
// import Banner3 from "../Images/banner-1.jpg";
// import Banner4 from "../Images/banner-1.jpg";
// import Banner5 from "../Images/banner-1.jpg";

// const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

// const HeroSection = () => {
//   const [currentBanner, setCurrentBanner] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
//     }, 3000); // 3 seconds per banner for a smoother transition
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden w-full h-80">
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-in-out"
//         style={{
//           backgroundImage: `url(${banners[currentBanner]})`,
//           transform: `scale(1.05)`,
//         }}
//       >
//         <div className="absolute inset-0 bg-[#2F5233] opacity-30"></div>{" "}
//         {/* Updated overlay */}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import { Link } from "react-router-dom";
// import backgroundVideo from "../Images/videoplayback.mp4"; // Replace with your actual video path

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Video Background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={backgroundVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-[#F5F1E0]">
//           Empowering Sustainable Growth
//         </h1>
//         <p className="text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-8 text-[#A8BDA1]">
//           Discover the eco-friendly, sustainable choice for nurturing healthy
//           plants with our premium cocopeat products.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex space-x-4">
//           {/* <Link
//             to="/products"
//             className="px-6 py-3 bg-[#2F5233] text-white font-sans text-lg rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//           >
//             Shop Cocopeat Products
//           </Link> */}
//           <Link
//             to="/about-us"
//             className="px-6 py-3 bg-[#A8BDA1] text-[#2F5233] font-sans text-lg rounded-lg hover:bg-[#8AA68E] transition duration-300"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import { Link } from "react-router-dom";
// import backgroundVideo from "../Images/videoplayback.mp4"; // Replace with your actual video path

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden z-0">
//       {/* Video Background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         src={backgroundVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-[#F5F1E0]">
//           Empowering Sustainable Growth
//         </h1>
//         <p className="text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-8 text-[#A8BDA1]">
//           Discover the eco-friendly, sustainable choice for nurturing healthy
//           plants with our premium cocopeat products.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex space-x-4">
//           <Link
//             to="/products"
//             className="px-6 py-3 bg-[#2F5233] text-white font-sans text-lg rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//           >
//             Shop Cocopeat Products
//           </Link>
//           <Link
//             to="/about-us"
//             className="px-6 py-3 bg-[#A8BDA1] text-[#2F5233] font-sans text-lg rounded-lg hover:bg-[#8AA68E] transition duration-300"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
// import backgroundVideo from "../Images/videoplayback.mp4"; // Replace with your actual video path

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden z-0">
//       {/* Video Background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         src={backgroundVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-0"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-[#F5F1E0]">
//           Empowering Sustainable Growth
//         </h1>
//         <p className="text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-8 text-[#A8BDA1]">
//           Discover the eco-friendly, sustainable choice for nurturing healthy
//           plants with our premium cocopeat products.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex space-x-4">
//           <Link
//             to="/products"
//             className="px-6 py-3 bg-[#2F5233] text-white font-sans text-lg rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//           >
//             Shop Cocopeat Products
//           </Link>
//           <Link
//             to="/about-us"
//             className="px-6 py-3 bg-[#A8BDA1] text-[#2F5233] font-sans text-lg rounded-lg hover:bg-[#8AA68E] transition duration-300"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/<your-phone-number>?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20products!"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 bg-[#25D366] text-white flex items-center space-x-2 px-4 py-3 rounded-full shadow-lg hover:bg-[#1EBE54] transition duration-300 z-20"
//       >
//         <FaWhatsapp className="text-3xl" />
//         <span className="font-sans text-lg font-medium">Message Us</span>
//       </a>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import backgroundImage from "../Images/top-view-plants_23-2148175929.avif"; // Replace with your actual image path

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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 text-[#F5F1E0]">
          Empowering Sustainable Growth
        </h1>
        <p className="text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-8 text-[#A8BDA1]">
          Discover the eco-friendly, sustainable choice for nurturing healthy
          plants with our premium cocopeat products.
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/products"
            className="px-6 py-3 bg-[#2F5233] text-white font-sans text-lg rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Shop Poys Coco Products
          </Link>
          <Link
            to="/about-us"
            className="px-6 py-3 bg-[#A8BDA1] text-[#2F5233] font-sans text-lg rounded-lg hover:bg-[#8AA68E] transition duration-300"
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
        className="fixed bottom-6 right-6 bg-[#25D366] text-white flex items-center space-x-2 px-4 py-3 rounded-full shadow-lg hover:bg-[#1EBE54] transition duration-300 z-20"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="font-sans text-lg font-medium">Message Us</span>
      </a>
    </section>
  );
};

export default HeroSection;
