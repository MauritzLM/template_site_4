
// Navigation toggle
const navigation = document.querySelector("#cs-navigation");
const menuToggle = document.querySelector(".cs-toggle");

// add aria expanded properties*

// remove active class when clicking on a mobile link
window.addEventListener("click", (e) => {
     if (e.target.matches("a")) {
          menuToggle.classList.remove("cs-active");
          navigation.classList.remove("cs-active");
     }
});

menuToggle.addEventListener("click", () => {
     menuToggle.classList.toggle("cs-active");
     navigation.classList.toggle("cs-active");
});

