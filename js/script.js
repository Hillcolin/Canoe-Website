document.addEventListener("DOMContentLoaded", () => {
    const scrollFireElements = document.querySelectorAll('.scroll-fire');

    const handleScrollFire = () => {
        const triggerBottom = window.innerHeight * 0.8;

        scrollFireElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
            
            else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScrollFire);
    handleScrollFire();
});
