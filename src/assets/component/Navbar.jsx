// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-sky-400 text-white flex pl-10 justify-between py-6">
      <h1 className="text-white text-2xl">portfolio</h1>
      <ul className="flex gap-5 mr-10 pl-10 text-2xl">
        {/* <NavLink to="/"><li>contact</li></NavLink>
        <NavLink to="/Home"><li>home</li></NavLink>
        <NavLink to="/About"><li>about me</li></NavLink> */}
        <NavLink to="/Contact"><li>Contact me</li></NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
