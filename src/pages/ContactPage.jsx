import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
        <section className='form-section bg-backgroundColor min-h-screen'>
            <div className="form-container">
                <h1 className='text-4xl'>Lets Connect</h1>
                <p>Fill out the form below to get in touch</p>
                <form ref={form} onSubmit={sendEmail}>
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
                    <input type="submit" value="Send" className=" px-5 py-3 font-medium bg-btnBackground border border-btnBorder hover:bg-btnHover rounded-lg cursor-pointer w-[100%] " />
                </form>
            </div>
        </section>
    );
};

export default ContactPage