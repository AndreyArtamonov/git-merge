document.addEventListener("DOMContentLoaded", () => {
    let elements = document.querySelectorAll('.block');
    let counter = 1;

    setInterval(() => {
        elements.forEach(el => {
            el.style.background = 'red';

            if(counter < 100) {
                el.innerHTML = counter++
            }
        })
    }, 500)
});