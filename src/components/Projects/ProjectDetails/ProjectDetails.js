import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { Navbar, Container, Nav } from 'react-bootstrap';

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
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="/"><span className='font-semibold text-xl'>Back To Home</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='w-9/12 mx-auto mb-5'>
                <h1 className='text-center my-5 font-bold text-gray-700'>{selectedProject?.name}</h1>
                <h5 className='mb-3'>Project Links</h5>
                <div className='flex flex-col lg:flex-row justify-between items-center mb-4'>
                    <div className='flex flex-col lg:flex-row space-y-3'>
                        <a href={selectedProject?.githubClientLink} className='mr-3 mt-2 px-4 py-[6px] bg-grey text-white rounded-2xl no-underline'>Client Code</a>
                        <a href={selectedProject?.githubServerLink} className='mr-3 mt-2 px-4 py-[6px] bg-grey text-white rounded-2xl no-underline'>Server Code</a>
                        <a href={selectedProject?.websiteLink} className='mr-3 mt-2 px-4 py-[6px] bg-grey text-white rounded-2xl no-underline'>Live Site</a>
                    </div>
                    <a href='#gallery' className='flex items-center mt-2 px-4 py-[6px] bg-grey text-white rounded-2xl no-underline'>
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
        </div>
    );
};

export default ProjectDetails;