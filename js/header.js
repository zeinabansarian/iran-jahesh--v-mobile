let menuBar = document.querySelector(".menuBar")
let menuContainer = document.querySelector(".menuContainer")
let closeContainer = document.querySelector(".closeContainer")
let searchContainer = document.querySelector(".searchContainer")
let searchBtn = document.querySelector(".searchBtn")
let searchBtnOpen = document.querySelector(".searchBtn .open")
let searchBtnClose = document.querySelector(".searchBtn .close")
let header = document.querySelector("header")
let flag;
menuBar.addEventListener("click", function (params) {
    menuContainer.classList.add("activeMenuContainer")
})
closeContainer.addEventListener("click", function (params) {
    menuContainer.classList.remove("activeMenuContainer")
})
searchBtnOpen.addEventListener("click", function (params) {
    console.log("click");
    if (header.classList.contains("blueHaeder")) {
        flag=true
    }
    searchContainer.classList.add("openSearchContainer")
    searchBtn.classList.add("opensearchBtn")
    header.classList.add("blueHaeder")
})
searchBtnClose.addEventListener("click", function (params) {
    searchBtn.classList.remove("opensearchBtn")
    searchContainer.classList.remove("openSearchContainer")
    if (flag) {
        
    }
    else{
        header.classList.remove("blueHaeder")

    }
})


window.addEventListener("scroll", function(params) {
    if (window.pageYOffset>10) {
        header.classList.add("activeHeaderOnScroll")
    }else{
        
        header.classList.remove("activeHeaderOnScroll")
    }
})