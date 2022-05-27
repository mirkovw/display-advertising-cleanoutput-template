(function() {
  const config = 'webpackWillReplaceThisWithConfig';
  let timeline;

  const createAnimation = function() {
    const tl = gsap.timeline({paused: true});

    tl.to('.content', { duration: 1, opacity: 1 })

    return tl;
  }

  const handleExit = function() {
    window.open(window.clickTag, '_blank');
    timeline.progress(1);
  }

  const init = function() {
    document.querySelector('.mainExit').addEventListener('click', handleExit);

    // wait for load images
    const allImagesHTMLCollection = document.getElementsByTagName('img');
    for (let image of allImagesHTMLCollection ) {
      // console.log(image.complete)
    }

    // wait for load fonts

    timeline = createAnimation();
    timeline.play();
  }

  window.onload = function() {
    init();
  }

})();
