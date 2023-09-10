document.addEventListener("DOMContentLoaded", () => {
    let element = document.querySelector('.block');

    setInterval(() => {
        element.style.background = element.style.background === 'red' ? 'green' : 'red';
        element.innerHTML = element.style.background === 'red' ? 'red' : 'green';
    }, 1000)
});