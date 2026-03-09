 // Navbar active link on scroll
 
 const hello = document.getElementById("hello");
const iam = document.getElementById("iam");
const typing = document.getElementById("typing");

const roles = [
"Full Stack Developer",
"Data Analyst",
"Machine Learning"
];

let roleIndex = 0;
let charIndex = 0;

/* Typing Roles */
function typeRoles(){

if(charIndex < roles[roleIndex].length){

typing.textContent += roles[roleIndex].charAt(charIndex);
charIndex++;

setTimeout(typeRoles,80);

}else{

setTimeout(()=>{

typing.textContent="";
charIndex=0;
roleIndex++;

if(roleIndex >= roles.length){
roleIndex=0;
}

typeRoles();

},1500);

}

}

/* Main Animation Flow */

setTimeout(()=>{

hello.textContent="Hello 👋";
hello.classList.add("showText");

setTimeout(()=>{

iam.textContent="I am Ammad Saleem";
iam.classList.add("showText");

setTimeout(()=>{

typeRoles();

},1000);

},1000);

},500);
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
// Education Accordion Toggle
const eduHeader = document.querySelectorAll('.education-section .accordion-header');

eduHeader.forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('active'); // Arrow rotation
        const content = header.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Skills accordion
 
// Script 1
 const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {

    const currentItem = header.parentElement;

    document.querySelectorAll(".accordion-item").forEach(item => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    currentItem.classList.toggle("active");

  });
});

 
   var swiper = new Swiper(".projects-swiper", {

slidesPerView:1,
spaceBetween:20,
grabCursor:true,

pagination:{
el:".swiper-pagination",
clickable:true,
},

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev",
},

breakpoints:{

600:{
slidesPerView:2,
},

992:{
slidesPerView:3,
}

}

});

 




  // Select elements
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

// Hamburger click -> toggle menu
hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
});

// Menu link click -> close menu automatically (mobile/tablet)
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("nav-open")) {
            nav.classList.remove("nav-open");
        }
    });
});
