// import React from "react";
// import {
//   FaPhoneAlt,
//   FaWhatsapp,
//   FaEnvelope,
//   FaTwitter,
//   FaFacebook,
//   FaInstagram,
//   FaGoogle,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#2F5233] text-[#F5F1E0] py-10">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6">
//         {/* Locate Us Section */}
//         <div>
//           <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
//             Locate us
//           </h3>
//           <p className="font-sans">
//             <span className="font-semibold">Address:</span> 108, Railway Road,
//             Tenkasi, Tamil Nadu, INDIA.
//           </p>
//           <p className="flex items-center mt-3 font-sans">
//             <FaPhoneAlt className="mr-2 text-[#A8BDA1]" /> +91-4633-222336
//           </p>
//           <p className="flex items-center mt-3 font-sans">
//             <FaWhatsapp className="mr-2 text-[#A8BDA1]" /> +91-89400 16565
//           </p>
//           <p className="flex items-center mt-3 font-sans">
//             <FaEnvelope className="mr-2 text-[#A8BDA1]" />{" "}
//             sriram@sriramcocopeat.com
//           </p>
//         </div>

//         {/* Explore Section */}
//         <div>
//           <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
//             Explore
//           </h3>
//           <ul className="space-y-3 font-sans">
//             <li>Home</li>
//             <li>Company</li>
//             <li>Manufacturing</li>
//             <li>FAQ</li>
//             <li>Contact Info</li>
//           </ul>
//         </div>

//         {/* About Us Section */}
//         <div>
//           <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
//             About Us
//           </h3>
//           <p className="mb-4 font-sans">
//             Sriram Group offers a wide range of eco-friendly coco peat products.
//           </p>
//           <div className="flex space-x-4">
//             <a href="#" className="text-[#A8BDA1]">
//               <FaTwitter size={24} />
//             </a>
//             <a href="#" className="text-[#A8BDA1]">
//               <FaWhatsapp size={24} />
//             </a>
//             <a href="#" className="text-[#A8BDA1]">
//               <FaFacebook size={24} />
//             </a>
//             <a href="#" className="text-[#A8BDA1]">
//               <FaGoogle size={24} />
//             </a>
//             <a href="#" className="text-[#A8BDA1]">
//               <FaPhoneAlt size={24} />
//             </a>
//             <a href="#" className="text-[#A8BDA1]">
//               <FaInstagram size={24} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="text-center text-sm mt-10 border-t border-[#6B4F4F] pt-4 font-sans">
//         <p>
//           <a href="#" className="text-[#A8BDA1] font-semibold">
//             Sriramcocopeat
//           </a>{" "}
//           © 2022 All Rights Reserved
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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

const Footer = () => {
  return (
    <footer className="bg-[#2F5233] text-[#F5F1E0] py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6">
        {/* Locate Us Section */}
        <div>
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
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
            Explore
          </h3>
          <ul className="space-y-3 font-sans">
            <li>
              <Link
                to="/"
                className="hover:text-[#A8BDA1] hover:underline transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-[#A8BDA1] hover:underline transition duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="hover:text-[#A8BDA1] hover:underline transition duration-200"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-[#A8BDA1] hover:underline transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#A8BDA1] hover:underline transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
            About Us
          </h3>
          <p className="mb-4 font-sans">
            Poyscoco provides high-quality, eco-friendly coco peat products,
            supporting sustainable agriculture and horticulture.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#A8BDA1] hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-[#A8BDA1] hover:text-white transition">
              <FaWhatsapp size={24} />
            </a>
            <a href="#" className="text-[#A8BDA1] hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-[#A8BDA1] hover:text-white transition">
              <FaGoogle size={24} />
            </a>
            <a href="#" className="text-[#A8BDA1] hover:text-white transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-10 border-t border-[#6B4F4F] pt-4 font-sans">
        <p>
          <a href="#" className="text-[#A8BDA1] font-semibold">
            Poyscoco
          </a>{" "}
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
