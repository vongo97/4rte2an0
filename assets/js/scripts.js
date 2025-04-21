document.addEventListener('DOMContentLoaded', () => {
    // Navegación suave
    const initSmoothScroll = () => {
        const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true
        });
    };

    // Inicializar carrusel de testimonios
    const initTestimoniosSlider = () => {
        const testimoniosSlider = document.querySelector('.testimonios-slider');
        if (!testimoniosSlider) return;

        const testimonios = document.querySelectorAll('.testimonio');
        let currentSlide = 0;

        setInterval(() => {
            testimonios[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % testimonios.length;
            testimonios[currentSlide].classList.add('active');
        }, 5000);
    };

    // Inicializar animaciones de scroll
    const initScrollAnimations = () => {
        const observador = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        document.querySelectorAll('.beneficio, .tarjeta, .testimonio')
            .forEach(el => observador.observe(el));
    };

    // Inicializar todas las funcionalidades
    const init = () => {
        initSmoothScroll();
        initTestimoniosSlider();
        initScrollAnimations();
    };

    // Ejecutar inicialización
    init();

    // Modo oscuro
    
    
});