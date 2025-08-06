// src/components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar /> 
      <div className="p-6">
        <Outlet /> 
      </div>
    </>
  );
}

export default Layout;
