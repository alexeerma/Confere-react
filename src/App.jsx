import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Nav, Hero, Buro, Fields, People, Goals, Contact } from "./components";
const App = () => {
  return (
<BrowserRouter>
  <div>  
    <Nav />
    <Hero />
    <Buro />
    <Fields />
    <People />
    <Goals />
    <Contact />
  </div>
  </BrowserRouter>
  );
}



export default App
