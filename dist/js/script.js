//hidde menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");
const overlay = document.querySelector(".menu__overlay");
const menuLink = document.querySelectorAll(".menu__link");



hamburger.addEventListener("click", (e) => {
  if (e.target) {
    e.preventDefault();


    menu.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.style.overflow = "";
});


window.addEventListener("keydown", (e) => {
  if (e.key == 'Escape') {
      menu.classList.remove('active');
      document.body.style.overflow = "";
  }
});

window.addEventListener('click', (e) => {
  if (e.target == overlay) {
      menu.classList.remove('active');
      document.body.style.overflow = "";
  }
});

menuLink.forEach (item => {
  item.addEventListener("click", () => {
    menu.classList.remove('active');
    document.body.style.overflow = "";
  })
});



// hamburger.addEventListener("click", () => {
//     menu.classList.add("active");
// });


// closeElem.addEventListener("click", () => {
//     menu.classList.remove("active");
// });

// lines %

const counters = document.querySelectorAll(".skills__ratings-counter");
const lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


//scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}