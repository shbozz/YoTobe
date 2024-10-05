player = document.getElementById("i");
l = false;
function vidclick() {
    if (l) {
        player.src = URLSearchParams(document.location.search);
        player.play();
    }
    else {
        if (player.paused)
            player.play();
        else
            player.pause();
    }
}