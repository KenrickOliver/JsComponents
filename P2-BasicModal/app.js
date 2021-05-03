let modal = document.getElementById('modal');
let openBtn = document.getElementById('open-modal');

function openSaysme() {
        modal.style.display = 'block'; 
}
openBtn.addEventListener('click', openSaysme);

let closeBtn = document.getElementById('close-modal');
function closeSaysme(){
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeSaysme);