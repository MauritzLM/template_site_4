
// Navigation toggle
const navigation = document.querySelector("#cs-navigation");
const menuToggle = document.querySelector(".cs-toggle");

// add aria expanded properties*

menuToggle.addEventListener("click", () => {
     menuToggle.classList.toggle("cs-active");
     navigation.classList.toggle("cs-active");
});