// Search for an input element with a specific placeholder text
const inputField = document.querySelector('input[placeholder="Search..."]');

// Change the value of the input field
if (inputField) {
  inputField.value = "chicken";
}
// Find the input field by its ID
const searchInput = document.getElementById("searchInput");

// Change the placeholder text
searchInput.placeholder = "buy.html";
// Create a new input field dynamically
const input = document.createElement("input");

// Set the placeholder text
input.placeholder = "Search for something...";

// Append the input field to the body or a specific container
document.body.appendChild(input);
// Get the input field
const searchInput = document.getElementById("searchInput");

// Add an event listener to handle user focus
searchInput.addEventListener("focus", function() {
  searchInput.placeholder = "Start typing to search...";
});

// Add another event listener to handle when the input loses focus
searchInput.addEventListener("blur", function() {
  searchInput.placeholder = "Search here...";
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function setSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Add event listeners to dots for manual control
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => setSlide(index));
});

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize first slide
showSlide(currentSlide);
