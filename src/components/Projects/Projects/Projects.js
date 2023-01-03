import React, { useEffect, useState } from 'react';
import './Projects.css';
import ProjectCard from './../ProjectCard/ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('project-data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <section className='w-[88%] mx-auto py-6 lg:py-[50px]' id='projects'>
            <h3 className='text-yellow mb-3'>Projects</h3>
            <div className='grid grid-col-1 lg:grid-cols-3 gap-10'>
                {
                    projects?.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
        </section>
    );
};

export default Projects;