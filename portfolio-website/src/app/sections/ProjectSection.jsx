"use client"
import React, {useState} from 'react'
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
    const [tag,setTag] = useState("All");
    const handleTagChange = (newTag) => {
        setTag(newTag);
      };
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  return (
    <section id='projects'> <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-4">Project Section</h2>
        <div className='flex mb-4 text-white flex-row items-center justify-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
        </div>
        <div  className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project)=> 
        <ProjectCard key={project.id} 
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}/>)}
        </div></section>
  )
}

export default ProjectSection