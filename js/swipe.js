var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 
document.addEventListener("DOMContentLoaded", function() {
    initSwipers();
});

function initSwipers() {
    initSwiperAbility();
    initSwiperClients();
}

function initSwiperAbility() {
    var swiperAbility = undefined;
    if (width < 1200) {
    swiperAbility = new Swiper('.ability--swiper_container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
        });  
    }
    else {
        swiperAbility = undefined;

        var abilitySlides = document.querySelectorAll(".ability--swiper_container .swiper-wrapper .swiper-slide");

        [].forEach.call(abilitySlides, function(el) {
            el.classList.remove("swiper-slide");
        });

        var abilityWrapper = document.querySelectorAll(".ability--swiper_container .swiper-wrapper");

        [].forEach.call(abilityWrapper, function(el) {
            el.classList.remove("swiper-wrapper");
        });
    }
}      

function initSwiperClients() {
    var swiperClients = undefined;
    if (width < 1200) {
        swiperClients = new Swiper('.clients--swiper_container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 60,
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            }                    
        });
    }
    else {
        swiperClients = undefined;

        var clientsSlides = document.querySelectorAll(".clients--swiper_container .swiper-wrapper .swiper-slide");

        [].forEach.call(clientsSlides, function(el) {
            el.classList.remove("swiper-slide");
        });

        var clientsWrapper = document.querySelectorAll(".clients--swiper_container .swiper-wrapper");

        [].forEach.call(clientsWrapper, function(el) {
            el.classList.remove("swiper-wrapper");
        });
    }
}