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
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import QrCode from "../Images/Web_Images/qr-code.png";

// const Footer = () => {
//   const iconAnimation = {
//     whileHover: { scale: 1.1, color: "#fff" },
//     transition: { duration: 0.3 },
//   };

//   return (
//     <footer className="bg-[#2F5233] text-[#F5F1E0] py-10">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6">
//         {/* Locate Us Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center text-center"
//         >
//           <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
//             Scan to Locate Us
//           </h3>
//           <img
//             src={QrCode}
//             alt="QR Code to locate us"
//             className="w-40 h-40 rounded-lg shadow-lg"
//           />
//           <p className="text-sm text-[#A8BDA1] mt-4">
//             Scan the QR code to find us on the map.
//           </p>
//         </motion.div>

//         {/* Explore Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
//             Explore
//           </h3>
//           <ul className="space-y-3 font-sans">
//             {["Home", "Product", "Resources", "About", "Contact"].map(
//               (item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={`/${item.toLowerCase()}`}
//                     className="hover:text-[#A8BDA1] hover:underline transition duration-200"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//         </motion.div>

//         {/* About Us Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
//             About Us
//           </h3>
//           <p className="mb-4 font-sans">
//             Poyscoco provides high-quality, eco-friendly coco peat products,
//             supporting sustainable agriculture and horticulture.
//           </p>
//           <div className="flex justify-center space-x-4">
//             {[
//               { icon: FaTwitter, href: "#" },
//               { icon: FaWhatsapp, href: "#" },
//               { icon: FaFacebook, href: "#" },
//               { icon: FaGoogle, href: "#" },
//               { icon: FaInstagram, href: "#" },
//             ].map((item, index) => (
//               <motion.a
//                 key={index}
//                 href={item.href}
//                 className="text-[#A8BDA1] transition"
//                 whileHover={iconAnimation.whileHover}
//                 aria-label={`Visit ${item.icon.name}`}
//               >
//                 <item.icon size={24} />
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Section */}
//       <motion.div
//         className="text-center text-sm mt-10 border-t border-[#6B4F4F] pt-4 font-sans"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <p>
//           <a href="#" className="text-[#A8BDA1] font-semibold hover:underline">
//             Poyscoco
//           </a>{" "}
//           © {new Date().getFullYear()} All Rights Reserved
//         </p>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";
import QrCode from "../Images/Web_Images/qr-code.png";

const Footer = () => {
  const iconAnimation = {
    whileHover: { scale: 1.2, color: "#F5F1E0" },
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
          className="flex flex-col items-center text-center"
        >
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
            Scan to Locate Us
          </h3>
          <img
            src={QrCode}
            alt="QR Code to find Poyscoco on the map"
            className="w-40 h-40 rounded-lg shadow-lg"
            loading="lazy"
          />
          <p className="text-sm text-[#A8BDA1] mt-4">
            Scan the QR code to find us on the map.
          </p>
        </motion.div>

        {/* Explore Section */}
        <motion.nav
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          aria-label="Explore navigation"
        >
          <h3 className="text-[#A8BDA1] text-xl font-bold mb-4 font-serif">
            Explore
          </h3>
          <ul className="space-y-3 font-sans">
            {["Home", "Product", "Resources", "About", "Contact"].map(
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
        </motion.nav>

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
          <div className="flex justify-center space-x-4">
            {[
              {
                icon: FaTwitter,
                href: "https://twitter.com",
                label: "Twitter",
              },
              {
                icon: FaWhatsapp,
                href: "https://wa.me/91-9842455534",
                label: "WhatsApp",
              },
              {
                icon: FaFacebook,
                href: "https://facebook.com",
                label: "Facebook",
              },
              { icon: FaGoogle, href: "https://google.com", label: "Google" },
              {
                icon: FaInstagram,
                href: "https://instagram.com",
                label: "Instagram",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8BDA1] transition"
                whileHover={iconAnimation.whileHover}
                aria-label={`Visit Poyscoco on ${item.label}`}
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
