document.addEventListener("DOMContentLoaded", () => {
    let blocks = document.querySelectorAll('.block');

    blocks.forEach(e => {
        e.style.background = 'red'
    })
});