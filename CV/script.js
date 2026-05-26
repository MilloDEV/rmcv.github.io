document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function updateThemeIconOnLoad() {
    const themeIcon = document.getElementById('themeIcon');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeIcon.src = isDarkMode ? 'moon.png' : 'sunny.png';
    themeIcon.classList.add('rotate');
    setTimeout(() => themeIcon.classList.remove('rotate'), 500); 
}


document.getElementById('toggleTheme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    updateThemeIconOnLoad();
});

window.onload = updateThemeIconOnLoad;

const sections = document.querySelectorAll('.main-content section');


window.addEventListener('scroll', () => {
  
  const scrollPosition = window.scrollY;


  sections.forEach((section) => {
   
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {

      section.classList.add('animate');
    } else {
      section.classList.remove('animate');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

    const text = "Ingeniero en Sistemas";
    let i = 0;

    const speed = 100;
    const displayTime = 3500;
    const hideTime = 1500;

    const element = document.getElementById("typewriter-text");

    function typeWriter() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);
            i++;

            setTimeout(typeWriter, speed);

        } else {

            setTimeout(hideText, displayTime);
        }
    }

    function hideText() {

        element.innerHTML = '';
        i = 0;

        setTimeout(typeWriter, hideTime);
    }

    typeWriter();
});

