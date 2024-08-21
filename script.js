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
    themeIcon.src = isDarkMode ? 'moon.png' : 'sun.png';
    themeIcon.classList.add('rotate');
    setTimeout(() => themeIcon.classList.remove('rotate'), 500); 
}


document.getElementById('toggleTheme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    updateThemeIconOnLoad();
});

window.onload = updateThemeIconOnLoad;