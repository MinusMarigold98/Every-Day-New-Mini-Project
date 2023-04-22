let boxs = document.querySelectorAll(".box")


window.addEventListener("scroll", () => {
    activeBoxes()
})

activeBoxes()

function activeBoxes() {
    let triggerBottom = window.innerHeight / 5 * 4
    boxs.forEach(box => {
        let boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            box.classList.add("active")
        } else {
            box.classList.remove("active")
        }
    })
}