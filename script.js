 // Navbar active link on scroll
 
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

 
  const swiper = new Swiper('.projects-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 10 },    // mobile
      600: { slidesPerView: 2, spaceBetween: 15 },  // tablet
      992: { slidesPerView: 3, spaceBetween: 20 },  // desktop
    },
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
