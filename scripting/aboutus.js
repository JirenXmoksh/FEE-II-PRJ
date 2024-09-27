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
    y: 50,
    opacity: 0,
    duration: 0.5,
    scale: 2,
    stagger: 0.05
})
tl2.from("#navbarNav ul li", {
    opacity: 0,
    duration: 0.3,
    scale: 2,
    stagger: 0.15
})
