// import React, { useState } from "react";
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
// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase"; // Import Firestore reference
// import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";
// import qrCode from "../Images/Web_Images/qr-code.png";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     country: "",
//     phone: "",
//     email: "",
//     enquiry: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       await addDoc(collection(db, "enquiries"), formData);
//       setSuccessMessage("Thank you! Your enquiry has been submitted.");
//       setFormData({
//         name: "",
//         country: "",
//         phone: "",
//         email: "",
//         enquiry: "",
//       });
//     } catch (error) {
//       console.error("Error submitting enquiry: ", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-white min-h-screen">
//       {/* Breadcrumb Section */}
//       <motion.div
//         className="bg-cover bg-center h-44 flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${bannerImage})`,
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <motion.nav
//           className="text-sm text-white pt-10"
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
//           <p className="text-base sm:text-xl font-sans leading-relaxed">
//             We are glad to welcome you! It’s our pleasure to have the
//             opportunity to connect with you and assist you. Our team is here to
//             ensure that your experience with us is seamless and delightful.
//             Please don’t hesitate to reach out—we’re just a call, message, or
//             visit away!
//           </p>
//           <div className="space-y-4">
//             <p className="flex items-center space-x-3">
//               <FaPhoneAlt className="text-xl" />
//               <span>+91-9842455534</span>
//             </p>
//             <p className="flex items-center space-x-3">
//               <FaEnvelope className="text-xl" />
//               <span>welcome@poyscoco.com</span>
//             </p>
//             <p className="flex items-center space-x-3">
//               <FaMapMarkerAlt className="text-xl" />
//               {/* <span>
//                 No.3, M.K.P Nagar, K.M. Pattanam, Pollachi, Coimbatore,
//                 India-642114.
//               </span> */}
//               <img src={qrCode} alt="Qrcode" />
//             </p>
//           </div>

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
//             Drop Us a Note
//           </h2>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {successMessage && (
//               <p className="text-green-600 font-semibold text-center">
//                 {successMessage}
//               </p>
//             )}
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//             />
//             {/* <input
//               type="text"
//               name="companyName"
//               placeholder="Company Name"
//               value={formData.companyName}
//               onChange={handleChange}
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//             /> */}
//             {/* <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//             /> */}
//             <input
//               type="text"
//               name="country"
//               placeholder="Country"
//               value={formData.country}
//               onChange={handleChange}
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone/Mobile"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//             />
//             <textarea
//               name="enquiry"
//               placeholder="Enquiry"
//               value={formData.enquiry}
//               onChange={handleChange}
//               className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
//               rows="4"
//             ></textarea>
//             <button
//               type="submit"
//               className={`w-full bg-[#2F5233] text-white py-3 rounded-lg font-sans ${
//                 isSubmitting
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-[#1E3B2B] transition duration-300"
//               }`}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//           </form>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
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
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase"; // Firestore reference
import bannerImage from "../Images/Web_Images/product_sub_banner.jpg";
import qrCode from "../Images/Web_Images/qr-code.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    enquiry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "enquiries"), formData);
      setSuccessMessage("Thank you! Your enquiry has been submitted.");
      setFormData({
        name: "",
        country: "",
        phone: "",
        email: "",
        enquiry: "",
      });
    } catch (error) {
      console.error("Error submitting enquiry: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner / Breadcrumb Section */}
      <motion.div
        className="relative h-60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={bannerImage}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.nav
          className="relative z-10 text-white text-lg font-medium flex items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="hover:underline font-sans">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="font-semibold">Contact Us</span>
        </motion.nav>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-green-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            We are delighted to connect with you! Our team is here to ensure
            your experience is seamless and delightful. Please reach out by
            call, message, or visit—we’re here for you.
          </p>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-xl" />
              {/* Address replaced by QR Code as per customer request */}
              <img src={qrCode} alt="QR Code" className="w-12 h-12" />
            </p>
            <p className="flex items-center space-x-3">
              <FaPhoneAlt className="text-xl" />
              <span className="font-sans">+91-9842455534</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <span className="font-sans">welcome@poyscoco.com</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <motion.div
            className="flex space-x-4 mt-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-2xl hover:text-green-900">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-green-900">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-green-900">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-green-900">
              <FaGoogle />
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-green-800 mb-6 text-center">
            Drop Us a Note
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {successMessage && (
              <p className="text-green-600 font-semibold text-center">
                {successMessage}
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-800 font-sans"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-800 font-sans"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone/Mobile"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-800 font-sans"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-800 font-sans"
            />
            <textarea
              name="enquiry"
              placeholder="Enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full border border-green-200 rounded-lg p-3 focus:outline-none focus:border-green-800 font-sans"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className={`w-full bg-green-800 text-white py-3 rounded-lg font-sans ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-900 transition duration-300"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
