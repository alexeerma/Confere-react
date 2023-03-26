import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Nav, Hero, Buro, Fields, People, Goals, Contact,Footer } from "./components";
const App = () => {
  return (
<BrowserRouter>
  <div>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <Nav />
    <Hero />
    </div> 
    <Buro />
    <Fields />
    <People />
    <Goals />
    <Contact />
    <Footer />
  </div>
  </BrowserRouter>
  );
}



export default App
