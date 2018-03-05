var body = document.getElementsByTagName("body");


var mario = document.getElementsByTagName("img")[0];
mario.src = "mario.png"

window.addEventListener("keydown", onKeyDown);

function onKeyDown(event) {

    switch (event.keyCode) {
        case "ArrowRight": mario.src = "mario_running.gif"; break; // left key
    }
}