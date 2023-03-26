import React from 'react'
import {buroo} from '../assets';
import {Button} from '../components';

const Simple = () => ( 
    <section className='prodcution  md:flex items-center  flex flex-col-reverse md:flex-row  px-5 md:px-0 py-20 md:py-10 gap-10 max-w-[75rem] mx-auto'>
    
        <div className="text">
            <p className='font-[700] text-3xl px-7 md:px-0 text-center md:text-left md:text-4xl'>  All your files in one secure location, accessible anywhere.</p>
            <p className='py-10 font-[700] text-gray-700'> Confere Advokaadibüroo OÜ asutajaks on vandeadvokaat Kersti Kägi, kes advokaadina on tegutsenud üle 25 aasta. Meie tugevuseks on pikaajaline õigusnõustamise ja kohtumenetlustes esindamise kogemus enamikes õigusvaldkondades. Meie hindame professionaalsust, põhjalikkust, kvaliteeti, ratsionaalsust ja juhindume oma töös nendest väärtustest. Vajadusel teeme koostööd erinevate teiste elualade spetsialistidega ja kolleegidega teistest advokaadibüroodest.</p>
            <div className="mail">
                <form action="" className='flex flex-col md:flex-row space-y-2 md:space-y-0  md:space-x-4 '>
                    <input type="email" required className='md:flex-1 border border-1 border-gray-300 py-1'/>
                    <Button>Get Started</Button>
                </form>
            </div>
        </div>
        <img src={buroo} alt="" className='md:w-1/2'/>
    </section>
  )


export default Simple