import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

const ProjectDetails = () => {
    const { id } = useParams();

    const [selectedProject, setSelectedProject] = useState([]);

    useEffect(() => {
        fetch('/project-data.json')
            .then(res => res.json())
            .then(data => {
                setSelectedProject(data.find(project => project.id === id));
            })
    }, [id])

    return (
        <div className='w-9/12 mx-auto mb-5'>
            <h1 className='text-center my-5 font-bold text-gray-700'>{selectedProject?.name}</h1>
            <h5 className='mb-3'>Project Links</h5>
            <div className='flex justify-between items-center mb-4'>
                <div>
                    <a href={selectedProject?.githubClientLink} className='mr-3 px-4 py-2 bg-grey text-white rounded-2xl no-underline'>Client Code</a>
                    <a href={selectedProject?.githubServerLink} className='mr-3 px-4 py-2 bg-grey text-white rounded-2xl no-underline'>Server Code</a>
                    <a href={selectedProject?.websiteLink} className='mr-3 px-4 py-2 bg-grey text-white rounded-2xl no-underline'>Live Site</a>
                </div>
                <a href='#gallery' className='flex items-center px-4 py-[6px] bg-grey text-white rounded-2xl no-underline'>
                    See Gallery
                    <FaAngleDown className='ml-1 mt-1'></FaAngleDown>
                </a>
            </div>
            <p className='text-justify mb-4'>{selectedProject?.shortDescription}</p>
            <div className='mb-6'>
                <h3>Application Features</h3>
                <hr />
                <ul class="list-disc">
                    {selectedProject?.description?.map(desc => <li className='mb-1'>{desc}</li>)}
                </ul>
            </div>
            <div className='mb-6'>
                <h3>Technologies Used</h3>
                <hr />
                <ul class="list-disc">
                    {selectedProject?.technologies?.map(technology => <li className='mb-1'>{technology}</li>)}
                </ul>
            </div>
            <div id='gallery'>
                <h3>Photo Gallery</h3>
                <hr />
                <div className='grid grid-cols-2 gap-4'>
                    {selectedProject?.pics?.map(pic => <img src={pic} alt='Pic' />)}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;