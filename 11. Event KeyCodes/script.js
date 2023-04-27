let key = document.querySelector(".key")
let keyCode = document.querySelector(".keyCode")
let code = document.querySelector(".code")

function wichKey(event) {
    console.log(event)
    event.preventDefault()
    key.innerHTML = event.key
    keyCode.innerHTML = event.keyCode
    code.innerHTML = event.code
}

window.addEventListener("keydown", wichKey)






