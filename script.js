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

