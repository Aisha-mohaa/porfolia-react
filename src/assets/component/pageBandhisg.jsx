import { NavLink } from "react-router-dom"
import imag from "./image.png";
import img from "./isha.png"

function Bage(){
    return <>
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
             Hey there! Welcome to my portfolio
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
              <img className="w-72 h-72 rounded-full" src={img} alt="" />
          </div>
      
         </div>


      <div className="bg-white">
        <div className=" p-5 bg-white rounded-xl shadow-lg mx-auto mt-10">
       <img className="w-96 h-96" src={imag} alt="Aisha" />

  <p className="mt-4 text-gray-700 leading-relaxed">
    My journey as a <span className="font-bold">Fullstack Developer</span> has been both challenging and rewarding. 
    From learning the basics of <span className="font-bold">HTML, CSS, and JavaScript</span> to building complete 
    <span className="font-bold">web applications</span>, every step has helped me grow as a developer.
  </p>

  <p className="mt-3 text-gray-700 leading-relaxed">
    Here’s a brief overview of my journey:
  </p>

  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
    <li>Started with learning <span className="font-bold">HTML & CSS</span> to design static web pages.</li>
    <li>Moved on to <span className="font-bold">JavaScript</span> to make interactive frontends.</li>
    <li>Learned <span className="font-bold">React</span> for building dynamic user interfaces.</li>
    <li>Practiced backend development using <span className="font-bold">Node.js and Express</span>.</li>
    <li>Integrated <span className="font-bold">databases</span> like MongoDB for full CRUD functionality.</li>
    <li>Created multiple projects to strengthen problem-solving and <span className="font-bold">fullstack skills</span>.</li>
  </ul>

  <p className="mt-3 text-gray-700 leading-relaxed">
    Every project I build is a step closer to becoming a <span className="font-bold">professional Fullstack Developer</span>. 
    I’m constantly learning, experimenting, and aiming to create <span className="font-bold">innovative web solutions</span>.
  </p>
</div>



    

      </div>

    
    


    <footer className="bg-sky-300 p-12 text-white py-8 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-1">Portfolio</h1>
          <p className="text-sm text-gray-400">designn</p>
        </div>

        <div className="flex gap-5 text-xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          </a>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Aisha | All Rights Reserved</p>
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
export default Bage 