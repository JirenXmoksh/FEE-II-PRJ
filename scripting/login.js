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

// Toggle Password

// Get the password input and toggle button elements
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

// Add click event listener to the toggle button
togglePasswordButton.addEventListener('click', function() {
    // Toggle the type attribute of the password input
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the eye / eye-slash icon
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

var tl = gsap.timeline();
tl.from(".hero-section", {
  y: -200,
  opacity: 0,
  duration: 0.5,
  delay: 0.6,
})
tl.from("form h2", {
  scale: 2,
  opacity: 0,
  duration: 0.5,
})
tl.from("form input", {
  scale: 2,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
})
tl.from("form button", {
  scale: 2,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
})

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