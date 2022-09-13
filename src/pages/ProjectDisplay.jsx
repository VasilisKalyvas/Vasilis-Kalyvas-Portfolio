import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { BsGithub } from 'react-icons/bs';
import "../styles/projectdisplay.css";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt=''/>
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <div className='repository'>
             <div className='rep'><span>Front-End Repository:</span><a href={project.frontRepo}><BsGithub /></a></div>
             <div className='rep'><span>Backend-End Repository:</span><a href={project.backRepo}><BsGithub /></a></div>
        </div>
      </div>
    );
  }

export default ProjectDisplay