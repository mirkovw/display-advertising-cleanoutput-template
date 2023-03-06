import fitText from '@mediamonks/display-temple/util/fitText';
import enableAdsRecorder from '@mediamonks/display-temple/util/enableRecorder';

async function politeLoadImages(element) {
  const imageList = Array.from(element.querySelectorAll('img[data-src]'));
  const imageUrlList = imageList.map((img) => img.getAttribute('data-src'));

  const result = await Promise.all(
    imageUrlList.map((src) => {
      return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = function () {
          resolve(this);
        };
        img.onerror = reject;
        img.dataset.src = src;
        img.src = src;
      });
    }),
  );

  result.forEach((img, index) => {
    imageList[index].src = img.src;
  });
}

function createAnimation(obj, config) {
  const tl = gsap.timeline(obj);
  tl.to('.content', {duration: 0.5, opacity: 1});
  return tl;
}

function createCtaAnimation(obj, config) {
  const tl = gsap.timeline(obj);
  tl.fromTo('.cta', {border: '0px solid black'}, {duration: 0.1, border: '1px solid black', backgroundColor: '#fff'});
  tl.to('.cta_copy', {duration: 0.1, color: '#000'}, '<');


  return tl;
}


(async () => {
  const config = 'webpackWillReplaceThisWithConfig';

  // create timelines
  const timeline = createAnimation({paused: true}, config);
  const ctaTimeline = createCtaAnimation({paused: true}, config);

  // create exit / rollover events
  const mainExit = document.querySelector('.mainExit');
  mainExit.addEventListener('click', () => {
    window.open(window.clickTag, '_blank');
    timeline.progress(1);
  });

  mainExit.addEventListener('mouseover', () => {
    ctaTimeline.play();
  });

  mainExit.addEventListener('mouseout', () => {
    ctaTimeline.reverse();
  });

  // await loading images and others
  await politeLoadImages(document.querySelector('.banner'));
  await document.fonts.ready;

  fitText(document.querySelector('.title'), document.querySelector('.cta'))

  enableAdsRecorder(timeline, config);

  //play banner ad animation
  timeline.play();
})();
