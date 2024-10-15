const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

// Password validation function
function validatePassword(password) {
    if (password.length < 10) return "Password must be at least 10 characters long.";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter.";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
    if (!/[0-9]/.test(password)) return "Password must contain at least one digit.";
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) return "Password must contain at least one special character.";
    return null;
}

// Form validation and localStorage functionality
const registrationForm = document.getElementById('registrationForm');
const passwordError = document.getElementById('passwordError');

// Function to save form data to localStorage
function saveFormData() {
    const formData = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value
    };
    localStorage.setItem('registrationFormData', JSON.stringify(formData));
    console.log('Data saved:', formData);
}

// Function to load form data from localStorage
function loadFormData() {
    const savedData = localStorage.getItem('registrationFormData');
    console.log('Saved data found:', savedData);
    if (savedData) {
        const formData = JSON.parse(savedData);
        document.getElementById('full-name').value = formData.fullName || '';
        document.getElementById('email').value = formData.email || '';
        console.log('Data loaded into form:', formData);
    }
}

// Load saved data when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    loadFormData();
    setupEventListeners();
});

// Set up event listeners for form inputs
function setupEventListeners() {
  document.getElementById('full-name').addEventListener('input', saveFormData);
  document.getElementById('email').addEventListener('input', saveFormData);
  
  passwordInput.addEventListener('input', function() {
      const errorMessage = validatePassword(this.value);
      passwordError.textContent = errorMessage || '';
      passwordError.style.display = errorMessage ? 'block' : 'none';
  });

  registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting immediately

      const errorMessage = validatePassword(passwordInput.value);
      if (errorMessage) {
          passwordError.textContent = errorMessage;
          passwordError.style.display = 'block';
      } else {
          // Show confirmation dialog
          const isConfirmed = confirm("Are you sure you want to submit this form?");
          
          if (isConfirmed) {
              // User clicked "OK" (Yes)
              localStorage.removeItem('registrationFormData');
              console.log('Form submitted, localStorage cleared');
              this.submit(); // Actually submit the form
          } else {
              // User clicked "Cancel" (No)
              console.log('Form submission cancelled by user');
          }
      }
  });
}
// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    var tl = gsap.timeline();
    tl.from(".hero-section", {
        y: -200,
        opacity: 0,
        duration: 0.5,
        delay: 0.6,
    })
    .from("form h2", {
        scale: 2,
        opacity: 0,
        duration: 0.5,
    })
    .from("form input", {
        scale: 2,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
    })
    .from("form button", {
        scale: 2,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
    });

    var tl2 = gsap.timeline();
    tl2.from(".navbar .container a", {
        delay: 0.5,
        scale: 2,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05
    })
    .from("#navbarNav ul li", {
        opacity: 0,
        scale: 2,
        duration: 0.3,
        stagger: 0.15
    });

    gsap.registerPlugin(ScrollTrigger);
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            start: "top 60%",
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
});

// Scroll to top functionality
let mybutton = document.getElementById("returnToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

