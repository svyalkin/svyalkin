"use strict"

var content, header, navigation, hamburgerBtn, closeBtn;

content = document.querySelector(".content");
header = document.querySelector(".header");
navigation = document.querySelector(".navigation");
hamburgerBtn = document.querySelector(".hamburger_btn");
closeBtn = document.querySelector(".close_btn");

function getWidth() {
    return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
} 

var menu = function() {
    hamburgerBtn.addEventListener("click", function(){
        var width;
        width = getWidth();
        hamburgerBtn.style.display = "none";
        closeBtn.style.display = "block";
        navigation.style.display = "block";
        if (width >= 1024) {
            header.classList.add("background_header");
        }
        else if (width <= 1023 && width >= 768) {
            header.classList.add("background_header");
            content.classList.add("blur");
        }
        else if (width < 768) {
            content.classList.add("blur");
        }
    });
    closeBtn.addEventListener("click", function(){
        var width;
        width = getWidth();
        closeBtn.style.display = "none";
        navigation.style.display = "none";
        hamburgerBtn.style.display = "block";
        if (width >= 1024) {
            header.classList.remove("background_header");
        }
        else if (width <= 1023 && width >= 768) {
            header.classList.remove("background_header");
            content.classList.remove("blur");
        }
        else if (width < 768) {
            content.classList.remove("blur");
        }
    });
}

var navigationLinks = navigation.querySelectorAll("li a");

var navigationLinksClick = function() {
    for (var i = 0; i < navigationLinks.length; i++){
        navigationLinks[i].addEventListener("click", function() {
            var width;
            width = getWidth();
            if (width <= 1023 && width >= 768) {
                navigation.style.display = "none";
                closeBtn.style.display = "none";
                hamburgerBtn.style.display = "block";
                content.classList.remove("blur");
                header.classList.remove("background_header");
            }
            else if (width < 768) {
                closeBtn.style.display = "none";
                hamburgerBtn.style.display = "block";
                navigation.style.display = "none";
                content.classList.remove("blur");
            }
        })
    }
};

document.addEventListener("DOMContentLoaded", function(){
    var width;
    width = width;
    navigation.style.display = "none";
    menu();
    navigationLinksClick();
    if (width < 768) {
        header.classList.add("background_header");
    }
});

window.addEventListener("resize", function(){
    if (this.innerWidth >= 1200) {
        window.location.reload(false);
    }
    else if (this.innerWidth <= 1199 && this.innerWidth >= 1024) {
        header.classList.remove("background_header");
    }
    else if (this.innerWidth <= 1023 && this.innerWidth >= 768) {
        header.classList.remove("background_header");
        navigationLinksClick();
    }
    else if (this.innerWidth < 768) {
        header.classList.add("background_header");
        navigationLinksClick();
    }
});