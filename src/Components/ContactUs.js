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
// import Breadcrumb from "./Breadcrumb";

// const ContactUs = () => {
//   return (
//     <div>
//       <Breadcrumb />
//       <section className="p-10 bg-[#F5F1E0] flex flex-col md:flex-row justify-around">
//         {/* Contact Information */}
//         <div className="md:w-1/2 space-y-4 text-[#2F5233]">
//           <h2 className="text-2xl font-semibold">Administrative Office</h2>
//           <p className="flex items-center space-x-2">
//             <FaMapMarkerAlt />
//             <span>Campany Address</span>
//           </p>
//           <p className="flex items-center space-x-2">
//             <FaPhoneAlt />
//             <span>+91-</span>
//           </p>
//           <p className="flex items-center space-x-2">
//             <FaWhatsapp />
//             <span>+91-</span>
//           </p>
//           <p className="flex items-center space-x-2">
//             <FaEnvelope />
//             <span>email</span>
//           </p>

//           <h3 className="text-lg font-semibold">Opening Hours</h3>
//           <p>Monday - Saturday: 9:00 - 18:00</p>
//           <p>Sunday: CLOSED</p>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4 mt-4 text-[#2F5233]">
//             <a href="#" className="text-2xl">
//               <FaFacebook />
//             </a>
//             <a href="#" className="text-2xl">
//               <FaTwitter />
//             </a>
//             <a href="#" className="text-2xl">
//               <FaInstagram />
//             </a>
//             <a href="#" className="text-2xl">
//               <FaGoogle />
//             </a>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="md:w-1/2 mt-10 md:mt-0 bg-[#FFFFFF] p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-[#2F5233] mb-6 text-center">
//             Online Enquiry Form
//           </h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
//             />
//             <input
//               type="text"
//               placeholder="Company Name"
//               className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
//             />
//             <input
//               type="text"
//               placeholder="City"
//               className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
//             />
//             <input
//               type="text"
//               placeholder="Country"
//               className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
//             />
//             <input
//               type="text"
//               placeholder="Phone/Mobile"
//               className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
//             />
//             <textarea
//               placeholder="Enquiry"
//               className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
//               rows="4"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-[#2F5233] text-white py-2 rounded-lg hover:bg-[#1E3B2B] transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
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

const ContactUs = () => {
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
          <span className="font-semibold">ContactUs</span>
        </nav>
      </div>
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6 mt-5 text-[#2F5233]">
          <h2 className="text-4xl font-bold font-serif mb-6">Contact Us</h2>
          <p className="text-lg font-sans leading-relaxed">
            We're here to assist you! Reach out to us via phone, email, or visit
            our administrative office for more information about our products
            and services.
          </p>
          <div className="space-y-4">
            <p className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-xl" />
              <span>Company Address</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaPhoneAlt className="text-xl" />
              <span>+91-XXXXXXXXXX</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaWhatsapp className="text-xl" />
              <span>+91-XXXXXXXXXX</span>
            </p>
            <p className="flex items-center space-x-3">
              <FaEnvelope className="text-xl" />
              <span>email@example.com</span>
            </p>
          </div>

          <h3 className="text-2xl font-semibold font-serif mt-6">
            Opening Hours
          </h3>
          <p className="font-sans">Monday - Saturday: 9:00 AM - 6:00 PM</p>
          <p className="font-sans">Sunday: CLOSED</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 text-[#2F5233]">
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
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#FFFFFF] p-8 mt-5 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-[#2F5233] font-serif mb-6 text-center">
            Online Enquiry Form
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
            />
            <input
              type="text"
              placeholder="Phone/Mobile"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
            />
            <textarea
              placeholder="Enquiry"
              className="w-full border border-[#A8BDA1] rounded-lg p-3 focus:outline-none focus:border-[#2F5233] font-sans"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#2F5233] text-white py-3 rounded-lg font-sans hover:bg-[#1E3B2B] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
