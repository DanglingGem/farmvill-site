// Hamburger menu
const open = document.querySelector("#open-menu");
const links = document.querySelector(".nav-list");


open.addEventListener("click", function () {
   links.classList.toggle("show-menu");
   
});

// Search Button
$(function () {
   'use strict';
   $('i').click(function () {
      $(this).next().animate({
         width: '250px'
      });
   });
});
