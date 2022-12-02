// 공지 로테이션
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

// 뉴스 좌우클릭 제한이 안걸려있음 LOOP도 없고 구림 다음엔 제대로
slide();
setInterval(slide, 3000);

const LEFTBTN = document.querySelector(".leftbtn");
const RIGHTTBTN = document.querySelector(".rightbtn");

let NEWSWRAP = document.querySelector(".news-content-wrap");

let leftcount = 0;
let rightcount = 0;
let moveP;

LEFTBTN.onclick = function () {
    moveP = document.querySelector('.news-content').offsetWidth;
    console.log(moveP);
    // 마진값을 더해줘도 왜 차이가 나는걸까 나중에
    leftcount++;
    rightcount--;
    NEWSWRAP.style = `transform: translateX(${-(leftcount * moveP + 50)}px)`;
};
RIGHTTBTN.onclick = function () {
    moveP = document.querySelector('.news-content').offsetWidth;
    console.log(moveP);
    leftcount--;
    rightcount++;
    NEWSWRAP.style = `transform: translateX(${(rightcount * moveP + 50)}px)`;
};

// 스크롤시 텍스트 애니메이션
// parallax.js 써보기
