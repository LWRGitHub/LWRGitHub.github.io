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

const secondUl = (focus, skills, moreInfo, credentials) => {
    let focusStr = '';
    focusStr = focus.join(' - ');
    let skillStr = '';
    skills.map((skill) => {
        skillStr += ` ${skill},`;
    });

    let liCredentailTag = ''
    if(credentials){
        liCredentailTag = <li><a className="p-0 font-weight-bold" href={credentials.href}>{credentials.aText}</a></li>
    } 

    if(moreInfo){
        return (
            <ul>
                {liCredentailTag}
                <li><span className="font-weight-bold">Concentrations: </span>{focusStr}</li>
                <li><span className="font-weight-bold">Skills:</span>{skillStr} & More</li>
                <li>{moreInfo}</li>
            </ul>
        );
    } else {
        return (
            <ul>
                {liCredentailTag}
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
            {secondUl(props.focus, props.skills, props.moreInfo, props.credentials)}
        </ul>
    );
}

export default School;