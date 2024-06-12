//goBack function & dark mode toggle

function goBack() {
    window.history.back();
}

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});