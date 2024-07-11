document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;

    function updateCarousel() {
        const carousel = document.querySelector('.carousel');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        console.log(`Updating carousel. Current index: ${currentIndex}`);

        // Calcular o deslocamento baseado no índice atual
        const offset = currentIndex * (100 / 3);
        carousel.style.transform = `translateX(-${offset}%)`;

        // Remover a classe 'active' de todos os slides
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        // Adicionar a classe 'active' ao slide central
        const centralIndex = (currentIndex + 1) % totalSlides;
        slides[centralIndex].classList.add('active');
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.slide');
        currentIndex = (currentIndex + 1) % slides.length;

        console.log(`Next slide. New index: ${currentIndex}`);

        // Verifica se chegou ao final e reinicia
        if (currentIndex > slides.length - 3) {
            currentIndex = 0;
        }

        updateCarousel();
    }

    // Muda de slide a cada 3 segundos
    setInterval(nextSlide, 3000);

    // Atualiza o carrossel quando o documento é carregado
    updateCarousel();
});
