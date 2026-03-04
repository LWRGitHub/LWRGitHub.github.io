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

          <p>Drawing on my years of extensive professional experience, I have contributed over 200,000 lines of code across a diverse range of organizations, from innovative startups to industry giants.</p>

          <p>My career includes key roles at renowned companies such as Adobe, Verizon and Venmo @ PayPal.</p>

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