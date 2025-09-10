function mostrarLlamada() {
        Swal.fire({
            title: 'Bienvenido a la web del Hanfit',
            text: 'Este es el número para contactar con nosotros: 912345678',
            icon: 'info',
            confirmButtonText: 'Llamar',
            customClass: {
            confirmButton: 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            }
        }).then((resultado) => {
            if (resultado.isConfirmed) {
            window.location.href = "tel:912345678";
            }
        });
        }

// carrusel
document.addEventListener('DOMContentLoaded', function () {
    var el = document.getElementById('gymCarousel');
    if (el) {
        var carousel = new bootstrap.Carousel(el, {
            interval: 2000,
            pause: 'hover',
            wrap: true,
            touch: true
        });
    }
});
  //llmada
  document.addEventListener('DOMContentLoaded', function() {
            const floatingElements = document.querySelectorAll('.floating');
            floatingElements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.2}s`;
            });
            
            // menumobil
            const menuButton = document.querySelector('button.md\\:hidden');
            menuButton.addEventListener('click', function() {
                alert('Menú móvil se abriría aquí. En una implementación real, esto mostraría/ocultaría el menú.');
            });
        });