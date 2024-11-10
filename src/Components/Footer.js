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
//     <footer className="bg-gray-800 text-white py-10">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
//         {/* Locate Us Section */}
//         <div>
//           <h3 className="text-green-400 text-xl font-bold mb-4">Locate us</h3>
//           <p className="text-gray-400">
//             <span className="font-semibold">Address:</span> 108, Railway Road,
//             Tenkasi, Tamilnadu - 627811, INDIA.
//           </p>
//           <p className="flex items-center mt-3 text-gray-400">
//             <FaPhoneAlt className="mr-2 text-green-400" /> +91-4633-222336
//           </p>
//           <p className="flex items-center mt-3 text-gray-400">
//             <FaWhatsapp className="mr-2 text-green-400" /> +91-89400 16565
//           </p>
//           <p className="flex items-center mt-3 text-gray-400">
//             <FaEnvelope className="mr-2 text-green-400" />{" "}
//             sriram@sriramcocopeat.com
//           </p>
//         </div>

//         {/* Explore Section */}
//         <div>
//           <h3 className="text-green-400 text-xl font-bold mb-4">Explore</h3>
//           <ul className="space-y-3 text-gray-400">
//             <li>Home</li>
//             <li>Company</li>
//             <li>Manufacturing</li>
//             <li>FAQ</li>
//             <li>Contact info</li>
//           </ul>
//         </div>

//         {/* About Us Section */}
//         <div>
//           <h3 className="text-green-400 text-xl font-bold mb-4">About Us</h3>
//           <p className="text-gray-400 mb-4">
//             Sriram Group, the leading exporters of Coco Peat in India offers a
//             wide range of coco peat products.
//           </p>
//           <div className="flex space-x-4">
//             <a href="#" className="text-green-400">
//               <FaTwitter size={24} />
//             </a>
//             <a href="#" className="text-green-400">
//               <FaFacebook size={24} />
//             </a>
//             <a href="#" className="text-green-400">
//               <FaInstagram size={24} />
//             </a>
//             <a href="#" className="text-green-400">
//               <FaGoogle size={24} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
//         <p>
//           <a href="#" className="text-green-400 font-semibold">
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

const Footer = () => {
  return (
    <footer className="bg-[#2F5233] text-[#F5F1E0] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        <div>
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4">Locate us</h3>
          <p>
            <span className="font-semibold">Address:</span> 108, Railway Road,
            Tenkasi, Tamilnadu - 627811, INDIA.
          </p>
          <p className="flex items-center mt-3">
            <FaPhoneAlt className="mr-2 text-[#A8BDA1]" /> +91-4633-222336
          </p>
          <p className="flex items-center mt-3">
            <FaWhatsapp className="mr-2 text-[#A8BDA1]" /> +91-89400 16565
          </p>
          <p className="flex items-center mt-3">
            <FaEnvelope className="mr-2 text-[#A8BDA1]" />{" "}
            sriram@sriramcocopeat.com
          </p>
        </div>
        <div>
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4">Explore</h3>
          <ul className="space-y-3">
            <li>Home</li>
            <li>Company</li>
            <li>Manufacturing</li>
            <li>FAQ</li>
            <li>Contact info</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4">About Us</h3>
          <p className="mb-4">
            Sriram Group offers a wide range of eco-friendly coco peat products.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#A8BDA1]">
              <FaTwitter size={24} />
            </a>
            {/* Social Media Links */}
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t border-[#6B4F4F] pt-4">
        <p>
          <a href="#" className="text-[#A8BDA1] font-semibold">
            Sriramcocopeat
          </a>{" "}
          © 2022 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
