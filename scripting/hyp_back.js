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


// Text render effect
document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('#INFO');
  const originalHTML = textElement.innerHTML;
  const originalStyles = window.getComputedStyle(textElement);

  // Create a wrapper for the original content
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.width = '100%';
  wrapper.style.height = '100%';

  // Create a container for the animated content
  const animatedContainer = document.createElement('div');
  animatedContainer.style.position = 'absolute';
  animatedContainer.style.top = '0';
  animatedContainer.style.left = '0';
  animatedContainer.style.width = '100%';
  animatedContainer.style.height = '100%';
  animatedContainer.style.display = originalStyles.display;
  animatedContainer.style.flexDirection = originalStyles.flexDirection;
  animatedContainer.style.alignItems = originalStyles.alignItems;
  animatedContainer.style.justifyContent = originalStyles.justifyContent;
  animatedContainer.innerHTML = originalHTML;

  // Function to process nodes recursively
  function processNode(node) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
          const fragment = document.createDocumentFragment();
          node.textContent.split('').forEach(char => {
              const span = document.createElement('span');
              span.textContent = char;
              span.dataset.originalChar = char;
              span.textContent = getRandomChar();
              fragment.appendChild(span);
          });
          node.parentNode.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.childNodes).forEach(processNode);
      }
  }

  // Process all child nodes in the animated container
  Array.from(animatedContainer.childNodes).forEach(processNode);

  // Clear the original element and append the wrapper
  textElement.innerHTML = '';
  textElement.appendChild(wrapper);

  // Append both original and animated content to the wrapper
  const originalContent = document.createElement('div');
  originalContent.innerHTML = originalHTML;
  originalContent.style.visibility = 'hidden';
  wrapper.appendChild(originalContent);
  wrapper.appendChild(animatedContainer);

  function getRandomChar() {
      const alphabet = '-';
      return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  const spans = animatedContainer.querySelectorAll('span[data-original-char]');

 // Create a ScrollMagic controller
 const controller = new ScrollMagic.Controller();

 // Create a ScrollMagic scene
 new ScrollMagic.Scene({
     triggerElement: textElement,
     triggerHook: 0.5, // Trigger when the element is halfway down the viewport
     duration: '100%',  // Duration of the animation
 })
 .on('enter', () => {
  anime({
    targets: spans,
    duration: 4000, // Increase total duration (from 4000 to 8000 milliseconds)
    easing: 'easeInOutQuad',
    delay: (el, i) => i * 200, // Increase staggered delay (from 100 to 200 milliseconds)
    update: function(anim) {
        spans.forEach((span, index) => {
            if (anim.progress < 60 || index > anim.progress / 100 * spans.length) {
                span.textContent = getRandomChar();
            } else {
                span.textContent = span.dataset.originalChar;
            }
        });
    },
    complete: function() {
        textElement.innerHTML = originalHTML; // Restore original HTML after animation
    }
  });
 })
 .addTo(controller); // Add scene to controller
});


var tl = gsap.timeline();
tl.from("#hero h1", {
  opacity: 0,
  duration: 1,
  y: -1000,
  stagger: 0.15
})
tl.from("#hero p", {
  opacity: 0,
  duration: 1,
  x: -1000,
  stagger: -0.3
})

var tl2 = gsap.timeline();
tl2.from("#contdesc h1", {
  y: 100,
  delay: 1,
  opacity: 0,
  duration: 0.7,
})
tl2.from("#contdesc #text1", {
  y: 100,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
})