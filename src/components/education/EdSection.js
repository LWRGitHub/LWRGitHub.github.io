import React from 'react';

const EdSection = (props) => {

    return (
        <div className="col-sm-6 p-3">
          <div className='card pb-4'>

            <img src={props.src} alt={props.alt} />
            <p className="font-weight-bold card-title px-3 ">{props.title}</p>
  
          </div>
        </div>
    );
}

export default EdSection;