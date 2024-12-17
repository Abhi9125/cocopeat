import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const iconAnimation = {
    whileHover: { scale: 1.1, color: "#fff" },
    transition: { duration: 0.3 },
  };

  return (
    <footer className="bg-[#2F5233] text-[#F5F1E0] py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6">
        {/* Locate Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
            Locate us
          </h3>
          <p className="font-sans">
            <span className="font-semibold">Address:</span> No.3, M.K.P Nagar,
            K.M. Pattanam, Pollachi, Coimbatore, India-642114.
          </p>
          <p className="flex items-center mt-3 font-sans">
            <FaPhoneAlt className="mr-2 text-[#A8BDA1]" /> +91-9842455534
          </p>
          <p className="flex items-center mt-3 font-sans">
            <FaEnvelope className="mr-2 text-[#A8BDA1]" />{" "}
            <a href="mailto:welcome@poyscoco.com" className="hover:underline">
              welcome@poyscoco.com
            </a>
          </p>
          <p className="flex items-center mt-3 font-sans">
            <FaEnvelope className="mr-2 text-[#A8BDA1]" />{" "}
            <a href="mailto:suresh@poyscoco.com" className="hover:underline">
              suresh@poyscoco.com
            </a>
          </p>
        </motion.div>

        {/* Explore Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
            Explore
          </h3>
          <ul className="space-y-3 font-sans">
            {["Home", "Products", "Resources", "About", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-[#A8BDA1] hover:underline transition duration-200"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
            About Us
          </h3>
          <p className="mb-4 font-sans">
            Poyscoco provides high-quality, eco-friendly coco peat products,
            supporting sustainable agriculture and horticulture.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: FaTwitter, href: "#" },
              { icon: FaWhatsapp, href: "#" },
              { icon: FaFacebook, href: "#" },
              { icon: FaGoogle, href: "#" },
              { icon: FaInstagram, href: "#" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-[#A8BDA1] transition"
                whileHover={iconAnimation.whileHover}
                aria-label={`Visit ${item.icon.name}`}
              >
                <item.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="text-center text-sm mt-10 border-t border-[#6B4F4F] pt-4 font-sans"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          <a href="#" className="text-[#A8BDA1] font-semibold hover:underline">
            Poyscoco
          </a>{" "}
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
