let video = document.getElementById("video");

function togglePlay() {
    console.log("Play");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
