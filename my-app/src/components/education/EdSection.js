import React from 'react';
import Schools from './Schools';

const EdSection = (props) => {

    return (
        <div className="col-sm-6">
          <p className="font-weight-bold">{props.title}</p>
          <img src={props.src} alt={props.alt} />
          <Schools data={props.schools} />
        </div>
    );
}

export default EdSection;