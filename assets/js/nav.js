// navigation variables
const search_btn = document.querySelector(".search_btn");
const close_btn = document.querySelector(".close_btn");
const search_box = document.querySelector(".search_box");
const navigation = document.querySelector(".navigation");
const manu_toggle = document.querySelector(".manu_toggle");
const header = document.querySelector("header");
const open_manu = document.querySelector(".open_manu");
const colse_manu = document.querySelector(".colse_manu");

search_btn.addEventListener("click", () => {
  search_box.classList.add("searchBox_active");
  close_btn.classList.add("search_btn_active");
  search_btn.classList.add("search_btn_active");
  manu_toggle.classList.add("hide");
  header.classList.remove("open");
});
close_btn.addEventListener("click", () => {
  search_box.classList.remove("searchBox_active");
  close_btn.classList.remove("search_btn_active");
  search_btn.classList.remove("search_btn_active");
  manu_toggle.classList.remove("hide");
});
open_manu.addEventListener("click", () => {
  header.classList.add("open");
  colse_manu.classList.remove("d-none");
  open_manu.classList.add("d-none");
});
colse_manu.addEventListener("click", () => {
  header.classList.remove("open");
  colse_manu.classList.add("d-none");
  open_manu.classList.remove("d-none");
});

// navbar window scroll events

var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
};
