let btn = document.querySelector(".btn")
let input = document.querySelector(".input")
let search = document.querySelector(".search")

btn.addEventListener("click", () => {
    input.classList.toggle("active")
    btn.classList.toggle("active")
})