const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const preBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;
//set up slider
function init() {
    /*
        sliderImage[0] = 0
        sliderImage[1] = 100%
        sliderImage[2] = 200%
    */
   slideImage.forEach((img, i) => {   
    img.style.left = i * 100 + "%"
   });
   slideImage[0].classList.add("active");
}
init();
//create navigation dots
function createNavigationDots() {
for (let i = 0; i < numberOfImages; i++){
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);
}
    navigationDots.children[0].classList.add("active");
}
//next Button
nextBtn.addEventListener("click", () => {
    if(currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        currentSlide = 0;
        return;
    }
    currentSlide++;
   goToSlide(currentSlide);
});

//next Button

preBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        currentSlide = numberOfImages - 1;
        return;
    }
    currentSlide--;
   goToSlide(currentSlide);
});

//go to slide


function goToSlide(slideNumber) {
    slideContainer.style.transform = "translateX(-" +
    slideWidth * slideNumber + "px)";
    currentSlide = slideNumber
}
//set active class

