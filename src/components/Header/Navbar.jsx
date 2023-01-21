import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <nav className="z-50 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="xl:container flex flex-wrap items-center justify-between mx-auto bg-slate-100 rounded-2xl">
        <Link to="/" className="flex items-center">
          <img src={Logo} className="h-6 mr-3 sm:h-9 px-4" alt="company Logo" />
        </Link>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between hidden  ">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 sm:mx-4">
            <Link
              to="https://www.facebook.com/Capjini?mibextid=ZbWKwL"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <FaFacebook />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="https://instagram.com/capjinitechnologies?igshid=ZDdkNTZiNTM="
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              to="https://www.linkedin.com/company/capjini-technologies-pvt-ltd/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <FaLinkedinIn />
              <span className="sr-only">Linkedin page</span>
            </Link>
            <Link
              to="https://youtube.com/@capjinitechnologies3993"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl"
            >
              <FaYoutube />
              <span className="sr-only">Youtube page</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
