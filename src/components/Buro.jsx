import React from 'react'
import { buroo } from '../assets';

const Buro = () => ( 
  
  <section className="bg-conferehele">
    <div>
      <h1 className='text-center text-primary font-displayfair font-semibold text-6xl pt-[100px] pb-[60px]'>Büroo</h1>
      <div className='flex text-justify justify-between py-[60px] mx-[120px]'>
        <div className='w-[550px]'>
          <p>Confere Advokaadibüroo OÜ asutajaks on vandeadvokaat Kersti Kägi, kes advokaadina on tegutsenud üle 25 aasta. Meie tugevuseks on pikaajaline õigusnõustamise ja kohtumenetlustes esindamise kogemus enamikes õigusvaldkondades. Meie hindame professionaalsust, põhjalikkust, kvaliteeti, ratsionaalsust ja juhindume oma töös nendest väärtustest. Vajadusel teeme koostööd erinevate teiste elualade spetsialistidega ja kolleegidega teistest advokaadibüroodest.</p>
        </div>
        <div>
          <img src={buroo} alt="Büroo" />
        </div>
      </div>
    </div>
  </section>
  

);


export default Buro