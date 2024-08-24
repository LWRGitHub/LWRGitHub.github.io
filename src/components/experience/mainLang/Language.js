import React from 'react';

const Language = (props) => {

    return (
        <div className="col-sm-6 col-md-3">

            <h5>{props.id}</h5>
            <img src={props.src} alt={props.alt} />

        </div>
    );
}

export default Language;