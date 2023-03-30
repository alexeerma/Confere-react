import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "../hoc";
import {logo_black} from "../assets";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Conferelaw",
          from_email: form.email,
          to_email: "aleksander.eerma@hotmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

    return (
      <section className="bg-conferehele px-[50px] pb-[100px]">
        <div className='mb-6'>
          <h1 className="text-center pt-[80px] pb-[50px] font-displayfair text-primary font-bold text-5xl">Kontakt</h1>
        </div>
        <div className="md:flex justify-around justify-center ">
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-9 flex flex-col gap-8 items-center justify-center'>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Ees- ja perekonnanimi"
              className='bg-primary py-4 px-6 placeholder:text-black text-black font-nunito rounded-lg outline-none border-none font-medium min-w-[300px]'
            />
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              className='bg-primary py-4 px-6 placeholder:text-black text-black font-nunito rounded-lg outline-none border-none font-medium min-w-[300px]'
            />
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Teade'
              className='bg-primary py-4 px-6 placeholder:text-black text-black font-nunito rounded-lg outline-none border-none font-medium min-w-[300px]'
            />
            <button
            type='submit'
            className='bg-primary hover:bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-black font-nunito shadow-md shadow-primary min-w-[100px]'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          </form>
          <div className='mt-9 flex-col justify-center items-center pt-10'>
            <img src={logo_black} alt="" className="md:max-w-[300px] "/>
            <h4 className="text-primary uppercase text-center text-3xl font-nunito pb-[30px]">Advokaadibüroo</h4>
            <p className='text-center'>Aadress: Tartu mnt 83, Tallinn, 10115, Eesti</p>
            <p className='text-center'>Telefon: +372 6740433</p>
            <p className='text-center'>Email: info@conferelaw.ee</p>
          </div>
        </div>
      </section>

    )
  }

  export default SectionWrapper(Contact, "contact");