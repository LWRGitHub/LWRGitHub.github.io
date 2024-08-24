import React from 'react';


const InnerCardBody = (codeLink, projectLink) => {

    return (
        <div className="card-body">
            {/* Link: Project button */}
            <span> 
                {/* IF >>> Project Publicly available */}
                { 
                    typeof projectLink == "string" ? 
                    <a type='a' className="btn btn-outline-secondary p-1" href={projectLink}>Project</a>
                    : 
                    <span type='a' className="btn btn-outline-secondary p-1 disabled">Project</span>
                }
            </span>
            <span> </span>
            {/* Link: GitHub button */}
            <span> 
                {/* IF >>> GitHub Publicly available */}
                {
                    typeof codeLink == "string" ? 
                    <a type='a' className="btn btn-outline-secondary p-1" href={codeLink}>GitHub</a>
                    : 
                    <span type='a' className="btn btn-outline-secondary p-1 disabled">GitHub</span>
                    
                }
            </span>
            <br />
        </div>
    );   
}

const Project = (props) => {

    return (
        <div className='card'>
            <a className="p-0" href={props.projectLink}>
                <img className="card-img-top" src={props.src} alt={props.alt}/>
            </a>

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                
                <div className="text-center">
                    {InnerCardBody(props.codeLink, props.projectLink)}
                </div>
            </div>
        </div>
    );
}

export default Project;
