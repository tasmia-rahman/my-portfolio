import React from 'react';
import './About.css';
import { HiUser, HiCalendar, HiOutlineMail, HiPhone, HiOutlineHeart, HiAcademicCap } from "react-icons/hi";

const About = () => {
    return (
        <div className='w-8/12 mx-auto mb-[100px]' id='about'>
            <div>
                <small className='text-yellow'>About Myself</small>
                <h3>About Me, I'm a Web Developer</h3>
                <p className='text-justify'>Hi there, I am Tasmia Rahman Maliha. I am a Proactive, collaborative, and user-oriented web developer with 6 months experience leveraging programming skills to deliver custom software solutions to support company goals. Efficient team player with React and JavaScript proficiencies, track record of collaborating via Git / GitHub, and ability to work independently or as part of a team to complete development tasks while meeting delivery deadlines.</p>
            </div>
            <div>
                <p className='flex items-center gap-x-2'><HiUser className='text-yellow'></HiUser> Name: Tasmia Rahman Maliha</p>
                <p className='flex items-center gap-x-2'><HiCalendar className='text-yellow'></HiCalendar> Birthday: 02 April, 1998</p>
                <p className='flex items-center gap-x-2'><HiOutlineMail className='text-yellow'></HiOutlineMail> Email: maliha1288@gmail.com</p>
                <p className='flex items-center gap-x-2'><HiPhone className='text-yellow'></HiPhone> Phone: +8801764729185</p>
                <p className='flex items-center gap-x-2'><HiOutlineHeart className='text-yellow'></HiOutlineHeart> Hobbies: Watching Movies</p>
                <p className='flex items-center gap-x-2'><HiAcademicCap className='text-yellow'></HiAcademicCap> Degree: Bachelor of Science in Computer Science and Engineering</p>
            </div>
        </div>
    );
};

export default About;