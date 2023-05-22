const documentReady = () => {
const cerrar = document.getElementById('cerrar');
const alertas = () => {
alert('seguro que quieres cerrar la pagina');
location.href = 'https://google.com';
};
cerrar.addEventListener('click', alertas);
};
document.addEventListener('DOMContentLoaded', documentReady);