const arrowBtn = document.getElementById("arrow-btn");
const sideNav = document.getElementById("side-nav");

arrowBtn.addEventListener("click", () => {
  sideNav.classList.toggle("opened");
});
