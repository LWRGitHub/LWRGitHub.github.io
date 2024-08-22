import React from 'react';

import Header from './Header';

const MainContent = () => (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6"> 

         

          {/* Self info & img */}
          <img className='rounded' src="images/about/me.jpeg" alt="image of Software Engineer Logan Reynolds."/>

          {/* Resume */}
          {/* <a className="p-0" href="files/logan-reynolds-resume.pdf" >
            <span>Résumé  </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
              <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
          </a> */}
          {/* /Resume */}

          <br/>
          <br/>

          <p>Drawing on my extensive professional experience, I have had the opportunity to make meaningful contributions across a diverse array of organizations, ranging from startups to industry giants. Notably, I have held key roles at renowned companies such as Adobe and Verizon.</p>

         
        </div>
      </div>
    </section>
)

const About = () => (
    <div>
        <Header page={'About Me'} />
        <MainContent />
    </div>
);

export default About;