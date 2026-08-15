/* =========================================================
   PORTAFOLIO - PÁGINAS DE EXPERIENCIA
   JS INDEPENDIENTE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       ACTIVAR ANIMACIONES
    --------------------------------------------------------- */

    document.body.classList.add("experience-animations");


    /* ---------------------------------------------------------
       BUSCAR SECCIONES
    --------------------------------------------------------- */

    const elements = document.querySelectorAll(
        ".experience-reveal"
    );

    if (elements.length === 0) {
        return;
    }


    /* ---------------------------------------------------------
       MOSTRAR SECCIONES
    --------------------------------------------------------- */

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    /* ---------------------------------------------------------
       OBSERVAR TODAS LAS SECCIONES
    --------------------------------------------------------- */

    elements.forEach(element => {

        observer.observe(element);

    });


    /* ---------------------------------------------------------
       MOSTRAR ELEMENTOS QUE YA ESTÁN EN PANTALLA
    --------------------------------------------------------- */

    elements.forEach(element => {

        const position =
            element.getBoundingClientRect();

        if (
            position.top <
            window.innerHeight
        ) {

            element.classList.add("show");

        }

    });

});