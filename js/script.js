document.addEventListener("DOMContentLoaded", function () {
  // Fade in animation for section titles, paragraphs, and lists
  document.querySelectorAll(".animate__fadeIn").forEach(function (element) {
    element.style.opacity = "1";
    element.classList.add("animate__animated", "animate__fadeIn");
  });

  // Project details toggle animation
  const projectDetails = document.querySelectorAll(".project-details");

  projectDetails.forEach(function (detail) {
    detail.previousElementSibling.addEventListener("click", function () {
      detail.classList.toggle("visible");
    });
  });

  // Section content reveal on scroll
  const sections = document.querySelectorAll(".section p, .section ul");

  function revealOnScroll() {
    sections.forEach(function (section) {
      const position = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight) {
        section.classList.add("animate__animated", "animate__fadeIn");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // Social Icons Bounce Animation
  const socialIcons = document.querySelector(".social-icons");

  function bounceIcons() {
    socialIcons.classList.add("animate__animated", "animate__rubberBand");
  }

  setTimeout(bounceIcons, 1000); // Delay for a second before the bounce animation
});