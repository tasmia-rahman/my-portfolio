import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id='skills' className='py-6 lg:py-[50px]'>
            <div class="w-full mx-auto px-4 lg:w-6/12">
                HTML
                <div class="mb-8 flex items-center">
                    <div class="bg-light relative h-4 w-full rounded-2xl ml-2">
                        <div
                            class="progress-bar absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-2xl text-xs font-semibold text-white"
                        >
                            100%
                        </div>
                    </div>
                </div>
                CSS
                <div class="mb-8 flex items-center">
                    <div class="bg-light relative h-4 w-full rounded-2xl ml-2">
                        <div
                            class="progress-bar absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-2xl text-xs font-semibold text-white"
                        >
                            100%
                        </div>
                    </div>
                </div>
                React
                <div class="mb-8 flex items-center">
                    <div class="bg-light relative h-4 w-full rounded-2xl ml-2">
                        <div
                            class="progress-bar absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white"
                        >
                            80%
                        </div>
                    </div>
                </div>
                Node
                <div class="mb-8 flex items-center">
                    <div class="bg-light relative h-4 w-full rounded-2xl ml-2">
                        <div
                            class="progress-bar absolute top-0 left-0 flex h-full w-6/12 items-center justify-center rounded-2xl text-xs font-semibold text-white"
                        >
                            50%
                        </div>
                    </div>
                </div>
                Express
                <div class="mb-8 flex items-center">
                    <div class="bg-light relative h-4 w-full rounded-2xl ml-2">
                        <div
                            class="progress-bar absolute top-0 left-0 flex h-full w-6/12 items-center justify-center rounded-2xl text-xs font-semibold text-white"
                        >
                            50%
                        </div>
                    </div>
                </div>
                MongoDB
                <div class="mb-8 flex items-center">
                    <div class="bg-light relative h-4 w-full rounded-2xl ml-2">
                        <div
                            class="progress-bar absolute top-0 left-0 flex h-full w-6/12 items-center justify-center rounded-2xl text-xs font-semibold text-white"
                        >
                            50%
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;