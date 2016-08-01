var navigation = document.querySelector(".navigation");
var hamburgerBtn = document.querySelector(".hamburger_btn");
var closeBtn = document.querySelector(".close_btn");
var content = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", function(){ 
    navigation.style.display = "none";
    //hide navigation menu
    hamburgerBtn.addEventListener("click",function() {
        hamburgerBtn.style.display = "none";
        closeBtn.style.display = "block";
        navigation.style.display = "block";
        content.classList.add("blur");
    });
    closeBtn.addEventListener("click",function() {
        closeBtn.style.display = "none";
        hamburgerBtn.style.display = "block";
        navigation.style.display = "none";
        content.classList.remove("blur");
    });
 }, false);

var header = document.querySelector(".header");
function width(){
   return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
}


document.addEventListener("DOMContentLoaded", function() {
    if (width() < 768) {
        header.classList.add("-background_header");
    }
    else if (width() < 1024) {
        header.classList.remove("-background_header");
    }
    else if (width() < 1200) {
        header.classList.add("-background_header");
    }
    else {
        header.classList.remove("-background_header");
    }
});