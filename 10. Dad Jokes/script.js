const $ = document
let jokeText = $.querySelector(".jokeText")
let btn = $.querySelector(".btn")

nextJoke()

function nextJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }
    fetch("https://icanhazdadjoke.com", config)
        .then(result => result.json())
        .then(data => {
            jokeText.innerHTML = data.joke
        })
}


btn.addEventListener("click", nextJoke)