window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
})



sr.reveal('.about', {
    reset: true,
    duration: 3000,
    origin: 'left',
    distance: '-400px'
})






function initScrollReveal() {
    if (window.innerWidth > 576) {
        sr.reveal('.home', {
            reset: true,
            duration: 3000,
            origin: 'right',
            distance: '-400px'
        })
        
        sr.reveal('.projects', {
            reset: true,
            duration: 3000,
            origin: 'right',
            distance: '-400px'
        }) 

        sr.reveal('.contact', {
            reset: true,
            duration: 3000,
            origin: 'left',
            distance: '-400px'
        })
    }
}



// Llama a la función al cargar la página
initScrollReveal();

// Opción adicional: Revisa si la ventana cambia de tamaño y vuelve a verificar
window.addEventListener('resize', function() {
    initScrollReveal();
});