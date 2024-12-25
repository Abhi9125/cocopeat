// import React from "react";
// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaGoogle,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const ContactUs = () => {
//   return (
//     <section className="bg-[#F5F1E0] min-h-screen">
//       {/* Breadcrumb Section */}
//       <motion.div
//         className="bg-cover bg-center h-40 flex items-center justify-center"
//         style={{
//           backgroundImage: `url('https://via.placeholder.com/1200x400?text=Contact Us')`,
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.nav
//           className="text-sm text-white"
//           initial={{ y: -20 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>{" "}
//           <span className="text-white px-2">›</span>
//           <span className="font-semibold">Contact Us</span>
//         </motion.nav>
//       </motion.div>

//       {/* Content Section */}
//       <motion.div
//         className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         {/* Contact Information */}
//         <motion.div
//           className="space-y-6 text-[#2F5233]"
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
//             Contact Us
//           </h2>
//           <p className="text-base sm:text-lg font-sans leading-relaxed">
//             We're here to assist you! Reach out to us via phone, email, or visit
//             our administrative office for more information about our products
//             and services.
//           </p>
//           <div className="space-y-4">
//             <p className="flex items-center space-x-3">
//               <FaMapMarkerAlt className="text-xl" />
//               <span>Company Address, Tamil Nadu, India</span>
//             </p>
//             <p className="flex items-center space-x-3">
//               <FaPhoneAlt className="text-xl" />
//               <span>+91-XXXXXXXXXX</span>
//             </p>
//             <p className="flex items-center space-x-3">
//               <FaWhatsapp className="text-xl" />
//               <span>+91-XXXXXXXXXX</span>
//             </p>
//             <p className="flex items-center space-x-3">
//               <FaEnvelope className="text-xl" />
//               <span>email@example.com</span>
//             </p>
//           </div>

//           <h3 className="text-xl sm:text-2xl font-semibold font-serif mt-6">
//             Opening Hours
//           </h3>
//           <p className="font-sans">Monday - Saturday: 9:00 AM - 6:00 PM</p>
//           <p className="font-sans">Sunday: CLOSED</p>

//           {/* Social Media Icons */}
//           <motion.div
//             className="flex space-x-4 mt-6 text-[#2F5233]"
//             initial={{ scale: 0.8 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <a href="#" className="text-2xl hover:text-[#1E3B2B]">
//               <FaFacebook />
//             </a>
//             <a href="#" className="text-2xl hover:text-[#1E3B2B]">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-2xl hover:text-[#1E3B2B]">
//               <FaInstagram />
//             </a>
//             <a href="#" className="text-2xl hover:text-[#1E3B2B]">
//               <FaGoogle />
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div
//           className="bg-[#FFFFFF] p-6 sm:p-8 rounded-lg shadow-lg"
//           initial={{ x: 50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#2F5233] font-serif mb-6 text-center">
//             Online Enquiry Form
//           </h2>
//           <form className="space-y-6">
//             <motion.input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//             />
//             <motion.input
//               type="text"
//               placeholder="Company Name"
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//             />
//             <motion.input
//               type="text"
//               placeholder="City"
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//             />
//             <motion.input
//               type="text"
//               placeholder="Country"
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//             />
//             <motion.input
//               type="text"
//               placeholder="Phone/Mobile"
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//             />
//             <motion.input
//               type="email"
//               placeholder="Your Email"
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//             />
//             <motion.textarea
//               placeholder="Enquiry"
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               rows="4"
//               initial={{ scale: 0.9 }}
//               whileInView={{ scale: 1 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//             ></motion.textarea>
//             <motion.button
//               type="submit"
//               className="w-full bg-[#2F5233] text-white py-3 rounded-lg font-sans hover:bg-[#1E3B2B] transition duration-300"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               Submit
//             </motion.button>
//           </form>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ContactUs;

import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="bg-[#F5F1E0] min-h-screen">
      {/* Breadcrumb Section */}
      <motion.div
        className="bg-cover bg-center h-40 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1200x400?text=Contact Us')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.nav
          className="text-sm text-white"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="text-white px-2">›</span>
          <span className="font-semibold">Contact Us</span>
        </motion.nav>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Contact Information */}
        <motion.div
          className="space-y-6 text-[#2F5233]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg font-sans leading-relaxed">
            We are glad to welcome you! It’s our pleasure to have the
            opportunity to connect with you and assist you. Our team is here to
            ensure that your experience with us is seamless and delightful.
            Please don’t hesitate to reach out—we’re just a call, message, or
            visit away!
          </p>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-xl" />
              <span>
                No.3, M.K.P Nagar, K.M. Pattanam, Pollachi, Coimbatore,
                India-642114.
              </span>
            </p>
            <p className="flex items-center space-x-3">
              <FaPhoneAlt className="text-xl" />
              <span>+91-9842455534</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <span>welcome@poyscoco.com</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <span>suresh@poyscoco.com=?</span>
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold font-serif mt-6">
            Opening Hours
          </h3>
          <p className="font-sans">Monday - Saturday: 9:00 AM - 6:00 PM</p>
          <p className="font-sans">Sunday: CLOSED</p>

          {/* Social Media Icons */}
          <motion.div
            className="flex space-x-4 mt-6 text-[#2F5233]"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-2xl hover:text-[#1E3B2B]">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-[#1E3B2B]">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-[#1E3B2B]">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-[#1E3B2B]">
              <FaGoogle />
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-[#FFFFFF] p-6 sm:p-8 rounded-lg shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F5233] font-serif mb-6 text-center">
            Online Enquiry Form
          </h2>
          <form className="space-y-6">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.input
              type="text"
              placeholder="Company Name"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.input
              type="text"
              placeholder="City"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.input
              type="text"
              placeholder="Country"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.input
              type="text"
              placeholder="Phone/Mobile"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            />
            <motion.textarea
              placeholder="Enquiry"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              rows="4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-[#2F5233] text-white py-3 rounded-lg font-sans hover:bg-[#1E3B2B] transition duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
