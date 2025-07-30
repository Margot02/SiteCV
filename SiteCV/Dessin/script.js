//menu deroulant code
var menu = document.querySelector(".menu");
var menu_deroulant = document.querySelector(".menu-deroulant");
var menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-liste");
menu_deroulant.onclick = function () {
  menu_deroulant.classList.toggle("active");
  menuList.classList.toggle("active");
  menu.classList.toggle("deroulant");
  menuIcon.classList.toggle("hide");
};
