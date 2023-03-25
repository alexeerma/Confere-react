import React from 'react'
import { asjaoigus, maksuoigus, arioigus, meditsiin, parimine, perekonnaoigus, piggy, taitemenetlus, toooigus, tsiviil, volaoigus } from "../assets";

const Fields = () => ( 

  <section className='bg-secondary'>
    <div>
      <h1 className="text-center text-primary text-6xl font-semibold font-displayfair pt-[50px]">Valdkonnad</h1>
    </div>
    <div className="flex justify-between pt-[100px] mx-[130px] pb-[50px]">
      <div>
        <h2 className="text-black font-nunito text-3xl font-md pb-[15px]">Asjaõigus</h2>
        <p className="box-border text-justify w-[800px]">Asjaõigused on omand omandiõigus ja piiratud asjaõigused: servituudid, reaalkoormatised, hoonestusõigus, ostueesõigus ja pandiõigus. Nõustame erinevates asjaõiguslikes küsimustes, aitame koostada vajalikke õigusdokumente ja esindame kinnisasjadega seotud vaidlustes.</p>
      </div>
      <img src={asjaoigus} alt="" className="w-[200px] h-[200px] max-w-[208px]" />
    </div>
    <div className="flex flex-row-reverse justify-between py-[30px] mx-[130px]">
      <div>
        <h2 className="text-black text-right font-nunito text-3xl font-md pb-[15px]">Maksud ja maksuvaidlused</h2>
        <p className="box-border w-[800px] text-justify">Maksustamist reguleerivate õigusaktide tundmine ja praktilised oskused maksumenetlustest võimaldavad meil hinnata, millised teemad maksuhaldurit kõige enam huvitavad. Nõustame ja esindame suhtlemisel maksuhalduriga. Aitame koostada vaide või kaebuse maksuhalduri korraldusele, maksuotsusele ja teistele dokumentidele ning esindame maksumenetluses ja halduskohtus.</p>
      </div>
      <img src={maksuoigus} alt="" className="w-[200px] h-[200px] max-w-[208px]" />
    </div>
    <div className="flex justify-between pt-[100px] mx-[130px] pb-[50px]">
      <div>
        <h2 className="text-black font-nunito text-3xl font-md pb-[15px]">Maksejõuetus. Pankrot ja saneerimine</h2>
        <p className="box-border text-justify w-[800px]">Pankrot on võlgniku kohtuotsusega väljakuulutatud maksejõuetus. Võlgnik on maksejõuetu, kui ta ei suuda rahuldada võlausaldaja nõudeid ja see suutmatus ei ole võlgniku majanduslikust olukorrast tulenevalt ajutine. Aitame koostada pankrotihoiatust ja pankrotiavaldust kohtule, nõustame ning esindame ettevõtteid ja eraisikuid pankrotimenetlustes ja kohtus. Saneerimine on abinõude rakendamine eraõigusliku juriidilise isiku suhtes ettevõtja majanduslike raskuste ületamiseks, tema likviidsuse taastamiseks, kasumlikkuse parandamiseks ja jätkusuutliku majandamise tagamiseks.</p>
      </div>
      <img src={piggy} alt="" className="w-[200px] h-[200px] max-w-[208px]" />
    </div>
    <div className="flex flex-row-reverse justify-between py-[30px] mx-[130px]">
      <div>
        <h2 className="text-black text-right font-nunito text-3xl font-md pb-[15px]">Meditsiiniõigus. Tervishoiuteenused</h2>
        <p className="box-border text-justify w-[800px]">Meditsiiniõigus reguleerib tervishoiuteenuse osutaja ning patsientide õigusi ja kohustusi. Meie advokaadibüroo on nõustanud ja esindanud tervishoiuteenuse osutamisest tõusetunud vaidluste lahendamisel nii tervishoiuteenuse osutaja kui ka patsiendi poolel.</p>
      </div>
      <img src={meditsiin} alt="" className="w-[200px] h-[200px] max-w-[208px]" />
    </div>
    <div className="flex justify-between pt-[100px] mx-[130px] pb-[50px]">
      <div>
        <h2 className="text-black font-nunito text-3xl font-md pb-[15px]">Perekonnaõigus</h2>
        <p className="box-border text-justify w-[800px]">Perekonnaõigus reguleerib abikaasade omavahelisi suhteid, vanemate ja laste vahelisi suhteid, vanemate kohustusi laste ees, elatist jms. Sellepärast on perekonnaõigus delikaatseimaid ja emotsionaalselt keerukaimaid õigusvaldkondi. Meie advokaadibüroo nõustab ja esindab kliente kõikides perekonnaõiguslikes küsimustes, aitab koostada vajalikke õigusdokumente ning esindab kliente läbirääkimistel suhetes kolmandate isikutega ja kohtus.</p>
      </div>
      <img src={perekonnaoigus} alt=""  className="w-[200px] h-[200px] max-w-[208px]"/>
    </div>
    <div className="flex flex-row-reverse justify-between py-[30px] mx-[130px]">
      <div>
        <h2 className="text-black text-right font-nunito text-3xl font-md pb-[15px]">Pärimisõigus</h2>
        <p className="box-border text-justify w-[800px]">Pärimine on isiku surma korral tema vara üleminek teisele isikule. Testamendi ja pärimislepingu ning teised pärimisega seotud toiminuid tõestab notar, kuid me saame nõustada pärimistoimingute tegemisel. Nõustame ka pärandi vastuvõtmisel, pärandaja kohustuste kindlakstegemisel ja pärandi jagamisel ning aitame leida notari pärimistoimingute tegemiseks.</p>
      </div>
      <img src={parimine} alt="" className="w-[200px] h-[200px] max-w-[208px]" />
    </div>
    <div className="flex justify-between pt-[100px] mx-[130px] pb-[50px]">
      <div>
        <h2 className="text-black font-nunito text-3xl font-md pb-[15px]">Täitemenetlus</h2>
        <p className="box-border text-justify w-[800px]">Täitedokumendid on nimetatud täitemenetluse seadustikus. Üldtuntumad on erinevad riigi- ja omavalitsusasutuste määratud trahviotsused, kohtute otsused ja määrused ning muud täitedokumendid. Aitame koostada täiteavaldust, nõustame ja esindame kõikides täitemenetlusega kaasnevate küsimuste lahendamisel.</p>
      </div>
      <img src={taitemenetlus} alt=""  className="w-[200px] h-[200px] max-w-[208px]"/>
    </div>
    <div className="flex flex-row-reverse justify-between py-[30px] mx-[130px]">
      <div>
        <h2 className="text-black text-right font-nunito text-3xl font-md pb-[15px]">Tööõigus</h2>
        <p className="box-border text-justify w-[800px]">Tööõigus on valdkond, mis määrab kindlaks töötajate ja tööandjate õigused ning kohustused töösuhtes. Nõustame ja esindame tööandjaid ja eraisikutest kliente töövaidluskomisjonis ja kohtus. Aitame koostada töölepinguid ja vaatame üle olemasolevad töölepingud ning töösuhtes vajalikud dokumendid ja anname nõu nende täiendamiseks.</p>
      </div>
      <img src={toooigus} alt="" className="w-[200px] h-[200px] max-w-[208px]"/>
    </div>
    <div className="flex justify-between pt-[100px] mx-[130px] pb-[50px]">
      <div>
        <h2 className="text-black font-nunito text-3xl font-md pb-[15px]">Võlaõigus</h2>
        <p className="box-border text-justify w-[800px]">Võlaõiguse esemeks on lepinguõigus ja lepinguvälised kohustused. Lepinguõiguses reguleeritakse lepingutel põhinevaid õigussuhteid osapoolte vahel. Lepinguvälised võlasuhted on võlasuhted, mis tekivad muul viisil, kui lepingust tulenevalt. Lepinguvälisteks kohustusteks on tasu avalik lubamine, käsundita asjaajamine, alusetu rikastumine, kahju õigusvastane tekitamine. Nõustame ja esindame lepingute täitmisel ning teistes võlasuhtes tekkivate probleemide lahendamisel. </p>
      </div>
      <img src={volaoigus} alt="" className="w-[200px] h-[200px] max-w-[208px]" />
    </div>
    <div className="flex flex-row-reverse justify-between py-[30px] mx-[130px]">
      <div>
        <h2 className="text-black text-right font-nunito text-3xl font-md pb-[15px]">Äriõigus</h2>
        <p className="box-border text-justify w-[800px]">Osaühing, aktsiaselt, täisühing, usaldusühing, tulundusühistu – on eraõigluslik isikute ühendus, mis luuakse mingi eesmärgi saavutamiseks. Nõustame ja aitame lahendada äriühingu igapäevase majandustegevuse raames tekkivate küsimuste lahendamisel. Esindame äriühingute asutamise, seadusest tulenevate muudatuste tegemisel äriühingu dokumentatsioonis ja muudatuste kandmisel äriregistrisse.</p>
      </div>
      <img src={arioigus} alt="" className="w-[200px] h-[200px] max-w-[208px]"/>
    </div>
    <div className="flex justify-between pt-[100px] mx-[130px] pb-[50px]">
      <div>
        <h2 className="text-black font-nunito text-3xl font-md pb-[15px]">Vaidluste lahendamine. Haldus- ja tsiviilkohtumenetlused</h2>
        <p className="box-border text-justify w-[800px]">Vaidluste lahendamine erinevate valdkondade haldus- ja tsiviilasjades moodustab olulise osa meie advokaadibüroo tegevustest. Enam kui 25 aastat osalemist kohtuvaidlustes haldus- ja eraõiguse valdkonna erinevates asjades on meile andnud hindamatu kogemuse parima lahenduse leidmiseks kliendi huvide kaitsel. Samas, saame oma kogemuste pinnalt väita, et vaidlevate poolte huvid saavad kõige optimaalsemal viisil tagatud läbirääkimiste tulemusena ja kohtumenetlust ei olegi vaja.</p>
      </div>
      <img src={tsiviil} alt="" className="w-[200px] h-[200px] max-w-[208px]"/>
    </div>

  </section>

);


export default Fields