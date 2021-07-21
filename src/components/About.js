import React from 'react';

import Header from './Header';

const MainContent = () => (
    <section className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">

          {/* Self info & img */}
          <img className='rounded' src="images/about/me.jpeg" alt="Cartoon Sketch drawing image of computer programmer Software Engineer LWR."/>
          <p>Logan is a Software engineer with a focus on BEW, expert knowledge of FEW, proficent in UX/UI Design and novice knowledge of DS and MOB. He always goes above and beyond to ensure the job gets done right the first time. His work stands out because he pays close attention to all details of the job. </p> 
          <p>Logan is an expert at Full Stack Web/App Development with life-long dedication to learning. He is effective at combining creativity and problem solving to develop user-friendly tested/benchmarked applications, in various cloud environments with novel methods of design. He's known among staff for strong wit, attention to detail and multi-tasking no matter the complexity of the project. He has an ability to work independently, in a team environment or as a Project Manager.</p>
          <p>Logan's been doing computer science work for a while now, and loves it because it gives him the chance to have fun with computer programming by designing applications that everybody loves. During his free time you can find him watching movies, coding his own projects, and having fun with friends!</p>
          {/* Old Message */}
          {/* <p>Hello,</p>
          <p>My name is Logan and I'm passionate about providing quality software engineering service in the San Francisco area. I always go above and beyond to ensure I get the job done right the first time. My work stands out because I pay close attention to all details of the job.</p>
          <p>I’ve been doing software engineering work for a while now, and I love it because it gives me the chance to have fun with computer programing by designing applications that everybody loves.</p>
          <p>I look forward to working with you to help meet all your software engineering needs.</p> */}
          {/* /Old Message */}
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