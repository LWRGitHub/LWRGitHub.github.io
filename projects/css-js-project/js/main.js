const shapes = ['circle', 'diamond', 'square', 'triangle'];

window.addEventListener('DOMContentLoaded', (e) => {
  let presentation = document.querySelector('hp-presentation');
  presentation.onclick = handlePresentationClick;
  presentation.addEventListener('animationend', handleAnimationEnd, false);
});

handlePresentationClick = (e) => {
  let current = document.querySelector('hp-slide.active');
  let next = current.nextElementSibling;
  if (next) {
    current.classList.remove('active');
    next.classList.add('active');
    next.querySelectorAll('.match').forEach(function (el) {
      setTimeout(function () { el.classList.remove('match'); }, 0);
    });
    const aa = parseInt(next.getAttribute('data-autoadvance'));
    if (!isNaN(aa)) {
      setTimeout(function (e) {
        handlePresentationClick(e);
      }, aa);
    }
    const osa = next.getAttribute('data-onshow');
    if (osa) {
      window[osa]();
    }
  }
}

handleAnimationEnd = (e) => {
  const slide = e.target.closest('hp-slide');
  const aa = slide.getAttribute('data-autoadvance');
  if (aa == 'animationend' && slide.classList.contains('active')) {
    handlePresentationClick(e);
  }
}

setLearnImage = (imageName) => {
  let img = document.querySelector('hp-slide.active hp-learn img');
  if (img){
    img.src = 'images/' + imageName + '.svg';
  }
}

showLearning = () => {
  const ii = Math.floor(Math.random() * shapes.length);
  setLearnImage(shapes[ii]);
  let slide = document.querySelector('hp-slide.active');
  slide.classList.remove('learn-yes');
  slide.classList.remove('learn-no');
  slide.classList.add(ii ? 'learn-no' : 'learn-yes');
}

startLearning = (learningDelay) => {
  showLearning();
  setTimeout( () => {
    if (learningDelay > 1.1) {
      showLearning();
      learningDelay = Math.pow(learningDelay, 1/1.05);
      startLearning(learningDelay);
    }
  }, learningDelay);
}

runLearningSequence = () => {
  startLearning(1500);
}

animateSVGStep = () => {
  const slide = document.querySelector('hp-slide.active');
  let svgs = slide.querySelectorAll('svg');
  if (svgs[0].children.length > 0) {
    const el = svgs[0].children[0];
    if (el) {
      svgs[1].appendChild(el.parentNode.removeChild(el));
    }
    return true;
  }
  return false;
}

animateSVG = () => {
  if (animateSVGStep()) {
    setTimeout(animateSVG, 30);
  }
}
