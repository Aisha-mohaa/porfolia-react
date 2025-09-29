import { NavLink } from "react-router-dom";
import imag from "./image.png";
import image from "./image copy.png";

function Last() {
  return (
    <>
      {/* Navbar */}
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
            <span className="text-red-500 text-2xl font-bold">Full Stack Developer</span>.
            <br />
            I build modern, responsive, and powerful web applications from front to back.
            <br />
            Let's explore my work and grow together in this digital world.
          </h3>
          <button className="bg-red-400 px-6 py-3 rounded-lg mt-4 text-white hover:bg-red-500 transition duration-300">
            Let's Explore
          </button>
        </div>
        <div>
          <img className="w-72 h-72 rounded-full border-4 border-blue-300 shadow-lg" src={image} alt="Aisha" />
        </div>
      </div>

      {/* Fullstack & Cybersecurity Section */}
      <div className="w-[60%] p-6 bg-white rounded-2xl shadow-xl mx-auto mt-10 hover:shadow-2xl transition duration-500">
        <img className="w-72 h-72 rounded-full mx-auto border-4 border-blue-200 shadow-md" src={imag} alt="Aisha" />
        <div className="mt-6 text-gray-700 leading-relaxed space-y-3">
          <p>
            While my current focus is on <span className="font-bold">Fullstack Development</span>, my vision for the future is to specialize in <span className="font-bold">Cybersecurity</span>. I aspire to protect digital systems, networks, and data from threats, ensuring safe and reliable technology for everyone.
          </p>
          <p>
            Here’s what I plan to achieve in my <span className="font-bold">Cybersecurity journey</span>:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Learn advanced <span className="font-bold">network security</span> concepts.</li>
            <li>Gain expertise in <span className="font-bold">ethical hacking</span> and penetration testing.</li>
            <li>Master tools like <span className="font-bold">Wireshark, Kali Linux, and Metasploit</span>.</li>
            <li>Understand and implement <span className="font-bold">data protection and encryption</span>.</li>
            <li>Work on real-world projects to prevent cyber attacks and vulnerabilities.</li>
            <li>Obtain certifications such as <span className="font-bold">CEH</span> and <span className="font-bold">CISSP</span>.</li>
          </ul>
          <p>
            My goal is to become a <span className="font-bold">Cybersecurity expert</span>, safeguarding systems and contributing to a safer digital world. I am committed to continuous learning and growth to achieve excellence in this field.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sky-300 p-12 text-white py-8 mt-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold mb-1">Portfolio</h1>
            <p className="text-sm text-gray-200">Design</p>
          </div>

          <div className="flex gap-5 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a>
          </div>

          <div className="text-sm text-gray-200 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Aisha | All Rights Reserved</p>
            <a href="mailto:aishamohamedd81@gmail.com" className="text-blue-400 hover:underline">
              aishamohamedd81@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Last;
