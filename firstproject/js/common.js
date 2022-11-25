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
})



