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
}

// Evento para cambiar el tema y actualizar el ícono
document.getElementById('toggleTheme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    updateThemeIconOnLoad();
});

window.onload = updateThemeIconOnLoad;
