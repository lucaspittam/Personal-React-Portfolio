import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef()

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_9btl9pb', 'template_aqsptqn', form.current, 'bt0Pc5QxPuG1nCPZT')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <MdOutlineMailOutline className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>me@lucaspittam.com</h5>
            <a href="mailto:me@lucaspittam.com">Send me an email</a>

          </article>

          <article className="contact_option">
            <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+14169976677</h5>
            <a href="https://wa.me/14169976677?text=urlencodedtext" target='_blank' rel="noopener noreferrer">Send a message </a>

          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows="10" placeholder='Your Message' required></textarea>
        <button type='submit' className=' btn btn-primary'>Send</button>

        </form>
      </div>
    </section>
  )
}

export default Contact