document.addEventListener("DOMContentLoaded", function () {
  const containerEl = document.querySelector(".container");

  const mixer = mixitup(containerEl, {
    selectors: {
      target: ".mix",
    },
    animation: {
      duration: 500,
    },
  });
  // Optional: Add active class to control buttons
  const controlButtons = document.querySelectorAll(
    "#rotatingServices .controls button"
  );

  controlButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      controlButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
});
