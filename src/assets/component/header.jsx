import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Img from "./events";
import img from "./isha.png";
import imag from "./testimo.jpg";
import axios from "axios";
import Skills from "./events";

import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="sm:flex bg-sky-500 pl-10 justify-between py-6 items-center">
        <h1 className="text-white text-2xl font-bold">Portfolio</h1>

        <ul className="flex gap-8 mr-10 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-white hover:text-blue-200 transition-colors duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-white hover:text-blue-200 transition-colors duration-300"
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-white hover:text-blue-200 transition-colors duration-300"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-white hover:text-blue-200 transition-colors duration-300"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold border-b-2 border-blue-600"
                  : "text-white hover:text-blue-200 transition-colors duration-300"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 pt-16 px-5 bg-gradient-to-br from-white to-gray-100">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hey there! Welcome to my portfolio
          </h1>
          <h3 className="text-lg text-gray-700 leading-relaxed">
            I'm <span className="font-semibold text-black">Aisha</span>, a passionate{" "}
            <span className="text-blue-600 font-semibold">3rd-year Computer Science student</span> at SNU university.
            <br />
            With strong dedication to technology and problem solving, I specialize as a{" "}
            <span className="text-blue-500 text-2xl font-bold">Full Stack Developer</span>.
            <br />
            I build modern, responsive, and powerful web applications from front to back.
            <br />
            Let's explore my work and grow together in this digital world.
          </h3>

          {/* Button + Social Media */}
          <div className="mt-6 flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-400 px-6 py-3 rounded-lg text-white font-semibold shadow-lg hover:bg-sky-500 transition"
            >
              Let's Talk
            </motion.button>

            {/* Social Media Icons */}
            <div className="flex gap-4 text-3xl pb-3  text-gray-700">
              <a href="https://wa.me/252619569961" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div>
          <img className="w-72 h-72 rounded-full" src={img} alt="" />
        </div>
      </div>

      {/* Remaining Sections */}
      <h1 className="text-3xl mt-6 font-bold font-serif pl-3">my projects</h1>
      <div className="sm:flex bg-gray-200 gap-6 ml-5 mr-5 mt-10 mb-5 py-4 space-y-2">
        <div className="grid grid-cols-3"></div>
      </div>

      <div>
        <Skills />
      </div>

      <div className="sm:flex justify-around mt-12 pt-3 items-center pl-5 pr-2 bg-gradient-to-br from-white to-gray-100">
        <div className="max-w-xl"></div>
        <div>
          <img className="w-72 h-72 rounded-full" src={imag} alt="" />
        </div>
        <div className="">
          <h1 className="text-2xl">Testimolia</h1>
          <h1>
            Working with Aisha was a game changer. Her attention to detail and dedication truly exceeded my expectations.
            <br /> I would highly recommend her to anyone looking for professional and creative work!
          </h1>

          <p className="text-red-500">lets work .</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📞 Contact Me</h1>

        <div className="mb-6 space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-xl">📧</span>
            <a href="mailto:aishamohamedd81@gmail.com" className="text-blue-600 hover:underline text-lg">
              aishamohamedd81@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xl">📞</span>
            <a
              href="https://wa.me/252619569961"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline text-lg"
            >
              WhatsApp Number
            </a>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Your Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
     <footer className="bg-sky-700 text-white py-10">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Brand / Portfolio */}
    <div className="text-center md:text-left">
      <h1 className="text-2xl font-bold mb-1">Portfolio</h1>
      <p className="text-gray-200 text-sm">Design & Development by Aisha</p>
    </div>

    {/* Social Media */}
    <div className="flex gap-6 text-xl">
      <a href="https://wa.me/252619569961" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
        <FaWhatsapp />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
        <FaFacebookF />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
        <FaLinkedinIn />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
        <FaTwitter />
      </a>
    </div>

    {/* Contact / Copyright */}
    <div className="text-center md:text-right text-sm text-gray-200">
      <p>&copy; {new Date().getFullYear()} Aisha | All Rights Reserved</p>
      <a href="mailto:aishamohamedd81@gmail.com" className="text-blue-300 hover:underline">
        aishamohamedd81@gmail.com
      </a>
    </div>

  </div>
</footer>

    </>
  );
}

export default Header;
