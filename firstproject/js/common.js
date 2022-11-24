const scTopbtn = document.querySelector('.upbtnside');
const DISABLE = 'disable'
/* const ABLE = 'able' */


window.addEventListener('scroll', function() {
    let scroll = window.scrollY;

    if(scroll >= 200){
        scTopbtn.classList.add(DISABLE);
        /* scTopbtn.classList.remove(ABLE); */
    }
    else{
        scTopbtn.classList.remove(DISABLE);
        /* scTopbtn.classList.add(ABLE); */
    }
})
