import React from "react"
import "./index.css"

import {Routes,Route} from "react-router-dom"

import Home from "./Routes/Home.js"
import About from "./Routes/About.js"
import Services from "./Routes/Services.js"
import Projects from "./Routes/Projects.js"
import Contact from "./Routes/Contact.js"


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/About" element={<About/>}>
          </Route>
          <Route path="/Contact" element={<Contact/>}>
          </Route>
          <Route path="/Projects" element={<Projects/>}>
          </Route>
          <Route path="/Services" element={<Services/>}>
          </Route>
      </Routes>
    </>

  );
}

export default App;
