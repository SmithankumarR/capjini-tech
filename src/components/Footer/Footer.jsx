import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="p-4 bg-slate-100 sm:p-6 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3 px-4" alt="Logo" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help & Support
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/about" className="hover:underline ">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2020{" "}
          <Link to="/" className="hover:underline">
            CAPJINI™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/Capjini?mibextid=ZbWKwL"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
          >
            <FaFacebook />
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://instagram.com/capjinitechnologies?igshid=ZDdkNTZiNTM="
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
          >
            <FaInstagram />
            <span className="sr-only">Instagram page</span>
          </a>
          <a
            href="https://www.linkedin.com/company/capjini-technologies-pvt-ltd/"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
          >
            <FaLinkedinIn />
            <span className="sr-only">Linkedin page</span>
          </a>
          <a
            href="https://youtube.com/@capjinitechnologies3993"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
          >
            <FaYoutube />
            <span className="sr-only">Youtube page</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
