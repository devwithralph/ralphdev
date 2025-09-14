const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    // past the top
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Review Pop up
const review = document.querySelector(".reviewContainer");

function addReviewBtn() {
  review.classList.add("show");
}

function closeReviewbtn() {
  // review.classList.add("hide");
  review.classList.remove("show");
}

// Header Animation
document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".hero-image-box");
  heroImg.classList.add("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-box");
  heroText.classList.add("show");
});
// About Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // Optional: uncomment if you want it to animate only once
        // observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll(".from-left, .from-right")
  .forEach((el) => observer.observe(el));

  // Hamburger
const menubtn = document.querySelector('.menu-btn');
const hammenu = document.querySelector('.hamburger');

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("active");
  hammenu.classList.toggle("open");
})