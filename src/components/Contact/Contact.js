import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

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
            <div class="mx-auto max-w-screen-xl">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">
                        <p class="max-w-xl text-lg">
                            At the same time, the fact that we are wholly owned and totally
                            independent from manufacturer and other group control gives you
                            confidence that we will only recommend what is right for you.
                        </p>

                        <div class="mt-8">
                            <a href="" class="text-2xl font-bold text-pink-600">
                                0151 475 4450
                            </a>

                            <address class="mt-2 not-italic">
                                282 Kevin Brook, Imogeneborough, CA 58517
                            </address>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
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
                                    <span class="font-medium"> Send Enquiry </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-3 h-5 w-5"
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
        </section>
    );
};

export default Contact;