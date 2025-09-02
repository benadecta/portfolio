// Typewriter Effect for Hero Section
const typewriterText = [
  "Business Analyst",
  "Scrum Master",
  "Project Coordinator",
  "Associate Project Manager"
];
let typeIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 2000;
const typewriterElement = document.getElementById("typewriter");

function type() {
  if (charIndex < typewriterText[typeIndex].length) {
      typewriterElement.textContent += typewriterText[typeIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
  } else {
      setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
      typewriterElement.textContent = typewriterText[typeIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
  } else {
      typeIndex = (typeIndex + 1) % typewriterText.length;
      setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 500));

// Scroll Reveal Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
      }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
  } else {
      scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Skill Badge Click Pulse
document.querySelectorAll(".skill").forEach(skill => {
  skill.addEventListener("click", () => {
      skill.classList.add("clicked");
      setTimeout(() => skill.classList.remove("clicked"), 600);
  });
});

// Navbar Toggle for Responsiveness
// Responsive
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
  document.body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "auto";
});