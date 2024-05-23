const scrollUpButton = document.getElementById('scroll-up');

        // Mostrar el botón cuando se hace scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 300) {
                scrollUpButton.classList.add('show-scrollup')
            } else {
                scrollUpButton.classList.remove('show-scrollup')
            }
        });

        // Hacer scroll hacia arriba al hacer clic en el botón
        scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });