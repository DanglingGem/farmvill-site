// Hamburger menu
const open = document.querySelector("#open-menu");
const links = document.querySelector(".nav-list");


open.addEventListener("click", function () {
   links.classList.toggle("show-menu");
   
});

$(document).ready(function () {
   // Search Button
   $(function () {
      'use strict';
      $('i').click(function () {
         $(this).next().animate({
            width: '250px'
         });
      });
   });

});


// Cart

/*let count = 0;

const counter = document.getElementById("counter");

document.getElementById("add-animation").ad("click", function () {
   const cl = counter.classList;
   const c = "animated-counter";
   count++;

   counter.innerText = count;
   cl.remove(c, cl.contains(c));
   setTimeout(() =>
   counter.classList.add(".animated-counter")
   ,1)
});*/

