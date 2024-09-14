<script>
    // Animate the scroll-down arrow
    const scrollDownArrow = document.querySelector('.scroll-down-arrow');

    function animateScrollDownArrow() {
        scrollDownArrow.style.transform = 'translateY(10px)';
        scrollDownArrow.style.opacity = 0.5;
        setTimeout(() => {
            scrollDownArrow.style.transform = 'translateY(0)';
            scrollDownArrow.style.opacity = 1;
        }, 1000);
    }

    setInterval(animateScrollDownArrow, 2000);

    // Animate the hero section on scroll
    const heroSection = document.querySelector('.hero-section');

    function animateHeroSection() {
        const scrollPosition = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        const opacity = 1 - (scrollPosition / heroHeight);
        const scale = 1 - (scrollPosition / heroHeight) * 0.1;

        heroSection.style.opacity = opacity;
        heroSection.style.transform = `scale(${scale})`;
    }

    window.addEventListener('scroll', animateHeroSection);

    // Add a fade-in animation to the hero section
    function animateHeroSectionFadeIn() {
        const heroSection = document.querySelector('.hero-section');
        heroSection.style.opacity = 0;
        heroSection.style.transform = 'scale(0.9)';
        setTimeout(() => {
            heroSection.style.opacity = 1;
            heroSection.style.transform = 'scale(1)';
        }, 500);
    }

    animateHeroSectionFadeIn();

    // Animate the benefit cards on hover
    const benefitCards =