import { NavLink } from "react-router-dom"
import imag from "./testimo.jpg"

function Contact (){
    return <>
     <div className="bg-sky-300 flex  pl-10 justify-between py-6">
          <h1 className="text-white text-2xl ">portfoli</h1>
          <ul className="flex gap-5 mr-10 pl-10 text-xl">
          <NavLink to="/"><li>home </li></NavLink>
          <NavLink to="/About"><li>about me </li></NavLink>
          <NavLink to="/Contact"><li>contact </li></NavLink>
            <div>
              <button className="bg-white text-black px-9 py-2 rounded-lg">LogIn</button>
            </div>
        </ul>
    </div>

  
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white px-6 py-8 rounded-2xl shadow-lg text-center w-72">
    <div className="flex justify-center mb-4">
      <img
        className="w-24 h-24 rounded-full border-4 border-blue-500"
        src={imag}
        alt="Contact"
      />
    </div>
    <h1 className="text-xl font-semibold text-gray-800 mb-2">Hey, contact me</h1>
    <p className="text-gray-600 text-sm">
      Let's connect, share ideas, and build something amazing together. Your message could be the start of something great! 📩
    </p>
    <button className="mt-4 bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300">
      Say Hello 👋
    </button>
  </div>
</div>


     <div className="p-6 bg-gray-100 rounded-lg mt-10 max-w-4xl mx-auto">
       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📞 Contact Me</h1>

      <div className="mb-6 space-y-3">
      <div className="flex items-center space-x-3">
      <span className="text-xl">📧</span>
      <a
        href="https://aishamohamedd81@gmail.com"
        className="text-blue-600 hover:underline text-lg"> aishamohamedd81@gmail.com</a>
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
      <label className="block mb-1 text-gray-700">Your Message</label><textarea
        rows="4"
        placeholder="Type your message..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
</div>
       

        <footer className="bg-sky-300 text-white py-8 mt-10">
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

export default Contact