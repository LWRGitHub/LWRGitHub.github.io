import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'images/index/slide-show/connect-four-in-a-row-game.svg',
    "images/index/slide-show/dish-site.jpg",
    "images/index/slide-show/mobile-dish-submitter.jpg",
    "images/index/slide-show/mobile-home-page-portfolio-site-lg.jpg",
    "images/index/slide-show/phaser-io-game-like-mario-lg.jpeg",
    "images/index/slide-show/pong-like-game-paddle.svg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const SlideShow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
          </div>
        </div>
      </Slide>
    )
}

export default SlideShow;