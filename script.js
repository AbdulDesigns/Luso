"use important";

//navigation menu toggling

let menu = document.querySelector(".menu");
let navLists = document.querySelector(".navList");
let menuIcon = document.getElementById("menu-icon");

console.log("hello", menu, navLists);

//closing functionality with icon change
function changeIcon() {
  if (navLists.classList.contains("menu-visible")) {
    menuIcon.innerHTML = `<i class="bx bx-x bx-md menu"></i>`;
    console.log(menuIcon);
  } else {
    menuIcon.innerHTML = `<i class="bx bx-menu bx-md menu"></i>`;
  }
}

//menu drawer open functionality
menuIcon.addEventListener("click", () => {
  //   navLists.style.transform = "translate(0,0)";
  navLists.style.transition = "transform 0.5s ease";
  //   setTimeout(() => {
  //     navLists.style.transform = "translate(600px, 0)";
  //   }, 20000);
  console.log("clicking");
  navLists.classList.toggle("menu-visible");
  changeIcon();
});

