let navBar = document.querySelector(".navBar");
let navbarTouch = document.querySelectorAll(".navbarTouch");
let account = document.getElementById("account");
let profileItems = document.getElementById("profile-items");
let search = document.querySelector("#search");
let searchResult = document.querySelector(".searchResult");
let walletCardGallery = document.querySelector("#walletCardGallery");
let topMargin = document.querySelector("#topMargin");
let showSearch = document.querySelector("#showSearch");
let scrollToTop = document.querySelector(".scrollToTop");

//dropdown
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));
//slide down
let slideDown = {
    distance: '100px',
    origin: 'top',
    delay:'100',
    duration:900,
    interval:450,
    reset:true,
};
ScrollReveal().reveal('.slide-Down', slideDown);
//slide left
let slideLeft = {
    distance: '100px',
    origin: 'left',
    delay: '100',
    duration: 900,
    interval: 450,
    reset: true,
};
ScrollReveal().reveal('.slide-left', slideLeft);
//slide right
let slideRight = {
    distance: '100px',
    origin: 'right',
    delay: '100',
    duration: 900,
    interval: 450,
    reset: true,
};
ScrollReveal().reveal('.slide-right', slideRight);
//search
search.addEventListener("click",function(){
    // console.log ("show result")
    searchResult.classList.toggle("d-none");
    searchResult.classList.add("mb-3")
    searchResult.classList.toggle("animate__fadeInDown")
})

//search result typing
let typed1 = new Typed(searchText, {
    strings: ['what do you need ?', 'Find now'],
    typeSpeed: 60,
    backSpeed: 60,
    startDelay:1000,
    backDelay:500,
    fadeOut:false,
    cursorChar:'_',
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
});

let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//navBar Show
let waypoint1 = new Waypoint({
    element: document.getElementById('walletCardGallery'),
    handler: function(direction) {
        if(direction === "down"){
            // console.log("waypoint start");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("py-4")
            scrollToTop.classList.toggle("d-none");
            scrollToTop.classList.toggle("animate__fadeInUp")
        }else if(direction === "up") {
            // console.log("restart");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("py-4")
            scrollToTop.classList.toggle("d-none")
            scrollToTop.classList.toggle("animate__fadeInUp")
        }
    },
    offset: '200px'
})



