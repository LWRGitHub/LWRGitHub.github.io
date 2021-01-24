import React from 'react';
import School from './School';


const Schools = (props) => { 
    let schools = props.data.map((element) => {
        return <School  school={element.school}
                        location={element.location}
                        credentials={element.credentials}
                        href={element.href}
                        focus={element.focus}
                        skills={element.skills}
                        moreInfo={element.moreInfo}
                        key={`School_${element.school}`} />
    });
    return(
        schools
    );
}

export default Schools;