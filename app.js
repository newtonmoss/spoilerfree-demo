const player = videojs("demoPlayer", {
  controls: true,
  autoplay: false,
  preload: "auto",
  fluid: true,
  playsinline: true,
  html5: {
    // Important on iPad: try to avoid falling back to iOS native controls
    nativeControlsForTouch: false
  },
  controlBar: {
    fullscreenToggle: false
  }
});

const spoilerToggle = document.getElementById("spoilerToggle");
const hideSeekToggle = document.getElementById("hideSeekToggle");
const modeBadge = document.getElementById("modeBadge");

function setSpoilerFree(enabled) {
  const el = player.el();
  el.classList.toggle("vjs-spoilerfree", enabled);
  modeBadge.hidden = !enabled;

  // Extra safety: if iOS tries to show native controls, remove them
  const videoEl = el.querySelector("video");
  if (videoEl) {
    videoEl.controls = false;          // rely on Video.js controls only
    videoEl.setAttribute("playsinline", "");
    videoEl.setAttribute("webkit-playsinline", "");
  }
}

function setHideSeek(enabled) {
  player.el().classList.toggle("vjs-hide-seek", enabled);
}

spoilerToggle.addEventListener("change", (e) => setSpoilerFree(e.target.checked));
hideSeekToggle.addEventListener("change", (e) => setHideSeek(e.target.checked));

// Turn ON by default so you can confirm the duration disappears immediately
spoilerToggle.checked = true;
setSpoilerFree(true);
setHideSeek(false);
