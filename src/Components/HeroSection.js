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

import React, { useState, useEffect } from "react";
import Banner1 from "../Images/banner-1.jpg";
import Banner2 from "../Images/banner-1.jpg";
import Banner3 from "../Images/banner-1.jpg";
import Banner4 from "../Images/banner-1.jpg";
import Banner5 from "../Images/banner-1.jpg";

const banners = [Banner1, Banner2, Banner3, Banner4, Banner5];

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 1000); // 3 seconds per banner
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden w-full h-80">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${banners[currentBanner]})`,
          transform: `scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-[#A8BDA1] opacity-10"></div>{" "}
        {/* Overlay */}
      </div>
    </section>
  );
};

export default HeroSection;
