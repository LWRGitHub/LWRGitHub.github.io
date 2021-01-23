import React from 'react';

const TechContainer = (props) => {
    let technologies = '';
    for(const key1 in props.tech){
        const skill = props.tech[key1].id
        if(skill !== "JS" && skill !== 'Ruby' && skill !== 'C#' && skill !== 'Python'){
            if(skill){
                technologies += `${skill}, ` 
            } else {
                for(const key2 in props.tech[key1]){
                    if(props.tech[key1][key2].id){
                        technologies += `${props.tech[key1][key2].id}, ` 
                    }
                }
            }
        }
    }

    let languages = [];
    for(const key1 in props.mainLang){
        if(props.mainLang[key1].id){
            languages.push(props.mainLang[key1].id)
        } 
    }
    languages = languages.join(" - ");

    return(
        <div className="col-sm-6">
            <h2 className="mt-5 mb-4">Technologies:</h2>
            <h4 className="my-3">{languages}</h4>
            <p>{`${technologies} & More`}</p>
        </div>
    );
}

export default TechContainer;