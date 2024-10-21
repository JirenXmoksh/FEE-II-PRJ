// Greeting section animations //
var headTL = gsap.timeline();
headTL.from("#hero .main .greet", {
  opacity: 0,
  delay: 1,
  duration: 2.5,
})
headTL.from("#hero .main .quote", {
  opacity: 0,
  duration: 1.5,
})

// Greeting section animations //

// Get the button
let mybutton = document.getElementById("returnToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
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

let tl = gsap.timeline({
  scrollTrigger:{
    trigger: ".overlay",
    start: "top 70%",
  }
});
tl.from(".overlay h1", {
  delay: 0.7,
  y: -200,
  duration: 1,
  opacity: 0,
  ease: "expo.out"
})
tl.from(".overlay p", {
  opacity: 0,
  y: -50,
  duration: 0.6,
  ease: "expo.out"
})
tl.from(".overlay .button-container", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "expo.out"
})

gsap.from(".contenthead", {
  scrollTrigger:{
    trigger: "#content",
    start: "top 65%",
    scroller: "body"
  },
  y: -100,
  opacity: 0,
  delay: 0.4,
  duration: 0.6,
  ease: "expo.out"
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