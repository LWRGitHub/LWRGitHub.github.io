import React from 'react';
import Project from './Project';

const ProjectContainer = (props) => {
    let projects = props.data.map((project) => {
        return <Project src={project.img.src}
                        alt={project.img.alt}
                        title={project.title}
                        projectLink={project.projectLink}
                        codeLink={project.codeLink} 
                        key={`Project_Card_${project.title}`}/>
    });
    return(
        <div className="card-columns">
            {projects}
        </div>
    );
}

export default ProjectContainer;