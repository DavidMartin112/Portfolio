import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import Adobe from '../../assets/adobe.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_oh0ecnn', 'template_zi7ocgk', form.current, { publicKey: '96Yvn-dFwBp2ClZ_cM0DC',})
            .then(
            () => {
                console.log('SUCCESS!');
                alert('Your message has been sent successfully. I will get back to you soon.');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className='clientsImgs'>
                    <img src={Walmart} alt='Client' className='clientsImg'></img>
                    <img src={Adobe} alt='Client' className='clientsImg'></img>
                    <img src={Microsoft} alt='Client' className='clientsImg'></img>
                    <img src={Facebook} alt='Client' className='clientsImg'></img>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                    <input type='email' className='email' placeholder='Your Email' name='from_email'/>
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button className='submit' value='Send' type='submit'>Submit</button>
                    <div className='links'>
                        <img src={FacebookIcon} alt='Facebook' className='link'></img>
                        <img src={TwitterIcon} alt='Twitter' className='link'></img>
                        <img src={YoutubeIcon} alt='Youtube' className='link'></img>
                        <img src={InstagramIcon} alt='Instagram' className='link'></img>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;