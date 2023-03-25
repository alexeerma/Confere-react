import React from 'react'
import {kersti, lisette} from "../assets";
import { SectionWrapper } from "../hoc";


const People = () => (
 
  <section className="bg-conferehele px-[50px] py-[50px]">
    <div className="flex justify-around pl-[45px]">
      <img src={kersti} alt="" className="max-w-[500px]"/>
      <div className="mx-[50px]">
        <h1 className="text-primary font-displayfair font-bold, text-5xl pt-[20px]">Kersti Kägi</h1>
        <h2 className="text-black font-medium text-3xl py-[20px] font-nunito">Vandeadvokaat</h2>
        <p className="text-justify font-nunito text-lg text-black w-[500px] text-center text-nunito">Advokaadina tegutsemist alustas Kersti 1997. aastal ettevõtete ja eraisikute esindamistega maksumenetlustes. Maksuasjade kõrvale tulid nõustamised ja esindamised tsiviilasjades. Praeguseks on Kerstil pikk ja edukas karjäär kohtuadvokaadina nii haldus- kui tsiviilkohtumenetlustes ning mõningane kogemus majandusalastes süüteomenetlustes. Kersti nõustab kliente asjaõiguse, võlaõiguse, tööõiguse, perekonnaõiguse, tervishoiuteenuse osutamisega seotud asjades, ühinguõiguses. Samuti maksejõuetuse asjades, tehes koostööd tunnustatud pankrotihalduritega. Advokaaditööst vabal ajal meeldib Kerstile veeta aega pere ja sõpradega, käia kinos, teatris, lugeda raamatuid, tegeleda rahvaspordiga, jalutada metsas või lihtsalt olla niisama, mitte midagi tegemata. </p>
        <div className="flex justify-around pt-[30px]">
          <div className='w-1/2'>
            <h3 className="text-black font-semibold text-xl font-nunito">Keeled:</h3>
            <p>Eesti, vene, inglise</p>
          </div>
          <div className='w-1/2'>
            <h3 className="text-black font-semibold text-xl font-nunito">Kontakt:</h3>
            <p className="font-nunito">+372 620 7775
              kersti.kagi@conferelaw.ee
              Skype: kerstikagi
             
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-row-reverse justify-around pt-[150px] pr-[30px]">
      <img src={lisette} alt="" className="max-w-[500px]"/>
      <div className="mr-[60px] ml-[40px]">
        <h1 className="text-primary text-displayfair font-black, text-5xl pt-[20px]">Lisette Põld</h1>
        <h2 className="text-black font-medium text-3xl py-[20px] font-nunito">Jurist</h2>
        <p className="text-justify font-nunito text-lg text-black w-[500px] text-center text-nunito">Lisette on omandanud õigusteaduse magistrikraadi Tartu Ülikoolis. Õiguse puhul meeldib Lisettele luua järjekindlaid praktilisi lahendusi eelkõige tsiviilasjades, muuhulgas seonduvalt intellektuaalomandi ja ärisaladuse kaitsega seotud küsimustes. Oskus siduda probleemilahendusse nii mõistuse- kui ka südamehääl tagavad Lisettele sihikindluse ja eesmärgistatud tegevusplaani. Juuramaastik pakub Lisettele võimalusi realiseerida piiritut huvi ning kirge õigusprobleemide lahendamiseks. Lisaks on Lisette omandanud ettevõtlusmaastikul kogemust sertifitseerimisasutuses, pakkudes mis tahes standardijärgset sertifitseerimist juhtimissüsteemidele. Vabal aja tegeleb Lisette raskus- ja jõutreeninguga, ujumisega ning naudib viibimist värskes õhus metsades.</p>
        <div className="flex justify-around pt-[30px]">
          <div className='w-1/2'>
            <h3 className="text-black font-semibold text-xl font-nunito">Keeled:</h3>
            <p>Eesti, vene, inglise</p>
          </div>
          <div className='w-1/2'>
            <h3 className="text-black font-semibold text-xl font-nunito">Kontakt:</h3>
            <p className="font-nunito">+372 620 7775 {'\n'}

              kersti.kagi@conferelaw.ee{'\n'}
              Skype: kerstikagi
             
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

);


export default SectionWrapper(People, "people");