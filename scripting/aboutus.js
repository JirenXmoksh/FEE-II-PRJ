// Get the button
let mybutton = document.getElementById("returnToTop");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "none";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

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
});
tl2.from("#navbarNav ul li", {
    opacity: 0,
    duration: 0.3,
    scale: 2,
    stagger: 0.15
});
tl2.from("#about-head", {
    x: 200,
    opacity: 0,
});

// Animate about-content sections
tl2.from("#section-1", { x: 200, opacity: 0 });
tl2.from("#section-2", { x: 200, opacity: 0 });
tl2.from("#section-3", { x: 200, opacity: 0 });
tl2.from("#section-4", { x: 200, opacity: 0 });
tl2.from("#section-5", { x: 200, opacity: 0 });
tl2.from("#section-6", { x: 200, opacity: 0 });
tl2.from("#section-7", { x: 200, opacity: 0 });
tl2.from("#section-8", { x: 200, opacity: 0 });
tl2.from("#section-9", { x: 200, opacity: 0 });
tl2.from("#section-10", { x: 200, opacity: 0 });


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