let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.addEventListener("click", function () {
        play_sound(this.innerHTML);
        button_animation(this.innerHTML);
    })
    btn.addEventListener("keypress", function (event) {
        play_sound(event.key);
        button_animation(event.key);
    })
}

function play_sound(expression) {

    switch (expression) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
        // do nothing
    }


}

function button_animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}




