const $ = document
let sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
]
let buttons = $.getElementById("buttons")

sounds.forEach(sound => {
    let newBtn = $.createElement("button")
    newBtn.classList.add("newBtn")

    newBtn.innerText = sound

    newBtn.addEventListener("click", () => {
        stopPlay()
        $.getElementById(sound).play()
    })
    buttons.appendChild(newBtn)
})

function stopPlay() {
    sounds.forEach(sound => {
        $.getElementById(sound).pause()
        $.getElementById(sound).currentTime = 0;
    })
}