// For menu bar

const hamburger = document.getElementById('hamburger');
const navlist = document.querySelector('.nav-list');
const link = document.querySelectorAll('.navlist-a');
const xicon = document.querySelector('.x-close');


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navlist.classList.toggle('active');
});

link.forEach((e) => {
  e.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navlist.classList.remove('active');
  });
});

xicon.addEventListener('click', () => {
  navlist.classList.toggle('active');
  hamburger.classList.remove('active');
});



// For pop up 
const pdetails = [
  {
    pid: "1",
    pname: "Tonic",
    pnamedetails: "Canopy",
    pnamedetails1: "BackEnd Dev",
    pnamedate: "2015",
    pdescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum quod minima animi sunt molestias maiores perferendis facilis? Modi, fuga. Deleniti nihil, aut blanditiis corrupti fugit ducimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum",
    pdescription1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    pimage: "./img/workimg/work1.svg",
    ptech: ['html', 'css', 'javascript'],
    plive: "https://dheerajsachdeva.github.io/Portfolio-Mobile-First/",
    psource: "https://github.com/dheerajsachdeva/Portfolio-Mobile-First/tree/animation",
  },

  {
    pid: "2",
    pname: "Tonic",
    pnamedetails: "Canopy",
    pnamedetails1: "BackEnd Dev",
    pnamedate: "2015",
    pdescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum quod minima animi sunt molestias maiores perferendis facilis? Modi, fuga. Deleniti nihil, aut blanditiis corrupti fugit ducimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum",
    pdescription1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    pimage: "./img/workimg/work2.svg",
    ptech: ['html', 'css', 'javascript'],
    plive: "https://dheerajsachdeva.github.io/Portfolio-Mobile-First/",
    psource: "https://github.com/dheerajsachdeva/Portfolio-Mobile-First/tree/animation",
  },

  {
    pid: "3",
    pname: "Tonic",
    pnamedetails: "Canopy",
    pnamedetails1: "BackEnd Dev",
    pnamedate: "2015",
    pdescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum quod minima animi sunt molestias maiores perferendis facilis? Modi, fuga. Deleniti nihil, aut blanditiis corrupti fugit ducimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum",
    pdescription1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    pimage: "./img/workimg/work3.svg",
    ptech: ['html', 'css', 'javascript'],
    plive: "https://dheerajsachdeva.github.io/Portfolio-Mobile-First/",
    psource: "https://github.com/dheerajsachdeva/Portfolio-Mobile-First/tree/animation",
  },

  {
    pid: "4",
    pname: "Tonic",
    pnamedetails: "Canopy",
    pnamedetails1: "BackEnd Dev",
    pnamedate: "2015",
    pdescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum quod minima animi sunt molestias maiores perferendis facilis? Modi, fuga. Deleniti nihil, aut blanditiis corrupti fugit ducimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae blanditiis, tenetur dolor rerum",
    pdescription1: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    pimage: "./img/workimg/work4.svg",
    ptech: ['html', 'css', 'javascript'],
    plive: "https://dheerajsachdeva.github.io/Portfolio-Mobile-First/",
    psource: "https://github.com/dheerajsachdeva/Portfolio-Mobile-First/tree/animation",
  }
]

// FOR PAGE

const cards = document.querySelector(".cards")

cards.innerHTML = "";

for (let i = 0; i < pdetails.length; i++) {

  let tech1 = "";
  pdetails[i].ptech.forEach((ptech) => {
    tech1 += `<li>${ptech}</li>`;

  }
  );

  cards.innerHTML += ` 
  <div class="items work1">
  <div class="workimg"> <img      id="work1-img-mob" src="${pdetails[i].pimage}" alt="Work Image Screenshot1">
      <img id="work1-img-desk" src="${pdetails[i].pimage}" alt="Work Image Screenshot1">

      </div>

      <div class="work1-text">
      <h1>${pdetails[i].pname}</h1>
      <ul class="work-ul">
          <li>
              <h2>${pdetails[i].pnamedetails}</h2>
          </li>

          <li>
              <h3><img src="./img/workimg/Counter.svg"> &nbsp; &nbsp; ${pdetails[i].pnamedetails1}&nbsp; &nbsp; <img
                      src="./img/workimg/Counter.svg"> &nbsp; &nbsp;${pdetails[i].pnamedate} </h3>
          </li>
      </ul>

      <p> ${pdetails[i].pdescription1}</p>

      <ul class="tech work-tags">
      ${tech1}
      </ul>

      <button class="button button0">See Project</button>
      </div>
  </div>
  
</div>`
  
}


