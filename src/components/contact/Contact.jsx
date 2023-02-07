import React from 'react'
import "./contact.css"
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqrpr2g', 'template_e2ufp79', form.current, 'xvuGLQ72Lc0NbYfRy')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>fmugisha10@gmail.com</h5>
            <a href='mailto:fmugisha10@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>MUGISHA Fred</h5>
            <a href='https://m.me/Fmugisha10' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+250723848151</h5>
            <a href='https://wa.me/+250723848151' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name'/>
          <input type='text' name='subject' placeholder='Your Subject'/>
          <input type='email' name='email' placeholder='Your Email'/>
          <textarea name='message' rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact