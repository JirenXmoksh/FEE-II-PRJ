// Get the button
let mybutton = document.getElementById("returnToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var tl2 = gsap.timeline();
tl2.from(".navbar .container a", {
    delay: 0.5,
    scale: 2,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05
})
tl2.from("#navbarNav ul li", {
    opacity: 0,
    scale: 2,
    duration: 0.3,
    stagger: 0.15
})

// CONTENT TIMELINE
gsap.from(".header", {
  opacity: 0,
  scale: 2,
  duration: 0.7,
  ease: "bounce.out"
})
var bstl = gsap.timeline();
bstl.from(".main", {
  opacity: 0,
  duration: 1,
})
bstl.from("#basic1", {
  opacity: 0,
  y: -1000,
  duration: 0.4,
  ease: "expo.out"
})
bstl.from("#basic1 .plan-name", {
  opacity: 0,
  y: -700,
  duration: 0.4,
  ease: "expo.out"
})

bstl.from("#basic2", {
  opacity: 0,
  x: 700,
  duration: 0.4,
  ease: "expo.out"
})
bstl.from("#basic2 ul li", {
  opacity: 0,
  x: 700,
  duration: 0.7,
  ease: "expo.out",
  stagger: 0.15
})

var stTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".standard",
    scroller: "body",
    start: "top 70%",
  }
})
stTl.from("#standard1", {
  opacity: 0,
  y: -1000,
  duration: 1,
  ease: "expo.out"
})
stTl.from("#standard1 .plan-name", {
  opacity: 0,
  y: -700,
  duration: 0.4,
  ease: "expo.out"
})
stTl.from("#standard2", {
  opacity: 0,
  x: 700,
  duration: 0.4,
  ease: "expo.out"
})
stTl.from("#standard2 ul li", {
  opacity: 0,
  x: 700,
  duration: 0.7,
  ease: "expo.out",
  stagger: 0.15
})

var prmTl = gsap.timeline({
  scrollTrigger:{
    trigger: ".premium",
    scroller: "body",
    start: "top 70%",
  }
})
prmTl.from("#premium1", {
  opacity: 0,
  y: -1000,
  duration: 1,
  ease: "expo.out"
})
prmTl.from("#premium1 .plan-name", {
  opacity: 0,
  y: -700,
  duration: 0.4,
  ease: "expo.out"
})
prmTl.from("#premium2", {
  opacity: 0,
  x: 700,
  duration: 0.4,
  ease: "expo.out"
})
prmTl.from("#premium2 ul li", {
  opacity: 0,
  x: 700,
  duration: 0.7,
  ease: "expo.out",
  stagger: 0.15
})

// ------ footer animation -------
gsap.registerPlugin(ScrollTrigger);
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#footer",
    start: "top 60%", // Adjust as necessary
  }
});

tl3.from("#footer h1", {
  scale: 3,
  opacity: 0,
  duration: 1,
  ease: "bounce.inOut"
})
.from("#footer h3", {
  scale: 0,
  x: -560,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
  ease: "expo.out"
})
.from("#footer ul li", {
  scale: 0,
  x: -500,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
  ease: "expo.out"
})
.from("#footer img", {
  scale: 0,
  x: -500,
  opacity: 0,
  duration: 0.7,
  stagger: 0.15,
  rotate: 360,
  ease: "expo.out",
});