// FOR POPUP

//Creating elements first


const modal = document.querySelector(".modal")


const button = document.querySelectorAll(".button");

const modalheading = document.createElement("div");
modal.appendChild(modalheading);
modalheading.classList.add("modalheading");

const headingdetailssec = document.createElement("div");
modal.appendChild(headingdetailssec);
headingdetailssec.classList.add("headingdetailssec");

const headingdetails = document.createElement("div");
headingdetailssec.appendChild(headingdetails);
headingdetails.classList.add("headingdetails");

const headingdetails1 = document.createElement("div");
headingdetailssec.appendChild(headingdetails1);
headingdetails1.classList.add("headingdetails1");

const headingdate = document.createElement("div");
headingdetailssec.appendChild(headingdate);
headingdate.classList.add("headingdate");

const modalimage = document.createElement("div");
modal.appendChild(modalimage);
modalimage.classList.add("modalimage");

const modalparagraph = document.createElement("div");
modal.appendChild(modalparagraph);
modalparagraph.classList.add("modalparagraph");

const paragraphtext = document.createElement("p");
modalparagraph.appendChild(paragraphtext);
paragraphtext.classList.add("paragraphtext");

const tech = document.createElement("div");
modal.appendChild(tech);
tech.classList.add("tech");

const modalbutton = document.createElement("div");
modal.appendChild(modalbutton);
modalbutton.classList.add("modalbutton");



const openmodal = document.querySelector(".modal")
const overlay = document.querySelector('.overlay');



for (let i = 0; i < pdetails.length; i++) {
  button[i].addEventListener("click", () => {

    openmodal.classList.add("active");
    overlay.classList.add("active");

    let tech1 = "";
    pdetails[i].ptech.forEach((ptech) => {
      tech1 += `<li>${ptech}</li>`;
    });


    modalheading.innerHTML += `${pdetails[i].pname}<button class="modal-close">&times;</button>`;
    headingdetails.innerHTML += `${pdetails[i].pnamedetails}`;
    headingdetails1.innerHTML += `<div class="round1"> </div> ${pdetails[i].pnamedetails1} `;
    headingdate.innerHTML += `<div class="round2"> </div> ${pdetails[i].pnamedate}`;
    modalimage.innerHTML += `<img class = "image" src= "${pdetails[i].pimage}" alt="Image">`;
    paragraphtext.innerHTML += `${pdetails[i].pdescription}`;
    tech.innerHTML += `<ul>${tech1}</ul>`;

    modalbutton.innerHTML += `
   <a href = "${pdetails[i].plive}" <button class = "seelive-button-${i}" >See Live <img class = "exportimage" src="./img/export.svg" alt = "export image"> </button></a>
   <a href = "${pdetails[i].psource}"<button class = "seesource-button-${i}" >See Source <img class = "githubimage" src="./img/github_blue.svg" alt = "git hub image"> </button></a>`;



  });
}
const closemodalbuttons = document.querySelector('.modalheading');

closemodalbuttons.addEventListener('click', () => {
  openmodal.classList.remove("active");
  overlay.classList.remove("active");
  // openmodal.style.display = "none";
  // overlay.style.display = "none";
  location.reload();
});

function emailValidator() {
  const EMAIL_INVALID = 'Please enter a correct email address format';
  const email = document.getElementById('email').value;
  const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (event) {
    if (emailRegx.test(email)) {
      document.getElementById('submit-message').innerHTML = 'Success!';
      document.getElementById('submit-message').style.color = 'green';
    } else {
      document.getElementById('submit-message').innerHTML = EMAIL_INVALID;
      document.getElementById('submit-message').style.color = 'red';
      event.preventDefault();
    }
  };
}