const progress = document.querySelector('.progress-done');
const progress2 = document.querySelector('.progress-done2');
const check = document.querySelector('.check');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');

setTimeout(() => {
    progress2.style.width = progress2.getAttribute('data-done') + '%'
    progress2.style.opacity = 1;
    num2.style.opacity = 1;
    
}, 500)

function boom() {
        progress.style.width = progress.getAttribute('data-done') + '%'
        progress.style.opacity = 1;
        num1.style.opacity = 1;
}

check.addEventListener('click', boom);