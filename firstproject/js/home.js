const SHOWING_CLASS = "showing";

const firstSlide = document.querySelector(".slide:first-child");

function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}

slide();
setInterval(slide, 3000);

const LEFTBTN = document.querySelector(".leftbtn");
const RIGHTTBTN = document.querySelector(".rightbtn");

let NEWSWRAP = document.querySelector(".news-content-wrap");

let leftcount = 0;
let rightcount = 0;

LEFTBTN.onclick = function () {
    leftcount++;
    rightcount--;
    NEWSWRAP.style = `transform: translateX(${leftcount * -35}%)`;
};
RIGHTTBTN.onclick = function () {
    leftcount--;
    rightcount++;
    NEWSWRAP.style = `transform: translateX(${rightcount * 35}%)`;
};
