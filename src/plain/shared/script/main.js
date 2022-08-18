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

    timeline = createAnimation();
    timeline.play();
  }

  window.onload = function() {
    init();
  }

})();
