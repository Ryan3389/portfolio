import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import RevealOnScroll from '../components/RevealOnScroll';

const ContactPage = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        fromName: '',
        email: '',
        message: ''
    })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormData({
                        fromName: '',
                        email: '',
                        message: ''
                    })
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }



    return (
        <RevealOnScroll>
            <section className="min-h-screen flex justify-center items-center flex-col">
                <form ref={form} onSubmit={sendEmail}>
                    <h1 className='text-5xl mb-6 text-center  bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold'>Lets Connect</h1>
                    <p className='text-gray-400 font-bold mb-6'>Fill out the form below to get in touch</p>
                    <div className="input-div">
                        <label>Name</label>
                        <input
                            type="text"
                            name="fromName"
                            value={formData.fromName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-div">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-div">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <span className='submit-btn-container'>
                        <input type="submit" value="Send" className=" px-5 py-3 font-medium bg-blue-500 rounded-lg cursor-pointer w-[40%] text-lg" />
                    </span>
                </form>

            </section>
        </RevealOnScroll>



    );
};

export default ContactPage
