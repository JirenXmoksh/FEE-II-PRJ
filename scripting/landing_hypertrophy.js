
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

// ------ Content animations ------- 

gsap.registerPlugin(ScrollTrigger);

gsap.from("#heading #foothead3", {
  delay: 1,
  y: -200,
  duration: 0.8,
  ease: "elastic.inOut"
})
gsap.from("#back h3", {
  delay: 1,
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
gsap.from("#backContent p, #backContent .xploreBtn",{
  delay: 1.5,
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
} )

let tlchest = gsap.timeline({
    scrollTrigger:{
      trigger: "#chest",
      start: "top 60%"
    }
  })
tlchest.from("#chest h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tlchest.from("#chestContent p, #chestContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

let tlbicep = gsap.timeline({
    scrollTrigger:{
      trigger: "#biceps",
      start: "top 60%"
    }
  })
tlbicep.from("#biceps h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tlbicep.from("#bicepContent p, #bicepContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

let tltricep = gsap.timeline({
    scrollTrigger:{
      trigger: "#triceps",
      start: "top 60%"
    }
  })
tltricep.from("#triceps h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tltricep.from("#tricepContent p, #tricepContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

let tlshld = gsap.timeline({
    scrollTrigger:{
      trigger: "#shoulders",
      start: "top 60%"
    }
  })
tlshld.from("#shoulders h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tlshld.from("#shoulderContent p, #shoulderContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

let tlquads = gsap.timeline({
    scrollTrigger:{
      trigger: "#quads",
      start: "top 60%"
    }
  })
tlquads.from("#quads h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tlquads.from("#quadsContent p, #quadsContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

let tlhams = gsap.timeline({
    scrollTrigger:{
      trigger: "#hamstrings",
      start: "top 60%"
    }
  })
tlhams.from("#hamstrings h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tlhams.from("#hamstringsContent p, #hamstringsContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

let tlcalves = gsap.timeline({
    scrollTrigger:{
      trigger: "#calves",
      start: "top 60%"
    }
  })
tlcalves.from("#calves h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tlcalves.from("#calvesContent p, #calvesContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

let tlcore = gsap.timeline({
    scrollTrigger:{
      trigger: "#core",
      start: "top 60%"
    }
  })
tlcore.from("#core h3", {
  x: -500,
  opacity: 0,
  duration: .7,
  ease: "expo.out"
})
tlcore.from("#coreContent p, #coreContent .xploreBtn",{
  x: 500,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out"
})

// ------Content Animations ------


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