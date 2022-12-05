let keyword = document.querySelectorAll('.search-content');

function wordSearch(){
    let search_query = document.getElementById("search-box").value;

    for (var i = 0; i < keyword.length; i++) {
        if(keyword[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            keyword[i].classList.remove("is-hidden");
        } else {
            keyword[i].classList.add("is-hidden");
        }
    }
}

let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('search-box');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(wordSearch, typeInterval);
});