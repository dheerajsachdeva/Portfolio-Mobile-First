const hamburger = document.getElementById("hamburger");
const navlist = document.querySelector(".nav-list");
let link = document.querySelectorAll(".navlist-a");
let xicon = document.querySelector(".x-close");
let modal = document.querySelector(".modal");


hamburger.addEventListener("click", () =>{
hamburger.classList.toggle("active");
navlist.classList.toggle("active");

}
);

