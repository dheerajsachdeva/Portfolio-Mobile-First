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
