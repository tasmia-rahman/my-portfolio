import React from 'react';
import bannerImg from '../../assets/images/undraw_software_engineer_lvl5.svg';
import './Banner.css';

const Banner = () => {

    const handleDownload = () => {
        // using Java Script method to get PDF file
        fetch('Tasmia Rahman Maliha (Resume).pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Tasmia Rahman Maliha (Resume).pdf';
                alink.click();
            })
        })
    }

    return (
        <section className='my-[150px] mx-[75px]'>
            <div class="flex lg:flex-row flex-col items-center">
                <div class="lg:w-8/12">
                    <div class="banner-text">
                        <small class="small-text">Welcome to my portfolio website!</small>
                        <h1>
                            Hey folks, I'm
                            <span className='text-yellow'> Tasmia Rahman Maliha</span>
                        </h1>
                        <h3 class="mb-3">Web Developer</h3>
                        <button onClick={handleDownload} className="btn download-btn">
                            Download Resume
                        </button>
                    </div>
                </div>
                <div class="lg:w-4/12">
                    <div>
                        <img src={bannerImg} class="img-fluid" alt="svg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;