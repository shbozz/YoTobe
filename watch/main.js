src = document.getElementById("i");
vid = document.getElementById("v");
l = false;
window.onload = function () {
    vidLocation = "../media/" + document.location.search.replace("?", "") + "v.mp4";
    vid.src = vidLocation;
    console.log(vidLocation);
}
function vidClick() {
    if (vid.paused) {
        vid.play();
        console.log("playing");
    }
    else {
        vid.pause();
        console.log("paused");
    }
}