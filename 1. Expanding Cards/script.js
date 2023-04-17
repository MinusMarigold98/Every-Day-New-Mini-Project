const $ = document
let panels = document.querySelectorAll(".panel")
let titles = document.querySelectorAll(".title")
const apiKey = 'CKsVzhqJIYfrnf204k0gx5ltKuIMe1k8N6DHVm83fmAdNsBz8WnQKtp6';
let searchQuery = "nature"
let perPage = 5
const totalPages = Math.ceil(8000 / perPage);
const randomPage = Math.floor(Math.random() * totalPages) + 1;
let orientationSize = "landscape"

function removeActiveFromPanels() {
    panels.forEach((panel) => {
        panel.classList.remove("active")
    })
}


panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveFromPanels()
        panel.classList.add("active")
    })
})




fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${perPage}&page=${randomPage}&orientation=${orientationSize}`, {
    headers: {
        Authorization: apiKey
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data.photos)
        setBackgroundImages(data.photos)
    })
    .catch(error => {
        console.error(error)
        alert("Please use VPN")
    });



function setBackgroundImages(images) {
    for (i = 0; i < 5; i++) {
        panels[i].style.backgroundImage = "url('" + images[i].src.large + "')"
        titles[i].innerHTML = images[i].alt

    }
}