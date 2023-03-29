import React from 'react'
import {buroo} from '../assets';

const Simple = () => ( 
    <section className='prodcution  md:flex items-center flex flex-col-reverse md:flex-row  px-5 md:px-0 py-20 md:py-10 gap-10 max-w-[75rem] mx-auto'>
    
        <div className="text">
            <p className='py-10 font-nunito text-gray-700'> Confere Advokaadibüroo OÜ asutajaks on vandeadvokaat Kersti Kägi, kes advokaadina on tegutsenud üle 25 aasta. Meie tugevuseks on pikaajaline õigusnõustamise ja kohtumenetlustes esindamise kogemus enamikes õigusvaldkondades. Meie hindame professionaalsust, põhjalikkust, kvaliteeti, ratsionaalsust ja juhindume oma töös nendest väärtustest. Vajadusel teeme koostööd erinevate teiste elualade spetsialistidega ja kolleegidega teistest advokaadibüroodest.</p>
        </div>
        <img src={buroo} alt="" className='md:w-1/2'/>
    </section>
  )


export default Simple