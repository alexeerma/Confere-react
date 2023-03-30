import React from 'react'
import { buroo } from '../assets';
import { SectionWrapper } from "../hoc";

const Buro = () => ( 
  
  <section className="bg-conferehele">
    <div>
      <h1 className='text-center text-primary font-displayfair font-semibold text-6xl pt-[100px] pb-[30px]'>Büroo</h1>
      <div className='md:flex flex-col-reverse md:flex-row px-10 py-20 md:py-10 justify-around w-screen mx-auto'>
        <div className='w-auto'>
          <p className="font-nunito mx-auto text-justify pb-5">Confere Advokaadibüroo OÜ asutajaks on vandeadvokaat Kersti Kägi, kes advokaadina on tegutsenud üle 25 aasta. Meie tugevuseks on pikaajaline õigusnõustamise ja kohtumenetlustes esindamise kogemus enamikes õigusvaldkondades. Meie hindame professionaalsust, põhjalikkust, kvaliteeti, ratsionaalsust ja juhindume oma töös nendest väärtustest. Vajadusel teeme koostööd erinevate teiste elualade spetsialistidega ja kolleegidega teistest advokaadibüroodest.</p>
        </div>
        <div className=''>
          <img src={buroo} alt="Büroo" />
        </div>
      </div>
    </div>
  </section>
  

);


export default  SectionWrapper(Buro, "buro");