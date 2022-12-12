import React from 'react';
import './About.css';
import { HiUser, HiCalendar, HiMail, HiPhone, HiHeart, HiAcademicCap } from "react-icons/hi";
import edit2 from '../../assets/images/edit2.png';

const About = () => {
    return (
        <section className='w-[88%] mx-auto pt-[75px] pb-[50px]' id='about'>
            <div className='flex items-center space-between'>
                <div className='w-9/12 mt-12'>
                    <img src={edit2} alt='Me' />
                </div>
                <div className='pl-16'>
                    <div>
                        <small className='text-yellow'>About Myself</small>
                        <h3>About Me, I'm a Web Developer</h3>
                        <p className='text-justify'>Hi there, I am Tasmia Rahman Maliha. I am a proactive, collaborative, and user-oriented web developer with 6 months experience leveraging programming skills to deliver custom software solutions to support company goals. Efficient team player with React and JavaScript proficiencies, track record of collaborating via Git / GitHub, and ability to work independently or as part of a team to complete development tasks while meeting delivery deadlines.</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-x-2'><HiUser className='text-yellow'></HiUser> Name: Tasmia Rahman Maliha</p>
                        <p className='flex items-center gap-x-2'><HiCalendar className='text-yellow'></HiCalendar> Birthday: 02 April, 1998</p>
                        <p className='flex items-center gap-x-2'><HiMail className='text-yellow'></HiMail> Email: maliha1288@gmail.com</p>
                        <p className='flex items-center gap-x-2'><HiPhone className='text-yellow'></HiPhone> Phone: +8801764729185</p>
                        <p className='flex items-center gap-x-2'><HiHeart className='text-yellow'></HiHeart> Hobbies: Watching Movies</p>
                        <p className='flex items-center gap-x-2'><HiAcademicCap className='text-yellow'></HiAcademicCap> Degree: Bachelor of Science in Computer Science and Engineering</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;