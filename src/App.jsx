import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Contact from "./assets/component/contact"
import Header from "./assets/component/header"
import About from "./assets/component/About"
import Layout from "./assets/component/layout"
import Projects from "./assets/component/project"
import Blog from "./assets/component/blog"
import Kuso from "./assets/component/sobadhigis"
import Bage from "./assets/component/pageBandhisg"
import Last from "./assets/component/lastbage"
import Data from "./assets/component/data"


function App (){
  return(
   <BrowserRouter>
   <Routes>
      <Route path="/" element = { <Layout/>}></Route>
      <Route index element ={<Header/>} />
      <Route path="/About" element ={< About/>} />
      <Route path="/Projects" element ={< Projects/>} />
      <Route path="/Blog" element ={< Blog/>} />
      <Route path="/Kuso" element ={< Kuso/>} />
      <Route path="/Bage" element ={< Bage/>} />
      <Route path="/Last" element ={< Last/>} />
      <Route path="/Contact" element ={<Contact />} />
      <Route path="/Data" element ={<Data />} />
      

   </Routes>
  </BrowserRouter>
  );

}

export default App