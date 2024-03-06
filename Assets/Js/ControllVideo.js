// let video = document.getElementById("video");

// function togglePlay() {
//     console.log("Play");
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// }

let videos = document.querySelectorAll(".card__video");

videos.forEach(video => {
    video.addEventListener("mouseover", function() {
        console.log("Play");
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
