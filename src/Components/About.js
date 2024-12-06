import React from "react";
import { Link } from "react-router-dom";
import productionImage from "../Images/Growing-Vegetables-in-Coco-Coir.jpg"; // Update with actual image paths
import communityImage from "../Images/Growing-Vegetables-in-Coco-Coir.jpg";
import founderImage from "../Images/Growing-Vegetables-in-Coco-Coir.jpg";

const About = () => {
  return (
    <section className="bg-[#F5F1E0] min-h-screen">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center h-40 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x400?text=About')`,
        }}
      >
        <nav className="text-sm text-white font-sans">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">About Us</span>
        </nav>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 py-10">
        {/* Section: Nurture the Nature */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-6 text-center">
          Nurture the Nature
        </h2>
        <p className="text-base sm:text-lg text-[#6B4F4F] font-sans leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          From the prestigious coconut, Poyscoco provides a clean, green growing
          medium, tender coconut, coconut, and related products. Poyscoco offers
          solutions for everyday food needs of consumers around the world. We
          research, design, and develop solutions which are cost-effective and
          environmentally friendly. The Poyscoco Group makes and supplies
          products to fulfill food needs, grow food, and care for pets—all made
          from coconut and coconut husk.
          <br />
          <br />
          Since stepping into coir manufacturing in 2011, Poyscoco Group of
          Companies has grown rapidly to become a manufacturer, supplier, and
          exporter of coconut and coir-based products. Our coir substrates are
          the perfect base for above-ground and protected cultivation.
        </p>

        {/* Image Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <img
            src={productionImage}
            alt="Production Process"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src={communityImage}
            alt="Local Community"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
          <img
            src={founderImage}
            alt="Founders"
            className="rounded-lg shadow-md object-cover h-48 w-full"
          />
        </div>

        {/* Section: Partnering with Us */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2F5233] font-serif mb-6 text-center">
          Partnering with Us
        </h2>
        <p className="text-base sm:text-lg text-[#6B4F4F] font-sans leading-relaxed mb-8 text-center max-w-4xl mx-auto">
          Are you looking for a long-term supplier of coconut and coir products?
          Then you've reached the right place. Each one of us in our team is
          working to turn coconut and its husks into valuable food and farming
          products.
          <br />
          <br />
          At Poyscoco, we ensure market-leading superior product quality and
          supply the product with a quick turnaround time using advanced
          manufacturing processes. We ensure fair trade with all our
          stakeholders.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#2F5233] text-white text-lg font-sans rounded-lg hover:bg-[#1E3B2B] transition duration-300"
          >
            Get in Touch with Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
