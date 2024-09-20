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

var tl = gsap.timeline();
tl.from(".navbar .container a", {
    delay: 0.5,
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05
})
tl.from("#navbarNav ul li", {
    y: 20,
    opacity: 0,
    duration: 0.3,
    stagger: 0.15
})

gsap.from(".contactTitle h1", {
    delay: 1,
    opacity: 0,
    duration: 0.4,
    scale: 2,
})
gsap.from(".contactTitle p", {
    delay: 1.4,
    opacity: 0,
    duration: 0.4,
    scale: 2,
})

var tl2 = gsap.timeline();
tl2.from(".contactInfo .iconGroup", {
    delay: 1.5,
    x: -70,
    opacity: 0,
    duration: 0.3,
    stagger: 0.25
})

tl2.from(".socialMedia", {
    x: 70,
    opacity: 0,
    duration: 0.3,
})

tl2.from(".submit", {
    x: 70,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3
})