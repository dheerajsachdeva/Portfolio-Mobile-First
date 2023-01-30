const hamburger = document.getElementById("hamburger");
const navlist = document.querySelector(".nav-list");
const navlinks = document.querySelectorAll(".list-item a")

navlist.classList.add("mobilelinks");


hamburger.addEventListener("click", () =>{

navlinks.style.display = "block";



}
)