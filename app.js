const open = document.querySelector("#open-menu");
const links = document.querySelector(".nav-list");



open.addEventListener("click", function () {
   links.classList.toggle("show-menu");
});
