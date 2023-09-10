document.addEventListener("DOMContentLoaded", () => {
    let elements = document.querySelectorAll('.block');

    elements.forEach(el => {
        el.style.background = 'red';
    })
});