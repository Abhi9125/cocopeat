import React from "react";
import { Link, useLocation } from "react-router-dom";
import Banner1 from "../Images/banner-1.jpg";
const Breadcrumb = () => {
  const location = useLocation();

  // Split the path into individual parts
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="relative py-8 px-6 h-72">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${Banner1})` }}
      ></div>

      {/* Breadcrumb Content */}
      <div className="relative container mx-auto text-white">
        <h2 className="text-3xl font-bold mb-2 capitalize">
          {pathnames.length ? pathnames[pathnames.length - 1] : "Home"}
        </h2>
        <nav>
          <ol className="flex items-center space-x-2 text-[#a8bda1]">
            <li>
              <Link
                to="/"
                className="hover:underline text-white font-extrabold"
              >
                Home
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              return (
                <li key={to} className="flex items-center space-x-2">
                  <span className="text-white">›</span>
                  {isLast ? (
                    <span className="text-white capitalize">{value}</span>
                  ) : (
                    <Link to={to} className="hover:underline capitalize">
                      {value}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
