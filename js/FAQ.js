document.addEventListener('DOMContentLoaded', function() {
            const accordionItems = document.querySelectorAll('.accordion-item');
            
            accordionItems.forEach(item => {
                const header = item.querySelector('.accordion-header');
                
                header.addEventListener('click', () => {
                    // Cerrar otros items abiertos
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Alternar el item actual
                    item.classList.toggle('active');
                });
            });
            
            // Efecto hover para los botones
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    button.classList.add('hover:scale-105');
                });
                button.addEventListener('mouseleave', () => {
                    button.classList.remove('hover:scale-105');
                });
            });
        });