//   afeito  java scroll
document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.hiden');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Para de observar uma vez que está visível
            }
        });
    }, {
        threshold: 0.1 // 10% do elemento visível
    });

    divs.forEach(div => {
        div.classList.add('hiden'); // Garante que as seções estejam inicialmente ocultas
        observer.observe(div); // Começa a observar cada seção
    });
});
