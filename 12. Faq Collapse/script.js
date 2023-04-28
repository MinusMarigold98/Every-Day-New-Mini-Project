const $ = document
let boxIcons = $.querySelectorAll(".boxIcon")
let answerBoxes = $.querySelectorAll(".boxAnswer")

function showAnswer(event) {
    let thatBoxIcon = event.target
    let fullBox = event.target.parentElement
    if (thatBoxIcon.classList.contains("closeIcon")) {
        fullBox.classList.remove("boxAnswerActive")
        thatBoxIcon.classList.remove("closeIcon")
        thatBoxIcon.classList.add("openIcon")
    } else {
        fullBox.classList.add("boxAnswerActive")
        thatBoxIcon.classList.remove("openIcon")
        thatBoxIcon.classList.add("closeIcon")
    }
}

boxIcons.forEach((boxIcon) => {
    boxIcon.addEventListener("click", showAnswer)
})