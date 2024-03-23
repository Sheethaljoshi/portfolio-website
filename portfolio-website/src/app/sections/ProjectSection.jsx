import React from 'react'
import ProjectCard from './Projectcard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
      id: 1,
      title: "CLI Web Extension for Stack Overflow",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Full-Stack Movie Database",
      description: "Project 2 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Spotify Playlist-by-Date Generator",
      description: "Project 3 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Rover Path-Planner",
      description: "Project 4 description",
      image: "/images/projects/1.png",
      tag: ["All", "ML"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Finance Dashboard with ML Predictions",
      description: "Authentication and CRUD operations",
      image: "/images/projects/1.png",
      tag: ["All", "ML"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];
  

const ProjectSection = () => {
  return (
    <> <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Project Section</h2><div  className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className='flex text-white flex-row items-center justify-center gap-2 py-6'>
            <button className='rounded-full border-2 border-purple-500 text-xl cursor-pointer px-6 py-3'>All</button>
            <button className='rounded-full border-2 border-slate-400 text-xl hover:border-white cursor-pointer px-6 py-3'>Web</button>
            <button className='rounded-full border-2 border-slate-400 text-xl hover:border-white cursor-pointer px-6 py-3'>ML</button>
        </div>
        {projectsData.map((project)=> 
        <ProjectCard key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}/>)}
        </div></>
  )
}

export default ProjectSection