import { NavLink } from "react-router-dom"
import Img from "./events"
import img from "./isha.png"
import imag from "./testimo.jpg"
function Header (){
    return <>
    <div className="sm:flex bg-sky-300 justify-between py-6">
          <h1 className="text-white text-2xl ">portfoli</h1>
          <ul className="flex gap-5 mr-10 pl-10 text-xl">
          <NavLink to="/"><li>home </li></NavLink>
          <NavLink to="/About"><li>aboutMe </li></NavLink>
          <NavLink to="/Contact"><li>contact </li></NavLink>
            <div>
              <button className="bg-white text-black px-9 py-2 rounded-lg">LogIn</button>
            </div>
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


   <div className="sm:flex bg-white  gap-6 ml-5 mr-5 mt-10 mb-5 py-4 space-y-2">

    <div className="hover:bg-red-400 w-full md:w-1/3 text-black rounded-lg p-4 px-4 shadow-lg ml-4 transition duration-300 hover:text-white hover:scale-105 cursor-pointer">
      <h1 className="text-3xl font-bold mb-4">Choose our<br /> Projects</h1>
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
      <h1 className="text-3xl font-bold mb-4">Choose our<br /> Projects</h1>
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
      <h1 className="text-3xl font-bold mb-4">Choose our<br /> Projects</h1>
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
      <h1 className="text-3xl font-bold mb-4">Choose our <br /> Projects</h1>
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

         
    <div>
       <Img />

    </div>



   <div className="sm:flex justify-around mt-12 pt-3 items-center pl-5 pr-2 bg-gradient-to-br from-white to-gray-100">
  <div className="max-w-xl"></div>  
    <div>
        <img className="w-72 h-72 rounded-full" src={imag} alt="" />
    </div>
    <div className="">
        <h1 className="text-2xl">Testimolia</h1>
        <h1>Working with Aisha was a game changer. Her attention to detail and dedication truly exceeded my expectations. <br /> I would highly recommend her to anyone looking for professional and creative work!</h1>
        
        <p className="text-red-500">lets work .</p>
    </div>
   </div>


      <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto mt-10">
       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📞 Contact Me</h1>

      <div className="mb-6 space-y-3">
      <div className="flex items-center space-x-3">
      <span className="text-xl">📧</span>
      <a
        href="mailto:aishamohamedd81@gmail.com"
        className="text-blue-600 hover:underline text-lg"
      >
        aishamohamedd81@gmail.com
      </a>
     </div>

      <div className="flex items-center space-x-3">
      <span className="text-xl">📞</span>
      <a
        href="https://wa.me/252619569961"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:underline text-lg">WhatsApp Number</a>
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

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
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

export default Header