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
        <section className='my-[100px]'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-12 d-flex align-items-center">
                        <div class="banner-text">
                            <small class="small-text d-flex justify-start">Welcome to <span class="mobile-block">my portfolio website!</span></small>
                            <h1>
                                Hey folks, I'm
                                <span className='text-yellow'> Tasmia Rahman Maliha</span>
                            </h1>
                            <h3 class="d-flex justify-start">Web Developer</h3>
                            <button onClick={handleDownload} className="btn custom-btn d-flex justify-start">
                                Download Resume
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 d-flex align-items-center">
                        <div>
                            <img src={bannerImg} class="img-fluid" alt="svg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;