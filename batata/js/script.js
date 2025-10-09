// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de fade-in ao rolar
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar seções
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Tracking de cliques nos botões CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA clicado:', this.textContent);
        // Aqui você pode adicionar integração com analytics, pixel do Facebook, etc.
        alert('Redirecionando para o checkout...');
    });
});

// Log de carregamento
console.log('🚀 Livroteca carregada com sucesso!');
console.log('📚 +35 Ebooks disponíveis por apenas R$10');
