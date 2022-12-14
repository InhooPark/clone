// 공지 로테이션
const SHOWING_CLASS = "showing";

const firstSlide = document.querySelector(".notice-slide:first-child");

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

// 뉴스 swipe
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

// 스크롤시 텍스트 애니메이션
// parallax.js 써보기

const ANITEXT = document.querySelectorAll('.ani-text');
// 하긴 했는데 두번째는 masonry가 온로드뒤에 정리를 해야 좌표를 제대로 잡는데 그게 안되네

window.addEventListener('scroll', function(){
    ANITEXT.forEach(function(value){
        if(value.offsetTop + window.innerHeight*0.5 < window.pageYOffset){
            value.classList.add('active');
        }
        else{
            value.classList.remove('active');
        }
    })
})