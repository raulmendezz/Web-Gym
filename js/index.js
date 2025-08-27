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