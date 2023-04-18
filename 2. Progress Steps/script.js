
let progressBar = document.querySelector(".progressBar")
let progressBarFill = document.querySelector(".progressBarFill")
let active = document.querySelectorAll(".active")
let circles = document.querySelectorAll(".progressItem")
let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")
let activeCircles = 1
let activeCricleToRemoveIndex;


function prevItemFunction() {
    if (activeCircles <= 4 && activeCircles > 1) {
        activeCricleToRemoveIndex = activeCircles - 1
        activeCircles--
        circles[activeCricleToRemoveIndex].classList.remove("active")
        progressBarWidth()
    }
}

function nextItemFunction() {
    if (activeCircles <= 3 && activeCircles >= 1) {
        activeCircles++
        for (let i = 0; i <= activeCircles - 1; i++) {
            circles[i].classList.add("active")
        }
        progressBarWidth()
    }
}


function progressBarWidth() {
    switch (activeCircles) {
        case 1:
            progressBarFill.style.width = "0px";
            break;
        case 2:
            progressBarFill.style.width = "190px";
            break;
        case 3:
            progressBarFill.style.width = "362px";
            break;
        case 4:
            progressBarFill.style.width = "540px";
            break;
    }
}

prevBtn.addEventListener("click", () => prevItemFunction())
nextBtn.addEventListener("click", () => nextItemFunction())
