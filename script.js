// ! the following code is related to drop-down list ?
// ! the drop-down list will come in the scene when user will hover over the specific link ?

document.addEventListener("DOMContentLoaded", function () {
  let dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    let link = dropdown.querySelector(".dropdown-link");
    let content = dropdown.querySelector(".dropdown-content");

    // Function to show dropdown smoothly
    function showDropdown() {
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.transform = "translateY(0)";
      content.style.transition =
        "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
    }

    // Function to hide dropdown smoothly
    function hideDropdown() {
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.transform = "translateY(-10px)";
    }

    // Show dropdown on hover
    link.addEventListener("mouseenter", showDropdown);
    content.addEventListener("mouseenter", showDropdown);

    // Hide dropdown when mouse leaves both link & dropdown
    dropdown.addEventListener("mouseleave", hideDropdown);
  });
});

// ! image slider code for infinitely sliding images ?

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
let autoSlide;

function updateSlider() {
  slider.style.transform = `translateX(${-index * 100}%)`;
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlider();
  }, 2200);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

slides.forEach((img) => {
  img.addEventListener("mouseenter", stopAutoSlide);
  img.addEventListener("mouseleave", startAutoSlide);
});

startAutoSlide();

