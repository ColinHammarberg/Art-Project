$("#toggle").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

// navigation end here

// navigation animations here

TweenMax.from("#brand", 1, {
    delay: 0.6,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.8,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

anime.timeline()

new WOW().init();