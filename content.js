let skipSpeed = 2;
let isEnabled = true;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateSettings') {
    skipSpeed = request.skipSpeed;
    isEnabled = request.isEnabled;
  }
});

function checkForAds() {
  const adOverlay = document.querySelector('.ytp-ad-overlay-container');
  const videoAd = document.querySelector('.video-ads.ytp-ad-module');

  if (isEnabled && (adOverlay || videoAd)) {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = skipSpeed;
    }
  }
}

setInterval(checkForAds, 1000);