let hamburger = document.querySelector(".mobile_navigation_hamburger");
let closeBtn = document.querySelector(".mobile_navigation_cross");
let linksArray = document.querySelectorAll(".mobile_navigation_panel_link");

function openPanel() {
  gsap.to(".mobile_navigation_panel", {
    left: 0,
    duration: 1,
    ease: "expo.out",
  });
}

// Add click event to the hamburger
hamburger.addEventListener("click", function () {
  gsap.to(".mobile_navigation_panel", {
    left: 0,
    duration: 1,
    ease: "expo.out",
  });

  gsap.fromTo(
    linksArray,
    {
      opacity: 0,
      yPercent: 100,
      rotation: -20,
    },
    {
      stagger: 0.1,
      opacity: 1,
      yPercent: 0,
      rotation: 0,
      duration: 1.75,
      ease: "expo.out",
      delay: 1.5,
    }
  );
});

// Add click event to the cross
closeBtn.addEventListener("click", function () {
  gsap.to(".mobile_navigation_panel", {
    left: "-100vw",
    duration: 1,
    ease: "expo.out",
  });
});

/* Slider */
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    perPage: 4,
    gap: 10,
    rewind: true,
    pagination: false,
  }).mount();
});
