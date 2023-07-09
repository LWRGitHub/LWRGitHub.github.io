import React from 'react';

import Header from './Header';

const MainContent = () => (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6"> 

          {/* Self info & img */}
          <img className='rounded' src="images/about/me.jpeg" alt="image of Software Engineer Logan Reynolds."/>
          <p>Logan is a Full Stack Software Engineer with, expert knowledge of BEW, FEW, proficient at Data/Big Data (e.g. Data Colection, Adobe Analytics, Google Analytics, etc.) and graphic design. He always goes above and beyond to ensure the job gets done right the first time. His work stands out because he pays close attention to all details of the job. </p> 
          <p>Logan is a compelling Full Stack Web/App Developer. He is effective at combining creativity and problem solving to develop user-friendly tested/benchmarked applications, in various environments with novel methods of design. He's known among staff for strong wit, attention to detail and multi-tasking no matter the complexity of the project. He has an ability to work independently, in a team environment or as a lead project manager.</p>
          <p>Logan's been doing software engineering work for a while now, as it provides him with a skill set to design applications with a variety of technologies. During his free time you can find him, swing/position trading in the stock market, watching movies, coding his own projects, and learning new skills! </p>

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