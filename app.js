document.addEventListener("DOMContentLoaded", () => {
    let element = document.querySelector('.block');
    let  counter = 1;

    setInterval(() => {
        element.style.background = element.style.background === 'red' ? 'brown' : 'red';
        element.style.background = 'red';

        if(counter < 100) {
            element.innerHTML = counter++
        }
    }, 1000)
});