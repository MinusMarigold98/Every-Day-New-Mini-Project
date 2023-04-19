const $ = document
let closeNavBtn = $.querySelector(".close")
let openNavBtn = $.querySelector(".menu")
let navCircleContainer = $.querySelector(".navCircleContainer")
let navBarMenusListItems = $.querySelectorAll(".navBarMenusListItems")

function showMenuItems() {
    navBarMenusListItems.forEach(function (item, index) {
        setTimeout(function () {
            item.classList.add("navItemsActive");
        }, index * 500);
    });
}

function hideMenuItems() {
    navBarMenusListItems.forEach(function (item, index) {
        setTimeout(function () {
            item.classList.remove("navItemsActive");
        }, index * 500);
    });
}

closeNavBtn.addEventListener("click", function () {
    navCircleContainer.classList.remove("active")
    hideMenuItems()
})
openNavBtn.addEventListener("click", function () {
    navCircleContainer.classList.add("active")
    showMenuItems()
})