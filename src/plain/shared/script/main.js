(function() {
  const config = 'webpackWillReplaceThisWithConfig';
  let timeline;

  function createAnimation() {
    const tl = gsap.timeline({paused: true});

    tl.to('.content', { duration: 1, opacity: 1 })

    return tl;
  }

  function handleExit() {
    window.open(window.clickTag, '_blank');
    timeline.progress(1);
  }

  function init() {
    document.querySelector('.mainExit').addEventListener('click', handleExit);

    timeline = createAnimation();
    timeline.play();
  }

  window.onload = function() {
    init();
  }

})();
