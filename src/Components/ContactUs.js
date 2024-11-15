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
import Breadcrumb from "./Breadcrumb";

const ContactUs = () => {
  return (
    <div>
      <Breadcrumb />
      <section className="p-10 bg-[#F5F1E0] flex flex-col md:flex-row justify-around">
        {/* Contact Information */}
        <div className="md:w-1/2 space-y-4 text-[#2F5233]">
          <h2 className="text-2xl font-semibold">Administrative Office</h2>
          <p className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>Campany Address</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>+91-</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaWhatsapp />
            <span>+91-</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaEnvelope />
            <span>email</span>
          </p>

          <h3 className="text-lg font-semibold">Opening Hours</h3>
          <p>Monday - Saturday: 9:00 - 18:00</p>
          <p>Sunday: CLOSED</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 text-[#2F5233]">
            <a href="#" className="text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl">
              <FaGoogle />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 mt-10 md:mt-0 bg-[#FFFFFF] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#2F5233] mb-6 text-center">
            Online Enquiry Form
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
            />
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
            />
            <input
              type="text"
              placeholder="Phone/Mobile"
              className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
            />
            <textarea
              placeholder="Enquiry"
              className="w-full border border-[#A8BDA1] rounded-lg p-2 focus:outline-none focus:border-[#2F5233]"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#2F5233] text-white py-2 rounded-lg hover:bg-[#1E3B2B] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
