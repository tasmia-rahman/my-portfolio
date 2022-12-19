import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        e.target.user_name.value = '';
        e.target.user_email.value = '';
        e.target.message.value = '';

        emailjs.sendForm('service_adxrhbd', 'template_2h51yvl', form.current, 'yf6oe2VXV7BHpr98I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='w-[88%] mx-auto py-[50px]' id='contact'>
            <div className='text-center'>
                <small>Get in touch</small>
                <h3 className='text-yellow mb-5'>Contact Me</h3>
            </div>
            <div class="mx-auto max-w-screen-xl">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 text-center">
                    <div class="lg:col-span-2">
                        <p class="max-w-xl text-lg mt-1">
                            Talk to me
                        </p>

                        <div class="mt-3">
                            <div className='bg-white shadow-lg w-9/12 py-3 mx-auto rounded-lg'>
                                <FaEnvelope className='mx-auto mb-2'></FaEnvelope>
                                <p className='mb-0 font-semibold'>Email</p>
                                <p className='mb-2'>maliha1288@gmail.com</p>
                                <a href='mailto:maliha1288@gmail.com' className='no-underline text-yellow flex items-center justify-center'>
                                    Write me
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-1 mt-1 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className='bg-white shadow-lg w-9/12 py-3 mx-auto mt-8 rounded-lg'>
                                <FaWhatsapp className='mx-auto mb-2'></FaWhatsapp>
                                <p className='mb-0 font-semibold'>Whatsapp</p>
                                <p className='mb-2'>+8801764729185</p>
                                <a href='https://wa.me/8801764729185' className='no-underline text-yellow flex items-center justify-center'>
                                    Write me
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-1 mt-1 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className='bg-white shadow-lg w-9/12 py-3 mx-auto mt-8 rounded-lg'>
                                <FaFacebookMessenger className='mx-auto mb-2'></FaFacebookMessenger>
                                <p className='mb-0 font-semibold'>Messenger</p>
                                <p className='mb-2'>tasmiarahman.maliha.3</p>
                                <a href='http://m.me/tasmiarahman.maliha.3' className='no-underline text-yellow flex items-center justify-center'>
                                    Write me
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-1 mt-1 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 lg:pt-16 h-[540px]">
                        <form ref={form} onSubmit={sendEmail} class="space-y-4">
                            <div>
                                <label class="sr-only" for="name">Name</label>
                                <input
                                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    name="user_name"
                                />
                            </div>
                            <div>
                                <label class="sr-only" for="email">Email</label>
                                <input
                                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    placeholder="Email address"
                                    type="email"
                                    id="email"
                                    name="user_email"
                                />
                            </div>
                            <div>
                                <label class="sr-only" for="message">Message</label>
                                <textarea
                                    class="w-full rounded-lg border border-gray-200 p-3 text-sm"
                                    placeholder="Message"
                                    rows="8"
                                    id="message"
                                    name="message"
                                ></textarea>
                            </div>

                            <div class="mt-4">
                                <button
                                    type="submit"
                                    onClick={() => toast('Message Sent')}
                                    class="inline-flex w-full items-center justify-center rounded-lg bg-yellow px-5 py-3 text-white sm:w-auto"
                                >
                                    <span class="font-medium"> Send Message </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-3 mt-1 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;