// Hamburger menu
const open = document.querySelector("#open-menu");
const links = document.querySelector(".nav-list");


open.addEventListener("click", function () {
   links.classList.toggle("show-menu");
   
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

// Order Information
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
   const btn = question.querySelector(".question-btn");
  // console.log(btn);

   btn.addEventListener("click", function () {
     //console.log(question);

      questions.forEach(function (item) {
        if (item != question) {
           item.classList.remove("show-answer");
        }
     });

      question.classList.toggle("show-answer");
  });
});




