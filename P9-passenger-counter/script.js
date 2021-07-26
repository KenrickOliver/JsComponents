let count = 0;
const countEl = document.getElementById('count-el')
const incr = document.getElementById("increment")
const save = document.getElementById("save")
const prev = document.getElementById("previous")


incr.addEventListener('click', increment)
function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function saved() {
    prev.textContent += `${count} - `;
    count = 0;
    countEl.innerHTML = count;
}

save.addEventListener('click', saved)