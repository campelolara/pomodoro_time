const start = document.querySelector('#btn-start');
const stop = document.querySelector('#btn-stop');
const reset = document.querySelector('#btn-reset');
const timer = document.querySelector('.timer');

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    //floor = arredonda pra baixo
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0"); 
    const seconds = (timeLeft % 60).toString().padStart(2, "0");

    timer.innerHTML = `${minutes} : ${seconds}`;
};

const startTimer = () => {
    if (interval) {
        clearInterval(interval); 
    }

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft === 0) {
            clearInterval(interval);
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000); //repete a cada segundo
};

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
    



/*
const progressBarNumber = document.querySelector('.card-body .progress-value');
const buttonTypePomodoro = document.querySelector('#buttonTypePomodoro');
const buttonTypeShortBreak = document.querySelector('#buttonTypeShortBreak');

const pomodoroTimerInSeconds = 1500;
const shortBreakTimerInSeconds = 300;
const TIMER_TYPE_POMODORO = 'POMODORO';
const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';

let progressInterval; //variável que guarda o setInterval
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue; 

function formatNumberInStringMinute(number) {
    //trunc = arredonda pra baixo
    //padStart = se tiver 1 digito, adiciona um 0 na frente
    const minutes = Math.trunc(number / 60).toString().padStart(2, '0'); 
    const seconds = Math.trunc(number % 60).toString().padStart(2, '0');

    return `${minutes} : ${seconds}`;
}

const startTimer = () => {
    //decrenta a cada segundo
    progressInterval = setInterval(() => {
        timerValue --; setInfoCircularProgressBar();
    }, 1000); 
}

const stopTimer = () => clearInterval(progressInterval);

const resetTimer = () => {
    clearInterval(pomodoroType === TIMER_TYPE_POMODORO) ? pomodoroTimerInSeconds : shortBreakTimerInSeconds;

    multiplierFactor = 360 / timerValue;
    setInfoCircularProgressBar();
}

function setInfoCircularProgressBar() {
    if(timerValue === 0){
        stopTimer();
    }

    progressBarNumber.textContent = `${formatNumberInStringMinute(timerValue)}`;
}
*/