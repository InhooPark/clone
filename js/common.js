$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div", head);
$("footer").load("./inc.html footer>div");

// 업버튼 fixed, scale 애니메이션
const scTopbtn = document.querySelector(".upbtnside");
const DISABLE = "disable";

const scSubMenu = document.querySelector(".subpage-header");
const SUBSCROLL = "sub-scroll";

let header = document.querySelector("header");
let headerHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
    let scroll = window.scrollY;

    if (scroll >= headerHeight) {
        scTopbtn.classList.add(DISABLE);
        /* scSubMenu.classList.add(SUBSCROLL); */
    } else {
        scTopbtn.classList.remove(DISABLE);
        /* scSubMenu.classList.remove(SUBSCROLL); */
    }
});

// 업버튼 스무스하게 위로 올라가기
document.querySelector(".upbtn").addEventListener("mouseup", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// 뉴스레터 판정
const mailBtn = document.getElementById("emailBtn");
const mailCheckText = document.querySelector(".email-check-text");

mailBtn.addEventListener("mouseup", function () {
    const mailCheck = document.getElementById("email").value;
    check = /\S+@+\S+.+\S/;
    if (check.test(mailCheck)) {
        mailCheckText.textContent = `입력하신 이메일 주소(${mailCheck})로 확인 메일을 보내드렸습니다.`;
    } else if (mailCheck == "") {
        mailCheckText.textContent = `이메일 주소를 입력하세요.`;
    } else {
        mailCheckText.textContent = `잘못된 이메일 주소입니다.`;
    }
});


function indexTest(){
    if (document.location.href.split("/")[3] == "index.html") {
        $(".main-menu > ul > li").find(">a").css("color", "black");
        localStorage.clear();
    }
}

let idx = localStorage.idx;
function head() {
    console.log();
    $(".main-menu > ul > li").eq(idx).find(">a").css("color", "red");
    indexTest();

    $(".main-menu > ul > li").click(function () {
        idx = $(this).index();
        localStorage.idx = idx;
    });
}
//이거 나중에 css값 변경이 아니라 클래스 추가로 바꾸고 페이지별로 본인li에 적용해둬야할듯
//이유는 url 타고 접속할때도 뜨게 만들고 싶기 때문
