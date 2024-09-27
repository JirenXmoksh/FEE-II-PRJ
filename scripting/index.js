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

let tl = gsap.timeline();
tl.from(".overlay h1", {
  delay: 0.7,
  y: -400,
  scale: 2,
  duration: 0.6,
  opacity: 0
})
tl.from(".overlay p", {
  y: -500,
  opacity: 0,
  scale: 2,
  duration: 0.6
})
tl.from(".overlay div", {
  scale: 2,
  duration: 0.6,
  opacity: 0,
  stagger: 0.15,
})