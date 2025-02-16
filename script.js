"use important";

//navigation menu toggling

let menu = document.querySelector(".menu");
let navLists = document.querySelector(".navList");

console.log("hello", menu, navLists);

menu.addEventListener("click", () => {
  navLists.style.transform = "translate(0,0)";
  navLists.style.transition = "transform 0.5s ease-in";
  //   setTimeout(() => {
  //     navLists.style.transform = "translate(600px, 0)";
  //   }, 20000);
});
