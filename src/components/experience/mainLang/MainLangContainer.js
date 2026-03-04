import React from 'react';
import Language from './Language';

const MainLangContainer = (props) => {

    let language = props.data.map((language) => {
        return <Language    id={language.id}
                            src={language.src}
                            alt={language.alt}
                            key={`Language_${language.id}`} />
    });

    return(
        <section className="container my-5">
            <h2 className="my-5" id="projects">Top Skills</h2>
            <div className="row">
                {language}
            </div>
        </section>
    );
}

export default MainLangContainer;
