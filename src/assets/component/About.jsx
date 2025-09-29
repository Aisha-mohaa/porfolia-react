import { NavLink } from "react-router-dom"
import imag from "./testimo.jpg"
import Skills from "./events"


function About(){
    return <>

          <div className="sm:flex bg-sky-500 pl-10 justify-between py-6 items-center">
        <h1 className="text-white text-2xl font-bold">Portfolio</h1>

        <ul className="flex gap-8 mr-10 text-lg font-medium">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) =>isActive ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-white hover:text-blue-200 transition-colors duration-300"}>Home</NavLink>
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
          <li><NavLink to="/Blog" className={({ isActive }) =>isActive ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-white hover:text-blue-200 transition-colors duration-300"}>Blog</NavLink></li>

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
    <div className="flex flex-col md:flex-row items-center justify-around gap-10 pt-16 px-5 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
           About me
        </h1>
        <h3 className="text-lg text-gray-700 leading-relaxed">
          I'm <span className="font-semibold text-black">Aisha</span>, a passionate 
          <span className="text-blue-600 font-semibold"> 3rd-year Computer Science student</span> at SNU university.
          <br />
          With strong dedication to technology and problem solving, I specialize as a 
          <span className="text-red-500 text-2xl font-bold"> Full Stack Developer</span>.
          <br />
          I build modern, responsive, and powerful web applications from front to back.
          <br />
          Let's explore my work and grow together in this digital world.
        </h3>
        <button className="bg-red-400 px-6 py-3 rounded-lg mt-1 text-white ">lets explore</button>
      </div>
        <div>
            <img className="w-72 h-72 rounded-full" src={imag} alt="" />
        </div>
    
       </div>

      <Skills/>
     <div className="sm:flex bg-white  gap-6 ml-2 mr-5 mt-10 mb-5 py-4 space-y-2">

    <div className="hover:bg-red-400 w-full md:w-1/3 text-black rounded-lg p-4 px-4 shadow-lg ml-4 transition duration-300 hover:text-white hover:scale-105 cursor-pointer">
      <h1 className="text-3xl font-bold mb-4">Look my<br /> Projects</h1>
      <p className="text-lg font-light leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ut possimus autem tempore necessitatibus. Assumenda, non libero at aliquam excepturi
        eveniet recusandae voluptates ipsum obcaecati molestiae facilis. Distinctio, optio! Iste, quibusdam!
      </p>
      <a href="https://aisha-mohaa.github.io/resturent-website/"
       target="_blank"
      rel="noopener noreferrer"
     className="text-blue-600 underline font-semibold hover:text-red-500">one of my project <br /> <span className="text-xl">Resturent website</span></a>
    </div>
    <div className="hover:bg-red-400 w-full md:w-1/4 text-black rounded-lg px-12 py-3  shadow-lg ml-4 transition duration-300 hover:text-white hover:scale-105 cursor-pointer">
      <h1 className="text-3xl font-bold mb-4">Look my<br /> Projects</h1>
      <p className="text-lg font-light leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ut possimus autem tempore necessitatibus. Assumenda, non libero at aliquam excepturi
      </p>
      <a href="https://aisha-mohaa.github.io/h/"
       target="_blank"
      rel="noopener noreferrer"
     className="text-blue-600 underline font-semibold hover:text-red-500">one of my project <br /> <span className="text-xl">Hospital website</span></a>
    </div>
    <div className="hover:bg-red-400 w-full md:w-1/4 text-black rounded-lg px-12 py-3  shadow-lg ml-4 transition duration-300 hover:text-white hover:scale-105 cursor-pointer">
      <h1 className="text-3xl font-bold mb-4">look my<br /> Projects</h1>
      <p className="text-lg font-light leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ut possimus autem tempore necessitatibus. Assumenda, non libero at aliquam excepturi
      </p>
      <a href="https://aisha-mohaa.github.io/calculator/"
       target="_blank"
      rel="noopener noreferrer"
     className="text-blue-600 underline font-semibold hover:text-red-500">Calcultor project <br /> <span className="text-xl">Calculator</span></a>
    </div>
    <div className="hover:bg-red-400 w-full md:w-1/4 text-black rounded-lg px-12 py-3 shadow-lg ml-4 transition duration-300 hover:text-white hover:scale-105 cursor-pointer">
      <h1 className="text-3xl font-bold mb-4">Look my <br /> Projects</h1>
      <p className="text-lg font-light leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ut possimus autem tempore necessitatibus. Assumenda, non libero at aliquam excepturi
      </p>
      <a href="https://aisha-mohaa.github.io/calculator/"
       target="_blank"
      rel="noopener noreferrer"
     className="text-blue-600 underline font-semibold hover:text-red-500">Calcultor project <br /> <span className="text-xl">Calculator</span></a>
    </div>
   </div>

        
      <footer className="bg-sky-400 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-1">Portfolio</h1>
          <p className="text-sm text-gray-400">designn</p>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>&copy; Aisha | All Rights Reserved</p>
          <a
            href="mailto:aishamohamedd81@gmail.com"
            className="text-blue-400 hover:underline"
          >
            aishamohamedd81@gmail.com
          </a>
        </div>
      </div>
    </footer>
        
    </>
}

export default About