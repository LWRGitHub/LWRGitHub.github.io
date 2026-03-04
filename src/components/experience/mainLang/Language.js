import React from 'react';

const Language = (props) => {

    return (
        <div className="col-sm-6 col-md-3 mb-3">
            <div className="card h-100" style={{border: 'none', backgroundColor: 'transparent'}}>
                <div className="card-header" style={{border: 'none', backgroundColor: 'transparent'}}>
                    <h5 className="mb-0">{props.id}</h5>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center" style={{backgroundColor: 'transparent'}}>
                    <img src={props.src} alt={props.alt} />
                </div>
            </div>
        </div>
    );
}

export default Language;