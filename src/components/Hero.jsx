import { logo } from "../assets";
import { Button } from "../components";


const Hero = () => ( 
  <section className="relative w-full h-screen">
    <div className="flex content-center pt-[350px]">
      <div className="basis-1/2"></div>
      <div className="shrink basis-1/2 text-center flex-col justify-items-center items-center">
        <img src={logo} alt="Confere" className="h-[60px] mx-auto" />
        <h1 className="text-primary text-3xl font-nunito uppercase pt-[20px]">Advokaadibüroo</h1>
        <p className="text-white font-nunito w-full text-xl font-nunito py-10 ">"Üheksa kümnendikku tarkusest seisneb selles, et olla tark õigel ajal." - T.Roosevelt, Ameerika Ühendriikide 26. president</p>
        <Button />
      </div>
    </div>
  </section>
    



);


export default Hero