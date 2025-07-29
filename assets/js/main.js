$(document).ready(function(){
    $("#orp-mobileNav_button").on("click", function() {
        $("#orp-mobileDrawer").toggleClass("active");
    });

    $(".orp-mobileDrawer_close").on("click", function() {
        $("#orp-mobileDrawer").toggleClass("active");
    });

    $("a[href='#goUp']").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
})

var orp_swiper = new Swiper(".orp-sponsors_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },

    breakpoints: {
        980: {
            slidesPerView: 4,
            spaceBetween: 28,
        },
    },
});