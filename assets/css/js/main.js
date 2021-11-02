/* Please note that this JS file is only for the index.html file */
    
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

var textWrapper = document.querySelector('.header-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({
   targets: '.header-1 .letter',
   translateY: [200,0],
   translateZ: 0,
   opacity: [0,1],
   easing: "easeOutExpo",
   duration: 2000,
   delay: (el, i) => 4800 + 50 * i
});

var textWrapper = document.querySelector('.header-2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
.add({
   targets: '.header-2 .letter',
   translateY: [200,0],
   translateZ: 0,
   opacity: [0,1],
   easing: "easeOutExpo",
   duration: 2000,
   delay: (el, i) => 6000 + 100 * i
});

 TweenMax.to(".wrapper", 0.5, {
   top: "3000%",
   ease: Expo.easeInOut,
   delay: 3.6
});

var tl = new TimelineMax();

tl.from(".loader", 1, {
   scaleY: "0%",
   y: 100,
   ease: Expo.easeInOut,
   delay: 1,
   transformOrigin:"50% 100%"
});

tl.to(".loader", 2, {
   height: "100vh",
   scaleY: "50%",
   ease: Expo.easeInOut,
   transformOrigin:"0% -100%"
});

TweenMax.to(".box", 2, {
y: "-500%",
ease: Expo.easeInOut,
delay: 4.4,
});

var tl = new TweenMax.staggerFrom(".menu > div", 2.8, {
   opacity: 0,
   y: 60, 
   ease: Expo.easeInOut,
   delay: 5.1
}, 0.2);

var tl = new TweenMax.staggerFrom(".hero-container > div", 3.2, { 
   opacity: 0,
   y: 100, 
   ease: Expo.easeInOut,
   delay: 5.4
}, 0.2);

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

new WOW().init();