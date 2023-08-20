let navBar = document.querySelector(".navBar");
let search = document.querySelector("#search");
let searchResult = document.querySelector(".searchResult");
let showFilter  = document.getElementById("show-filter")
let filterDetail = document.querySelector(".filter-detail");
let nftItems = document.getElementById("nftItems");
let nftJourney = document.getElementById("nft-journey");
let catalogItems = document.getElementById("catalog-items");
let catalogSearchText = document.querySelector("#catalogSearchText");
let scrollToTop = document.querySelector(".scrollToTop");


let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


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

//filter
showFilter.addEventListener("click",function (){
    console.log("click")
    filterDetail.classList.toggle("d-none");
    filterDetail.classList.toggle("animate__backInDown")
})

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

//navBar Show
let waypoint1 = new Waypoint({
    element: document.getElementById('nftItems'),
    handler: function(direction) {
        if(direction === "down"){
            // console.log("waypoint start");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("py-4");
            scrollToTop.classList.toggle("d-none");
            scrollToTop.classList.toggle("animate__fadeInUp")
        }else if(direction === "up") {
            // console.log("restart");
            navBar.classList.toggle("animate__fadeInDown");
            navBar.classList.toggle("shadow");
            navBar.classList.toggle("py-4");
            scrollToTop.classList.toggle("d-none")
            scrollToTop.classList.toggle("animate__fadeInUp")
        }
    },
    offset: '10%'
});

