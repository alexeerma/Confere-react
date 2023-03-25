import React from 'react'
import {vaartused} from "../assets";
import { SectionWrapper } from "../hoc";

const Goals = () => (
  
  <section className="bg-secondary">
    <div>
      <h1 className='text-center text-primary font-displayfair font-semibold text-6xl pt-[100px] pb-[60px]'>Väärtused</h1>
      <div className='flex text-justify justify-between py-[60px] mx-[120px]'>
        <div className='w-[550px]'>
          <p className="font-nunito">Confere Advokaadibüroo alustas tegevust 2023. aasta jaanuaris. Confere Advokaadibüroo asutajaks on vandeadvokaat Kersti Kägi, kellel kogemust advokaadi ja vandeadvokaadina on üle 25 aasta. Meie tugevuseks on pikaajaline õigusnõustamise ja kohtumenetlustes esindamise kogemus. Meie prioriteediks kliendile õigusteenuse osutamisel on professionaalsus, põhjalikkus, kvaliteet. Teeme vajadusel koostööd ka teiste elualade spetsialistidega ja kolleegidega teistest advokaadibüroodest, mis võimaldab meil saavutada parim võimalik tulemus Teie küsimuse või probleemi lahendamisel. Eesmärgi saavutamiseks täiendame ka pidevalt oma teadmisi ja oskusi.Me nõustame Teid eesti, inglise, vene keeles.Kui vajate nõu ja abi eelnimetatud valdkondades, saatke palun oma küsimus meie büroo üldmeilile info@conferelaw.ee ja vastame Teile esimesel võimalusel.</p>
        </div>
        <div>
          <img src={vaartused} alt="Väärtused" />
        </div>
      </div>
    </div>
  </section>
    
);

export default SectionWrapper(Goals, "goals");