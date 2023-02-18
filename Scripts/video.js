var videoPlayer = document.getElementById("video-player");
var video = videoPlayer.getElementsByTagName("video")[0];

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

function setVolume(volume) {
  video.volume = volume;
}
