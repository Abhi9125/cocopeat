// import React from "react";
// import { Link } from "react-router-dom";
// import productionImage from "../Images/Growing-Vegetables-in-Coco-Coir.jpg"; // Update with actual image paths
// import communityImage from "../Images/Growing-Vegetables-in-Coco-Coir.jpg";
// import founderImage from "../Images/Growing-Vegetables-in-Coco-Coir.jpg";

// const About = () => {
//   return (
//     <section className="bg-[#F5F1E0] min-h-screen">
//       {/* Breadcrumb Section */}
//       <div
//         className="bg-cover bg-center h-40 flex items-center justify-center"
//         style={{
//           backgroundImage: `url('https://via.placeholder.com/1200x400?text=About')`,
//         }}
//       >
//         <nav className="text-sm text-white font-sans">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>{" "}
//           <span className="text-white px-2">›</span>
//           <span className="font-semibold">About Us</span>
//         </nav>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 sm:px-6 py-10">
//         {/* Section: Nurture the Nature */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-6 text-center">
//           Nurture the Nature
//         </h2>
//         <p className="text-base sm:text-lg text-[#6B4F4F] font-sans leading-relaxed mb-8 text-center max-w-4xl mx-auto">
//           From the prestigious coconut, Poyscoco provides a clean, green growing
//           medium, tender coconut, coconut, and related products. Poyscoco offers
//           solutions for everyday food needs of consumers around the world. We
//           research, design, and develop solutions which are cost-effective and
//           environmentally friendly. The Poyscoco Group makes and supplies
//           products to fulfill food needs, grow food, and care for pets—all made
//           from coconut and coconut husk.
//           <br />
//           <br />
//           Since stepping into coir manufacturing in 2011, Poyscoco Group of
//           Companies has grown rapidly to become a manufacturer, supplier, and
//           exporter of coconut and coir-based products. Our coir substrates are
//           the perfect base for above-ground and protected cultivation.
//         </p>

//         {/* Image Collage */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           <img
//             src={productionImage}
//             alt="Production Process"
//             className="rounded-lg shadow-md object-cover h-48 w-full"
//           />
//           <img
//             src={communityImage}
//             alt="Local Community"
//             className="rounded-lg shadow-md object-cover h-48 w-full"
//           />
//           <img
//             src={founderImage}
//             alt="Founders"
//             className="rounded-lg shadow-md object-cover h-48 w-full"
//           />
//         </div>

//         {/* Section: Partnering with Us */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-6 text-center">
//           Partnering with Us
//         </h2>
//         <p className="text-base sm:text-lg text-[#6B4F4F] font-sans leading-relaxed mb-8 text-center max-w-4xl mx-auto">
//           Are you looking for a long-term supplier of coconut and coir products?
//           Then you've reached the right place. Each one of us in our team is
//           working to turn coconut and its husks into valuable food and farming
//           products.
//           <br />
//           <br />
//           At Poyscoco, we ensure market-leading superior product quality and
//           supply the product with a quick turnaround time using advanced
//           manufacturing processes. We ensure fair trade with all our
//           stakeholders.
//         </p>

//         {/* CTA Button */}
//         <div className="text-center">
//           <Link
//             to="/contact"
//             className="px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//           >
//             Get in Touch with Us
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NurturetheNatureImg from "../Images/Web_Images/about1.jpg";
import communityImage from "../Images/Web_Images/about2.jpg";
import founderImage from "../Images/Growing-Vegetables-in-Coco-Coir.jpg";
import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  return (
    <section className="bg-[#F5F1E0]">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center h-44 flex items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <nav className="text-sm text-white font-sans pt-10">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="text-white px-2">›</span>
          <span className="font-semibold">About Us</span>
        </nav>
      </div>

      {/* Nurture the Nature Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          {...fadeInUp}
        >
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={NurturetheNatureImg}
              alt="Nurture the Nature"
              className="rounded-lg shadow-lg w-full h-72 object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] mb-4">
              Nurture the Nature
            </h2>
            <p className="text-lg text-[#6B4F4F] leading-relaxed">
              From the prestigious Coconut; Poyscoco supplies a Clean and Green
              Growing Medium, and coconut-related products to care for the
              natural world around us and emphasize the importance of a healthy
              environment.
              <br />
              <br />
              Poyscoco provides solutions for everyday Food Needs of the
              consumers around the world. We research and develop solutions to
              meet cost-effective and environmentally friendly products for
              growing crops and food needs. The Poyscoco Group manufactures and
              supplies products of coconut and coconut husk to fulfill food
              needs, grow food, and care for pets.
            </p>
          </div>
        </motion.div>
      </div>

      {/* The Journey Section */}
      <div className="container mx-auto px-6 py-16 bg-white">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          {...fadeInUp}
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] mb-4">
              The Journey
            </h2>
            <p className="text-lg text-[#6B4F4F] leading-relaxed">
              We are generations of agriculturists from a farming community,
              with diversified experience around the world. We stepped into coir
              manufacturing in the early 2000s. Poyscoco Group of Companies has
              grown steadily and rapidly to become a Manufacturer, Supplier, and
              Exporter of Coconut and coir-based products.
              <br />
              <br />
              Our coir substrates are the perfect base for above-ground and
              protected cultivations. The long journey ensures we are a
              market-leading supplier of superior quality products with quick
              turnaround times using advanced manufacturing processes.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src={communityImage}
              alt="The Journey"
              className="rounded-lg shadow-lg w-full h-72 object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#2F5233] mb-6"
          {...fadeInUp}
        >
          Why Choose Poyscoco?
        </motion.h2>

        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left"
          {...fadeInUp}
        >
          {[
            "Ensures a fair trade with all our partners",
            "Providing satisfaction is our number one priority",
            "Modern in-house production facilities",
            "Harvesting the raw materials straight from the trees",
            "Delivering superior quality products",
            "We value the continued patronage",
            "Uplifting living standards of rural community",
          ].map((item, index) => (
            <li
              key={index}
              className="bg-white shadow-md p-4 rounded-lg text-[#2F5233] text-lg font-medium"
            >
              • {item}
            </li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.div className="mt-8" {...fadeInUp}>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
