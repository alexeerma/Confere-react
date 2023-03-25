import { logo } from "../assets";
import { Button } from "../components";

const Hero = () => ( 
  <section className="w-full h-96 bg-black flex py-15 t-0 l-0">
      <div className="w-1/2">""</div>
      <div className="py-50">
        <img src={logo} alt="Confere" className="w-[300px] h-[50px]" />
        <h1 className="text-white">Advokaadibüroo</h1>
        <p className="text-white">"Üheksa kümnendikku tarkusest seisneb selles, et olla tark õigel ajal." - T.Roosevelt, Ameerika Ühendriikide 26. president</p>
        <Button />
      </div>
  </section>
    



);


export default Hero