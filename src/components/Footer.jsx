import React from 'react'
import {logo} from "../assets";
import { navLinks } from '../constants';

const Footer = () => (
 
    <section className='bg-black py-[70px]'>
       <div className='flex flex-col justify-items-center items-center'>
            <img src={logo} alt="" className="max-w-[300px]"/>
            <h4 className="text-primary text-3xl font-nunito pb-[50px] text-center uppercase pt-[10px]">Advokaadibüroo</h4>
            <p className='text-center text-secondary font-nunito'>Aadress: Tartu mnt 83, Tallinn, 10115, Eesti</p>
            <p className='text-center text-secondary font-nunito'>Telefon: +372 6740433</p>
            <p className='text-center text-secondary font-nunito'>Email: info@conferelaw.ee</p>
      </div>
    </section>

);


export default Footer