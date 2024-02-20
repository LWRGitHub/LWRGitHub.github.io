import React from 'react';

const TutorialCheck = (tutorial) => {
    if(typeof tutorial == "string"){
        return (
            <a type='a' className="btn btn-outline-secondary p-1 mb-1" href={tutorial}>Tutorial</a>
        );
    } 
}

const InnerCardBody = (tutorial, codeLink, paragraph2, projectLink) => {

    const checkIfPrivet = (link1, linke2) => {
        if(typeof link1 !== "string" || typeof linke2 !== "string"){
            return (
                
                <span className="badge badge-danger">Private</span>
            );
        } else {
            return (
                <span></span>
                
            );
        }
    }

    return (
        <div className="card-body">
            {/* <h5 className="card-title">Details:</h5>
            <p className="card-text">{paragraph2}</p> */}
            
            { 
                typeof projectLink == "string" ? 
                <a type='a' className="btn btn-outline-secondary p-1 mb-1" href={projectLink}>Project</a>
                : 
                <a type='a' className="btn btn-outline-secondary p-1 mb-1 disabled" >Project</a>
            }
            {
                typeof codeLink == "string" ? 
                <a type='a' className="btn btn-outline-secondary p-1 mb-1" href={codeLink}>GitHub</a>
                : 
                <a type='a' className="btn btn-outline-secondary p-1 mb-1 disabled">GitHub</a>
                
            }
            <br />
            {checkIfPrivet(codeLink, projectLink)}
            {TutorialCheck(tutorial)}
        </div>
    );

   
}

const ParagraphSetup = (paragraph1) => {
    if(typeof paragraph1 == "string"){
        return (
            <p className="card-text">{paragraph1}</p>
        );
    }else{
        // loop through array and return a p tag for each element
        let paragraph = paragraph1.map((paragraph) => {
            return (
                <p className="card-text" key={`paragraph_${paragraph}`}>{paragraph}</p>
            );
        });
        return paragraph;
    }
}

const Project = (props) => {
    let platforms = props.platform.map((platform) => {
        return (
            <span className="badge badge-pill badge-dark" key={`${props.title}_${platform}`}>{platform}</span>
        );
    });
    let focus = props.focus.map((focus) => {
        return (
            <span className="badge badge-pill badge-secondary" key={`${props.title}_${focus}`}>{focus}</span>
        );
    });
    let tech = props.tech.map((tech) => {
        return (
            <span className="badge badge-pill badge-light" key={`${props.title}_${tech}`}>{tech}</span>
        );
    });


    return (
        <div className='card'>
            <a className="p-0" href={props.projectLink}>
                <img className="card-img-top" src={props.src} alt={props.alt}/>
            </a>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {ParagraphSetup(props.paragraph1)}
                <div className="card text-center">
                    <div className="card-header">
                        {platforms}
                        {focus}
                        {tech}
                    </div>
                    {InnerCardBody(props.tutorial, props.codeLink, props.paragraph2, props.projectLink)}
                </div>
            </div>
        </div>
    );
}

export default Project;