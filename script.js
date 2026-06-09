// MENU MOVIL

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

        sidebar.classList.remove("active");

    });

});
// ACTIVE SIDEBAR LINK

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active-link");
        });

        link.classList.add("active-link");

    });

});

// TYPEWRITER

const text = "Ingeniero en Sistemas Computacionales";

const typewriter = document.getElementById("typewriter");

let i = 0;

function typingEffect() {

    if (i < text.length) {

        typewriter.innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 100);

    }

}

typingEffect();

// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            section.classList.add("active");

        }

    });

}

revealSections();

// DARK MODE

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

// CLOSE MENU MOBILE

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(window.innerWidth < 768) {

            sidebar.classList.remove("active");

        }

    });

});