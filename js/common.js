
$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>div');
$('footer').load('./inc.html footer>div');

// 업버튼 fixed, scale 애니메이션
const scTopbtn = document.querySelector('.upbtnside');
const DISABLE = 'disable'

const scSubMenu = document.querySelector('.subpage-header');
const SUBSCROLL = 'sub-scroll';

let header = document.querySelector('header');
let headerHeight = header.offsetHeight;


window.addEventListener('scroll', function() {
    let scroll = window.scrollY;

    if(scroll >= headerHeight){
        scTopbtn.classList.add(DISABLE);
        scSubMenu.classList.add(SUBSCROLL);
    }
    else{
        scTopbtn.classList.remove(DISABLE);
        scSubMenu.classList.remove(SUBSCROLL);
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
const mailBtn = document.getElementById('emailBtn');
const mailCheckText = document.querySelector('.email-check-text')

mailBtn.addEventListener('mouseup', function() {
    const mailCheck = document.getElementById('email').value;
    check = /\S+@+\S+.+\S/;
    if(check.test(mailCheck)){
        mailCheckText.textContent = `입력하신 이메일 주소(${mailCheck})로 확인 메일을 보내드렸습니다.`;
    }
    else if(mailCheck == ''){
        mailCheckText.textContent = `이메일 주소를 입력하세요.`;
    }
    else{
        mailCheckText.textContent = `잘못된 이메일 주소입니다.`;
    }
})


