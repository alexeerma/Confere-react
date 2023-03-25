import React from 'react'
import { buroo } from '../assets';

const Buro = () => ( 
  
  <section>
    <div>
      <h1 className='text-center text-black font-displayfair text-6xl py-[30px]'>Büroo</h1>
      <div className='flex py-[60px]'>
        <div className='w-1/2'>
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