// script.js: Controls the testimonial slider
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide"); // All slide elements
  const nextBtn = document.getElementById("next");    // Next button
  const prevBtn = document.getElementById("prev");    // Previous button
  let currentIndex = 0; // Start with the first slide

  // Function to show the slide at 'index'
  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove("active"));
    // Wrap index if out of range
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }
    // Show the current slide
    slides[currentIndex].classList.add("active");
  }

  // Move to next slide
  nextBtn.addEventListener("click", function() {
    showSlide(currentIndex + 1);
  });

  // Move to previous slide
  prevBtn.addEventListener("click", function() {
    showSlide(currentIndex - 1);
  });
});