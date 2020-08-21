import React from 'react';

//componets
import Header from './Header';
// import EdSectionContainer from './education/edSections/EdSectionContainer'

//data
import {education} from '../data/education';

//--------School--------

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

//--------/School--------

//----------Schools---------
const Schools = (props) => { 
  let schools = props.data.map((element) => {
      return <School  school={element.school}
                      location={element.location}
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
//----------/Schools---------

//----------EdSection-------------
const EdSection = (props) => {

  return (
      <div className="col-sm-6">
        <p className="font-weight-bold">{props.title}</p>
        <img src={props.src} alt={props.alt} />
        <Schools data={props.schools} />
      </div>
  );
}
//----------/EdSection-------------

//-----EdSectionSontainer-------
const EdSectionContainer = (props) => {
  let edSections = props.data.map((edSection) => {
      return <EdSection   title={edSection.title}
                          src={edSection.img.src}
                          alt={edSection.img.alt}
                          schools={edSection.schools}
                          key={`EdSection_${edSection.title}`} />
  });
  return edSections;
}
//-----/EdSectionSontainer-------

const MainContent = () => (
    <section className="container">
      <div className="row">

        <EdSectionContainer data={education} />

      </div>
    </section>     
);

const Education = () => (
    <div>
        <Header page={'Education'} />
        <MainContent />
    </div>
);

export default Education;