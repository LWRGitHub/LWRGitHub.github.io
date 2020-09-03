import React from 'react';

import Header from './Header';

const MainContent = () => (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">

          {/* Self info & img */}
          <img className='rounded' src="images/about/me.jpeg" alt="Cartoon Sketch drawing image of computer programmer Software Engineer LWR."/>
          <p>Hello,</p>
          <p>My name is Logan and I'm passionate about providing quality computer science service in the San Francisco area. I always go above and beyond to ensure I get the job done right the first time. My work stands out because I pay close attention to all details of the job.</p>
          <p>I’ve been doing computer science work for a while now, and I love it because it gives me the chance to have fun with computer programing by designing applications that everybody loves.</p>
          <p>I look forward to working with you to help meet all your computer science needs.</p>
          {/* /Self info & img */}

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