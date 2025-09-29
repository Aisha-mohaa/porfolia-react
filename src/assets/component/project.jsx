import axios from "axios";
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

function Projects() {
    
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
        

        
      <div className="flex flex-col  justify-center pt-16 bg-gradient-to-r from-blue-50 to-blue-100 p-5">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Welcome to My Projects
        </h1>
        <p className="text-lg text-gray-700 max-w-xl text-center leading-relaxed">
          Here you’ll discover some of the exciting projects I’ve been working on.
          Each project reflects my journey as a developer, showcasing creativity,
          problem-solving, and growth. 🚀
        </p>
      </div>
  
     <div>

    <h1 className="text-3xl mt-6 font-bold font-serif pl-3">my projects</h1>
    
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

export default Projects
