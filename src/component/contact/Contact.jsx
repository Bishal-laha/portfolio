import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`);

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
         <div className="contact_options">
             <article className='contact_option'>
               <MdOutlineEmail className='contact_icon'/>
               <h4>Email</h4>
               <h5>bishalnemo@gmail.com</h5>
               <a href="mailto:bishalnemo@gmail.com" target="_blank">Send a Message</a>
             </article>
             <article className='contact_option'>
               <BsLinkedin className='contact_icon'/>
               <h4>Linkedin</h4>
               <h5>Bishal-Laha</h5>
               <a href="https://www.linkedin.com/in/bishal-laha-b72806204" target="_blank">Send a Message</a>
             </article>
             <article className='contact_option'>
               <BsWhatsapp className='contact_icon'/>
               <h4>Whatsapp</h4>
               <h5>+91-123456</h5>
               <a href="https://api.whatsapp.com/send?phone=+91123456" target="_blank">Send a Message</a>
             </article>
           </div>

           <form ref={form} onSubmit={sendEmail}>
             <input type="text" name="name" placeholder='Your Full Name' required />
             <input type="email" name="email" placeholder='Your Email Address' required/>
             <textarea name="message" rows="7" placeholder='Enter The Message' required></textarea>
             <button type='submit' className='btn btn1 btn-primary'>Submit</button>
           </form>
         </div>
      
    </section>
  )
}

export default Contact
