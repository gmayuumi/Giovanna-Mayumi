document.addEventListener('DOMContentLoaded', () => {

    /*=============== BARRA DE PROGRESSO DE SCROLL ===============*/
    const progressBar = document.getElementById('scroll-progress-bar');
    const updateProgressBar = () => {
        const { scrollTop, scrollHeight } = document.documentElement;
        const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
        progressBar.style.setProperty('width', scrollPercent);
    };
    window.addEventListener('scroll', updateProgressBar);

    /*=============== MENU HAMBURGER E MOBILE ===============*/
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navClose = document.getElementById('mobile-close');
    const navLinks = document.querySelectorAll('.mobile__link');
    if (navToggle) { navToggle.addEventListener('click', () => { mobileMenu.classList.add('show-menu'); }); }
    if (navClose) { navClose.addEventListener('click', () => { mobileMenu.classList.remove('show-menu'); }); }
    navLinks.forEach(link => { link.addEventListener('click', () => { mobileMenu.classList.remove('show-menu'); }); });

    /*=============== CARROSSEL DE PROJETOS ===============*/
    const swiperProjects = new Swiper('.projects__container', {
        loop: true,
        spaceBetween: 24,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // Mobile (mostra parte do próximo slide)
            320: { 
                slidesPerView: 1.2,
                spaceBetween: 16,
                centeredSlides: true,
            },
            // Tablet
            768: { 
                slidesPerView: 2, 
                spaceBetween: 24 
            },
            // Desktop
            1024: { 
                slidesPerView: 3, 
                spaceBetween: 32 
            },
        }
    });

    /*=============== ANIMAÇÕES DE SCROLL (SCROLL REVEAL) ===============*/
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1200,
        delay: 200,
        opacity: 0,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
    });

    // Animações
    sr.reveal(`.hero__text h1`, { origin: 'top', distance: '20px' });
    sr.reveal(`.hero__text p`, { delay: 400 });
    sr.reveal(`.hero__text .button`, { delay: 600 });
    sr.reveal(`.hero__art-container`, { duration: 2000, delay: 300, scale: 0.9 });
    sr.reveal(`.section__title`);
    sr.reveal(`.about__content`, { origin: 'left' }); 
    sr.reveal(`.about__icon-container`, { origin: 'right', delay: 400 }); 
    sr.reveal(`.service__card`, { interval: 150 });
    sr.reveal(`.projects__container_wrapper`);
    sr.reveal(`.skills__content`, { interval: 150 });
    sr.reveal(`.faq__item`, { interval: 100 });
    sr.reveal(`.cta__container`);

});