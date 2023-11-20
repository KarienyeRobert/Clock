const getById = (selector) => {
    return document.querySelector(selector);
}

const hour = getById('.hour');
const dot = getById('.dot');
const min = getById('.min');
const daysOfWeek = getById('.week');
let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        dot.classList.add('invisible');
    } else {
        dot.classList.remove('invisible');
    }

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');

    Array.from(daysOfWeek.children).forEach((ele) => {
        ele.classList.remove('active');
    });

    daysOfWeek.children[now.getDay()].classList.add('active');

    checkAlarm(now);
};

setInterval(update, 500);

// Alarm function

function checkAlarm(currentTime) {
    const alarmInput = getById('alarmInput');
    const alarmTime = alarmInput.value;

    if (alarmTime === currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })) {
        getById('alarmMessage').textContent = 'Time to wake up!';
        playAlarmSound();
    } else {
        getById('alarmMessage').textContent = '';
    }
}

function setAlarm() {
    getById('alarmMessage').textContent = '';
}

function playAlarmSound() {
    // Add code to play an alarm sound (e.g., using the HTML5 Audio API)
    // For simplicity, you can replace this function with your desired alarm sound implementation.
    alert('Time to wake up!');
}

// Update the clock every second
setInterval(update, 1000);

// Initial clock update
update();
