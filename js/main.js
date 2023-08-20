let navBar = document.querySelector(".navBar");
let navbarTouch = document.querySelectorAll(".navbarTouch");
let catalog = document.getElementById("catalog");
let account = document.getElementById("account");
let catalogItems = document.getElementById("catalog-items");
let profileItems = document.getElementById("profile-items");

let search = document.querySelector(".search");
let searchResult = document.querySelector(".searchResult");

let heroData = document.querySelector("#heroData");
let marginTop = document.querySelector("#marginTop");

let scrollToTop = document.querySelector(".scrollToTop");
let scrollToTop2 = document.getElementById("scrollToTop2");
let showFilter  = document.getElementById("show-filter")
let filterDetail = document.querySelector(".filter-detail");
let searchText = document.querySelector("#searchText");
let catalogSearchText = document.querySelector("#catalogSearchText");

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
    // marginTop.classList.toggle("d-none");
    searchResult.classList.toggle("invisible");
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

//countDownClock
let countDownAll = document.querySelectorAll(".count-down");
function clock (){
    for (let i=0; i<countDownAll.length; i++){
        let date1 = new Date();
        let countDownClock =  `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;
        countDownAll[i].innerText = countDownClock;
    }
}
setInterval(clock,1000)

let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//navBar Show
let waypoint1 = new Waypoint({
    element: document.getElementById('recent-drop'),
    handler: function(direction) {
        if(direction === "down"){
            // console.log("waypoint start");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("py-4")
        }else if(direction === "up") {
            // console.log("restart");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("py-4")
        }
    },
    offset: '10%'
})
//scrollToTop Show
let waypoint2 = new Waypoint({
    element: document.getElementById('trending'),
    handler: function(direction) {
        if(direction === "down"){
            // console.log("waypoint start");
            scrollToTop.classList.toggle("d-none");
            scrollToTop.classList.toggle("animate__fadeInUp")
        }else if(direction === "up") {
            // console.log("restart");
            scrollToTop.classList.toggle("d-none")
            scrollToTop.classList.toggle("animate__fadeInUp")
        }
    },
    offset: '10%'
});


