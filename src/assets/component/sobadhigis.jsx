import { NavLink } from "react-router-dom"
import img from "./isha.png"

function Kuso(){
    return <>
    <div className="ml-64 mr-64">
    <div>
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


       <div className="text-center mt-20">
        

    
         <h3 className="text-3xl font-serif">My name is Aisha, and I am a passionate student of Computer Science. From an early stage, I discovered that I enjoy solving problems and creating things that are useful and meaningful. This passion led me into the world of technology and programming, where I can turn ideas into reality.

       Currently, I am on the journey of becoming a Full Stack Developer. I spend my time learning both frontend and backend development, building projects that combine creativity with logic. Through this process, I am gaining confidence in writing code, understanding how systems work, and connecting the different parts of an application together.

       I also have a strong interest in design. Tools like Figma and Canva allow me to express my creativity and improve the look and feel of my projects. I believe that a developer should not only build functional applications but also make them beautiful and user-friendly. This balance between functionality and design inspires me every day.

       In my studies, I focus on being active, consistent, and disciplined. I know that success comes only with hard work and patience, so I push myself to stay motivated. I see challenges not as problems, but as opportunities to grow. Every error in my code and every bug I fix brings me closer to becoming a stronger developer.

      One of my biggest dreams is to build a professional portfolio that reflects my journey. Each project I complete is a step forward, showing my progress and dedication. I want my portfolio to not only showcase my skills but also inspire others who are walking the same path.

      Looking into the future, I see myself working as a developer on an international level. I dream of joining teams that create impactful software, contributing to solutions that help people and businesses around the world. At the same time, I want to use my skills to build my own projects, maybe even start a tech company one day insha’Allah.

       I know the road ahead is not easy, but I am ready to keep learning, improving, and exploring. I believe in continuous growth, and I am committed to becoming the best version of myself both personally and professionally. With dedication, faith, and hard work, I am confident that the future will be bright.</h3>

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
export default Kuso