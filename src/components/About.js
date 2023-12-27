import React from 'react';

import Header from './Header';

const MainContent = () => (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6"> 

          {/* Self info & img */}
          <img className='rounded' src="images/about/me.jpeg" alt="image of Software Engineer Logan Reynolds."/>
          <p>With my years of professional experience, I have had the privilege of contributing to a diverse range of organizations, both large and small. I have held positions at notable companies such as Adobe, Prose, Verizon, Wipro, StageIV, and Dance4Healing. During my time at Adobe, I played a key role in executing critical software updates that expanded relevant product data by 35%, improved efficiency, and drove a 75% enhancement with 50+ updates.</p>

          {/* Resume */}
          <a className="p-0" href="files/logan-reynolds-resume.pdf" >
            <span>Resume:  </span>
            <img src="images/about/file.png" id="resume-btn" alt="Blue computer folder file With see-through background."/>
          </a>
          {/* /Resume */}

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