import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Contact from "./assets/component/contact"
import Header from "./assets/component/header"
import About from "./assets/component/About"
import Layout from "./assets/component/layout"


function App (){
  return(
   <BrowserRouter>
   <Routes>
      <Route path="/" element = { <Layout/>}></Route>
      <Route index element ={<Header/>} />
      <Route path="/About" element ={< About/>} />
      <Route path="/Contact" element ={<Contact />} />
      

   </Routes>
  </BrowserRouter>
  );

}

export default App