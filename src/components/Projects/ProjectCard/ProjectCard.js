import React from 'react';

const ProjectCard = ({ project }) => {
    const { id, name, title, mainTechnologies, websiteLink, date, pics } = project;
    return (
        <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
                alt="Office"
                src={pics[0]}
                class="h-56 w-full object-center"
            />

            <div class="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" class="block text-xs text-gray-500">
                    {date}
                </time>

                <h3 class="mt-0.5 mb-0 text-xl">
                    {name}
                </h3>

                <p className='mb-3'>{title}</p>

                <div class="flex flex-wrap gap-2">
                    {
                        mainTechnologies.map(mainTechnology => <span
                            class="whitespace-nowrap rounded bg-gray-100 px-2.5 py-0.5 text-xs text-pink"
                        >
                            {mainTechnology}
                        </span>)
                    }
                </div>

                <div className='flex justify-center mt-4'>
                    <a href={websiteLink} className='mr-3 px-4 py-1 bg-grey text-white rounded-2xl no-underline'>Visit</a>
                    <a href={`project/${id}`} className='px-3 py-1 bg-grey text-white rounded-2xl no-underline'>Details</a>
                </div>
            </div>
        </article>

    );
};

export default ProjectCard;