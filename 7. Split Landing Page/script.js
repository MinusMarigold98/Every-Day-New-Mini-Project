const $ = document
let dota2 = $.querySelector(".dota2")
let lol = $.querySelector(".lol")





dota2.addEventListener("mouseover", function () {
    dota2.style.width = "80%"
    lol.style.width = "20%"
})
dota2.addEventListener("mouseout", function () {
    dota2.style.width = "50%"
    lol.style.width = "50%"
})
lol.addEventListener("mouseover", function () {
    lol.style.width = "80%"
    dota2.style.width = "20%"
})
lol.addEventListener("mouseout", function () {
    lol.style.width = "50%"
    dota2.style.width = "50%"
})


