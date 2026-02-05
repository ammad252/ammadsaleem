 /* =========================
   NAVBAR ACTIVE LINK ON SCROLL
========================= */
const navLinks = document.querySelectorAll("nav ul li a");
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

/* =========================
   SKILLS ACCORDION
========================= */
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const currentItem = header.parentElement;

        // close all other accordions
        document.querySelectorAll(".accordion-item").forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });

        // toggle current
        currentItem.classList.toggle("active");
    });
});

/* =========================
   MOBILE HAMBURGER TOGGLE
========================= */
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
});

/* =========================
   SMOOTH PAGE LOAD ANIMATION
========================= */
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
