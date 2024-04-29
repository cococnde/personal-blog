//goBack function & dark mode toggle

function goBack() {
    window.history.back();
}

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});