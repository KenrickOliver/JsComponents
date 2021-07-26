let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let workMinutes = document.getElementById('w-minutes');
let workSeconds = document.getElementById('w-seconds');

let breakMinutes = document.getElementById('b-minutes');
let breakSeconds = document.getElementById('b-seconds');

let listCounter = document.querySelector('.counter-list')

//store a reference to a timer variable
let startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    workMinutes.innerText = 1;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 1;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    }

    //Break Timer Countdown
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(breakSeconds.innerText != 0){
            breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0){
            breakSeconds.innerText = 59;
            breakMinutes.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0){
        workMinutes.innerText = 1;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 1;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
        addItem()
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}

// EXtras
function addItem() {
    let newImage = document.createElement('img')
    newImage.setAttribute('class', 'image-item')
    newImage.setAttribute('alt', 'work peach')
    newImage.src = 'peach.png';

    let liItem = document.createElement('li')
    liItem.setAttribute('class', 'li-item')
    liItem.appendChild(newImage)
    listCounter.appendChild(liItem)
}

