import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NurturetheNatureImg from "../Images/Web_Images/about1.jpg";
import communityImage from "../Images/Web_Images/about2.jpg";
import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";
import { Helmet } from "react-helmet";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const About = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Us - Poyscoco</title>
        <meta
          name="description"
          content="Learn about Poyscoco's journey, commitment to sustainable growth, and why we are a trusted supplier of high-quality coco peat products."
        />
        <meta
          name="keywords"
          content="Poyscoco, coco peat, about us, sustainable growth, agriculture"
        />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>

      {/* Hero Banner / Breadcrumb Section */}
      <motion.div
        className="relative h-60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerImage}
          alt="Resources Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.nav
          className="relative z-10 text-white text-lg font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="font-semibold">About</span>
        </motion.nav>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* The Journey Section */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-8 py-12"
          {...fadeInUp}
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
              The Journey
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We come from generations of agriculturists with diversified global
              experience. Since our start in the early 2000s, the Poyscoco Group
              has grown into a leading manufacturer, supplier, and exporter of
              coconut and coir-based products.
              <br />
              <br />
              Our coir substrates form the ideal base for both above-ground and
              protected cultivations. Our long journey ensures superior quality
              products delivered with quick turnaround times.
            </p>
          </div>
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src={communityImage}
              alt="Our journey in sustainable solutions"
              className="rounded-lg shadow-lg w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
        </motion.section>
        {/* Nurture the Nature Section */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-8 py-12"
          {...fadeInUp}
        >
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={NurturetheNatureImg}
              alt="Nurturing nature through sustainable solutions"
              className="rounded-lg shadow-lg w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
              Nurture the Nature
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Poyscoco, we supply a clean and green growing medium and
              coconut-based products that care for the natural world. Our
              solutions help maintain a healthy environment while fulfilling
              everyday food needs.
              <br />
              <br />
              We research and develop cost-effective, eco-friendly products for
              crop cultivation. The Poyscoco Group manufactures and supplies
              coconut and coconut husk products to grow food and care for pets.
            </p>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section className="text-center py-12" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Why Choose Poyscoco?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            {[
              "Ensures fair trade with all our partners",
              "Providing satisfaction is our number one priority",
              "Modern in-house production facilities",
              "Harvesting raw materials straight from the trees",
              "Delivering superior quality products",
              "Valuing continued patronage",
              "Uplifting rural community living standards",
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white shadow-md p-4 rounded-lg text-gray-700 text-lg font-medium"
              >
                • {item}
              </li>
            ))}
          </ul>
          <motion.div className="mt-8" {...fadeInUp}>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-green-900 transition duration-300"
            >
              Get in Touch with Us
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
};

export default About;
