import React from 'react';

import Header from './Header';

const MainContent = () => (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6"> 

          {/* Self info & img */}
          <img className='rounded' src="images/about/new-me.webp" alt="Software Engineer Logan Reynolds."/>

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