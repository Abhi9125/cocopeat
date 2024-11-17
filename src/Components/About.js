// // import React from "react";
// // import Breadcrumb from "./Breadcrumb";

// // const About = () => {
// //   return (
// //     <div>
// //       <Breadcrumb />
// //       <section className="bg-[#F5F1E0] py-16 px-6">
// //         <div className="container mx-auto max-w-4xl">
// //           {/* <h2 className="text-4xl font-bold text-[#2F5233] mb-8 text-center md:text-left">
// //             About Us
// //           </h2> */}
// //           <p className="text-lg text-[#6B4F4F] leading-relaxed mb-6">
// //             <span className="font-semibold">POYS COCO EXPORTS</span> is a
// //             subsidiary of SMT Coirs and Vetrivel Coirs, renowned manufacturers
// //             and traders of a variety of coconut products. Based near Pollachi, a
// //             town in Tamil Nadu, India, we have been part of the coconut industry
// //             since 1998, bringing extensive experience in managing large volumes
// //             of COCO (coconut) products.
// //           </p>
// //           <p className="text-lg text-[#6B4F4F] leading-relaxed mb-6">
// //             Over the years, our companies have built a strong reputation for
// //             excellence, consistently delivering high-quality products to both
// //             domestic and international customers. With a commitment to quality
// //             and customer satisfaction, we take pride in our successful
// //             collaborations and longstanding relationships with clients around
// //             the world.
// //           </p>
// //           <div className="mt-8">
// //             <p className="text-lg font-semibold text-[#2F5233]">
// //               Key Highlights:
// //             </p>
// //             <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-[#6B4F4F]">
// //               <li>Over 20 years of experience in the coconut industry.</li>
// //               <li>Strong domestic and international client base.</li>
// //               <li>
// //                 Specialized in various high-quality COCO (coconut) products.
// //               </li>
// //               <li>Trusted partnerships with clients worldwide.</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default About;

// import React from "react";
// import Breadcrumb from "./Breadcrumb";

// const About = () => {
//   return (
//     <div>
//       <Breadcrumb />
//       <section className="bg-[#F5F1E0] py-16 px-6">
//         <div className="container mx-auto max-w-4xl">
//           <h2 className="text-4xl font-bold text-[#2F5233] mb-8 text-center md:text-left font-serif">
//             About Us
//           </h2>
//           <p className="text-lg text-[#6B4F4F] leading-relaxed mb-6 font-sans">
//             <span className="font-semibold">POYS COCO EXPORTS</span> is a
//             subsidiary of SMT Coirs and Vetrivel Coirs, renowned manufacturers
//             and traders of a variety of coconut products. Based near Pollachi, a
//             town in Tamil Nadu, India, we have been part of the coconut industry
//             since 1998, bringing extensive experience in managing large volumes
//             of COCO (coconut) products.
//           </p>
//           <p className="text-lg text-[#6B4F4F] leading-relaxed mb-6 font-sans">
//             Over the years, our companies have built a strong reputation for
//             excellence, consistently delivering high-quality products to both
//             domestic and international customers. With a commitment to quality
//             and customer satisfaction, we take pride in our successful
//             collaborations and longstanding relationships with clients around
//             the world.
//           </p>
//           <div className="mt-8">
//             <p className="text-lg font-semibold text-[#2F5233] font-serif">
//               Key Highlights:
//             </p>
//             <ul className="list-disc list-inside mt-4 space-y-2 text-lg text-[#6B4F4F] font-sans">
//               <li>Over 20 years of experience in the coconut industry.</li>
//               <li>Strong domestic and international client base.</li>
//               <li>
//                 Specialized in various high-quality COCO (coconut) products.
//               </li>
//               <li>Trusted partnerships with clients worldwide.</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Link } from "react-router-dom";
import productionImage from "../Images/banner-1.jpg"; // Replace with actual image paths
import communityImage from "../Images/banner-1.jpg";
import founderImage from "../Images/banner-1.jpg";

const About = () => {
  return (
    <section className="bg-[#F5F1E0] min-h-screen">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center h-40 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x400?text=Products')`,
        }}
      >
        <nav className="text-sm text-white">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">About-us</span>
        </nav>
      </div>
      <div className="container mx-auto max-w-5xl text-center">
        {/* Mission Statement */}
        <h2 className="text-4xl font-bold text-[#2F5233] font-serif mb-6">
          Poys Coco Dedicated to Sustainable Farming Since 1998
        </h2>
        <p className="text-lg text-[#6B4F4F] font-sans leading-relaxed mb-10">
          Our journey began with a vision to create eco-friendly growing
          solutions, supporting sustainable agriculture practices in the heart
          of Pollachi, India. By staying true to our mission, we’ve become
          leaders in the cocopeat industry, contributing to a greener, more
          sustainable world.
        </p>

        {/* Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <img
            src={productionImage}
            alt="Production Process"
            className="rounded-lg shadow-md object-cover h-64 w-full"
          />
          <img
            src={communityImage}
            alt="Local Community"
            className="rounded-lg shadow-md object-cover h-64 w-full"
          />
          <img
            src={founderImage}
            alt="Founders"
            className="rounded-lg shadow-md object-cover h-64 w-full"
          />
        </div>

        {/* Sustainability Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-[#2F5233]">
          <div className="bg-[#FFFFFF] rounded-lg shadow p-6">
            <h3 className="text-3xl font-bold font-serif">1M+</h3>
            <p className="text-lg font-sans">Liters of Water Saved</p>
          </div>
          <div className="bg-[#FFFFFF] rounded-lg shadow p-6">
            <h3 className="text-3xl font-bold font-serif">500K+</h3>
            <p className="text-lg font-sans">Plastic Units Replaced</p>
          </div>
          <div className="bg-[#FFFFFF] rounded-lg shadow p-6">
            <h3 className="text-3xl font-bold font-serif">10K+</h3>
            <p className="text-lg font-sans">Tons of CO₂ Reduced</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/about-us"
          className="inline-block px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};

export default About;
