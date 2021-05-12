const progress = document.querySelector('.progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', ()=> {
    currentActive++;
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    updateProg();
})

prev.addEventListener('click', ()=> {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1;
    }

    updateProg();
})

function updateProg() {
    circles.forEach((circle, ind) => {
        if(ind < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    
    let wid = 23;

    progress.style.width = (-5) + (((actives.length / circles.length) * 100 ) -5)+ '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
     }
}