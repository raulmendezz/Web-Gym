document.addEventListener('DOMContentLoaded', function() {
    // POPUP MEJORADO
    const overlay = document.getElementById('popup-global-overlay');
    const content = document.getElementById('popup-global-content');
    const inner = document.getElementById('popup-global-inner');
    const closeBtn = document.getElementById('popup-global-close');

    function abrirPopup(html) {
        inner.innerHTML = html;
        overlay.classList.add('active');
        content.classList.add('active');
        overlay.style.display = 'flex';
        setTimeout(() => {
            content.classList.add('active');
        }, 10);
        document.body.classList.add('popup-abierto');
        closeBtn.focus();
    }

    function cerrarPopup() {
        content.classList.remove('active');
        setTimeout(() => {
            overlay.classList.remove('active');
            overlay.style.display = 'none';
            inner.innerHTML = '';
        }, 200);
        document.body.classList.remove('popup-abierto');
    }

    if (closeBtn) closeBtn.addEventListener('click', cerrarPopup);
    if (overlay) overlay.addEventListener('click', function(e) {
        if (e.target === overlay) cerrarPopup();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) cerrarPopup();
    });

    document.querySelectorAll('[data-popup-title]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // <-- Esto es importante para que no cierre el acordeón
            const title = btn.getAttribute('data-popup-title');
            const contentHtml = btn.getAttribute('data-popup-content');
            abrirPopup(`
                <h2 class="text-2xl font-bold mb-4 text-red-600">${title}</h2>
                <div class="text-gray-700 text-base leading-relaxed">${contentHtml}</div>
            `);
        });
    });

    // ACORDEÓN
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            // No abrir/cerrar acordeón si hay popup abierto
            if (document.body.classList.contains('popup-abierto')) return;
            const item = header.parentElement;
            item.classList.toggle('active');
        });
    });
});

// 2
document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// 3
const abrirBoton = document.getElementById('abrirPopup');
const cerrarBoton = document.getElementById('cerrarPopup');
const overlay = document.getElementById('overlayPopup');

abrirBoton.addEventListener('click', () => overlay.classList.add('active'));
cerrarBoton.addEventListener('click', () => overlay.classList.remove('active'));
overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('active'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('active'); });
