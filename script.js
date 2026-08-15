// =========================================================
// MENU MOVIL
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("active");

    });

}


// =========================================================
// SCROLL SUAVE
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

        if (sidebar) {
            sidebar.classList.remove("active");
        }

    });

});


// =========================================================
// ACTIVE SIDEBAR LINK
// =========================================================

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {

            item.classList.remove("active-link");

        });

        link.classList.add("active-link");

    });

});


// =========================================================
// TYPEWRITER
// =========================================================

const text = "Ingeniero en Sistemas Computacionales";

const typewriter = document.getElementById("typewriter");

let i = 0;

function typingEffect() {

    if (!typewriter) {
        return;
    }

    if (i < text.length) {

        typewriter.innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 100);

    }

}

typingEffect();


// =========================================================
// REVEAL ANIMATION
// =========================================================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const revealTop =
            section.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            section.classList.add("active");

        }

    });

}

revealSections();


// =========================================================
// DARK MODE
// =========================================================

const toggleTheme =
    document.getElementById("toggleTheme");


// Cargar el tema guardado

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


// Cambiar tema

if (toggleTheme) {

    toggleTheme.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        // Guardar selección

        if (
            document.body.classList.contains("dark-mode")
        ) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}


// =========================================================
// CLOSE MENU MOBILE
// =========================================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 768) {

            if (sidebar) {

                sidebar.classList.remove("active");

            }

        }

    });

});