// Create player
const player = videojs("demoPlayer", {
  controls: true,
  autoplay: false,
  preload: "auto",
  fluid: true,
  playsinline: true,
  controlBar: {
    // iPad-friendly: remove fullscreen toggle so iOS is less likely to jump to native fullscreen UI
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
}

function setHideSeek(enabled) {
  const el = player.el();
  el.classList.toggle("vjs-hide-seek", enabled);
}

spoilerToggle.addEventListener("change", (e) => setSpoilerFree(e.target.checked));
hideSeekToggle.addEventListener("change", (e) => setHideSeek(e.target.checked));

// Default state
setSpoilerFree(false);
setHideSeek(false);