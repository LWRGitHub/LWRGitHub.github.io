import React from 'react';
import Header from './Header';

//components
import TechContainer from './home/technologies/TechContainer';
import SlideShow from './home/slideShow/SlideShow';

//data
import {tech, mainLang} from '../data/skills';


//------------Slide Show JS------------------
// const JSSlideShow = () => {

//     return () => {

//         var slideIndex = 0;
//         var time = 3000;
//         showSlides();

//         // Next/previous controls
//         function plusSlides(n) {
//         showSlides(slideIndex += n);
//         time = 3000;
//         }

//         // Thumbnail image controls
//         function currentSlide(n) {
//         showSlides(slideIndex = n);
//         time = 3000;
//         }

//         function showSlides() {
//         var i;
//         var slides = document.getElementsByClassName("mySlides");
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         console.log(slides)
//         console.log(slideIndex)
//         slides[slideIndex-1].style.display = "block";
//         setTimeout(showSlides, time); // Change image every 2 seconds
//         }
//     };
// }

// // //--------/Slide Show JS-------------

// const SlideShow = () => (
//     <div className="col-sm-6">
//         <h2 className="my-5">Work Examples</h2>
//         <div className="slideshow-container">
//             <div className="mySlides fade" id="single-slide-div">
//                 <div className="numbertext">1 / 6</div>
//                 <img src="images/index/slide-show/connect-four-in-a-row-game.svg" id="slide-img-4" alt="Screenshot of connect four game also known as four in a row. computer game." />
//             </div>
//             <div className="mySlides fade" id="single-slide-div">
//                 <div className="numbertext">2 / 6</div>
//                 <img src="images/index/slide-show/dish-site.jpg" id="slide-img-4" alt="screenshot of dish submitter website on computer." />
//             </div>
//             <div className="mySlides fade" id="single-slide-div">
//                 <div className="numbertext">3 / 6</div>
//                 <img src="images/index/slide-show/mobile-dish-submitter.jpg" id="slide-img-2" alt="Image of mobile dish submitter website screenshot on phone." />
//             </div>
//             <div className="mySlides fade" id="single-slide-div">
//                 <div className="numbertext">4 / 6</div>
//                 <img src="images/index/slide-show/mobile-home-page-portfolio-site-lg.jpg" id="slide-img-2" alt="Screenshot of mobile homepage for LWR Software engineering portfolio website." />
//             </div>
//             <div className="mySlides fade" id="single-slide-div">
//                 <div className="numbertext">5 / 6</div>
//                 <img src="images/index/slide-show/phaser-io-game-like-mario-lg.jpeg" id="slide-img-4" alt="Screenshot of computer game made with phaser io, kind of similar to Mario." />
//             </div>
//             <div className="mySlides fade" id="single-slide-div">
//                 <div className="numbertext">6 / 6</div>
//                 <img src="images/index/slide-show/pong-like-game-paddle.svg" id="slide-img-4" alt="Pong like game where you break the bricks above by moving the paddle around to hit the ball." />
//             </div>
//         </div>
//         {JSSlideShow()}
//     </div>
// );

const Home = () => (
    <div className="m- p-0">
        <Header page={'Computer Scientist'}
                focus={'Software Engr - Web/Mobile/App Dev (Full-Stack) - UX/UI Design - Game Des/Dev - Data Sci'} />
        <section className="container">
        <div className="row">
            <TechContainer  tech={tech}
                            mainLang={mainLang} />
            <div className="col-sm-6">
                <SlideShow />
            </div>
        </div>
        </section>
    </div>
);

export default Home;