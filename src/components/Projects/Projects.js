import React from 'react';
import './Projects.css';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';

const Projects = () => {
    return (
        <section className='w-[88%] mx-auto py-[50px]' id='projects'>
            <h4 className='text-yellow mb-5'>Projects</h4>
            <div>
                {/* Number 1 */}
                <article class="flex bg-white transition shadow-xl mb-[40px]">
                    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                        >
                            <span>2022</span>
                            <span class="w-px flex-1 bg-gray-900/10"></span>
                            <span>Oct 10</span>
                        </time>
                    </div>

                    <div class="sm:block sm:basis-60">
                        <img
                            alt="Guitar"
                            src={pic1}
                            class="aspect-square h-full w-full object-auto"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#" className='no-underline'>
                                <h3 class="font-semibold custom-font text-gray-900">
                                    SwapDeal
                                </h3>
                            </a>

                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                Laptop Reselling Website
                            </p>
                            <button className='tech-btn'>React</button>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="#"
                                class="block bg-yellow px-5 py-3 text-center text-xs font-semibold text-gray-900 transition hover:bg-yellow-400"
                            >
                                Explore More
                            </a>
                        </div>
                    </div>
                </article>

                {/* Number 2 */}
                <article class="flex bg-white transition shadow-xl mb-[40px]">
                    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                        >
                            <span>2022</span>
                            <span class="w-px flex-1 bg-gray-900/10"></span>
                            <span>Oct 10</span>
                        </time>
                    </div>

                    <div class="sm:block sm:basis-60">
                        <img
                            alt="Guitar"
                            src={pic2}
                            class="aspect-square h-full w-full object-auto"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#" className='no-underline'>
                                <h3 class="font-semibold custom-font text-gray-900">
                                    Visapress
                                </h3>
                            </a>

                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                Visa and Immigration Consultancy Website
                            </p>
                            <button className='tech-btn'>React</button>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="#"
                                class="block bg-yellow px-5 py-3 text-center text-xs font-semibold text-gray-900 transition hover:bg-yellow-400"
                            >
                                Explore More
                            </a>
                        </div>
                    </div>
                </article>

                {/* Number 3 */}
                <article class="flex bg-white transition shadow-xl mb-[40px]">
                    <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                        >
                            <span>2022</span>
                            <span class="w-px flex-1 bg-gray-900/10"></span>
                            <span>Oct 10</span>
                        </time>
                    </div>

                    <div class="sm:block sm:basis-60">
                        <img
                            alt="Guitar"
                            src={pic3}
                            class="aspect-square h-full w-full object-auto"
                        />
                    </div>

                    <div class="flex flex-1 flex-col justify-between">
                        <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#" className='no-underline'>
                                <h3 class="font-semibold custom-font text-gray-900">
                                    TeachMe
                                </h3>
                            </a>

                            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                                Learning Platform
                            </p>
                            <button className='tech-btn'>React</button>
                        </div>

                        <div class="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="#"
                                class="block bg-yellow px-5 py-3 text-center text-xs font-semibold text-gray-900 transition hover:bg-yellow-400"
                            >
                                Explore More
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Projects;