import React from 'react';

const schoolName = (school, location, href) => {
    if(href){
        return (
            <li>
                <span className="font-weight-bold"><a className="p-0" href={href}>{school}</a></span>{location}
            </li>
        );
    } else {
        return (
            <li>
                <span className="font-weight-bold">{school}</span>{location}
            </li>
        );
    }
}

const secondUl = (focus, skills, moreInfo) => {
    let focusStr = '';
    // focus.map((focus) => {
    //     focusStr += ` ${focus},`;
    // });
    focusStr = focus.join(' - ');
    let skillStr = '';
    skills.map((skill) => {
        skillStr += ` ${skill},`;
    });

    if(moreInfo){
        return (
            <ul>
                <li><span className="font-weight-bold">Concentrations: </span>{focusStr}</li>
                <li><span className="font-weight-bold">Skills:</span>{skillStr} & More</li>
                <li>{moreInfo}</li>
            </ul>
        );
    } else {
        return (
            <ul>
                <li><span className="font-weight-bold">Concentrations: </span>{focusStr}</li>
                <li><span className="font-weight-bold">Skills:</span>{skillStr} & More</li>
            </ul>
        );
    }
}

const School = (props) => { 
    return (
        <ul>
            {schoolName(props.school, props.location, props.href)}
            {secondUl(props.focus, props.skills, props.moreInfo)}
        </ul>
    );
}

export default School;