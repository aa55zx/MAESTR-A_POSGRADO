// Toggle dropdown Investigación
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.nav-bar li.dropdown');
    if (!dropdown) return;

    // Asegurarse de que el dropdown esté cerrado al cargar la página
    dropdown.classList.remove('open');

    dropdown.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function () {
        dropdown.classList.remove('open');
    });
});

// Cerrar dropdown al restaurar página desde caché del navegador
window.addEventListener('pageshow', function () {
    var dropdown = document.querySelector('.nav-bar li.dropdown');
    if (dropdown) dropdown.classList.remove('open');
});

// Toggle de convocatorias
function toggleConvocatoria(id) {
    var body = document.getElementById(id);
    var btn = document.getElementById('btn-' + id);

    if (body.classList.contains('open')) {
        body.classList.remove('open');
        btn.textContent = 'Ver mas';
    } else {
        body.classList.add('open');
        btn.textContent = 'Ver menos';
    }
}