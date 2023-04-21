let image = document.querySelector(".image")
let text = document.querySelector(".text")


function loadContent() {
    for (let i = 100; i >= 0; i--) {
        setTimeout(function () {
            changeValues(i);
        }, (100 - i) * 50);

    }
}

function changeValues(i) {
    image.style.filter = "blur(" + i + "px)";
    text.innerHTML = 100 - i + "%";
    if (i == 0) {
        text.style.display = "none"
    }
}



window.addEventListener("DOMContentLoaded", loadContent())