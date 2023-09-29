// Get references to HTML elements
const hourDisplay = document.getElementById("hour");
const minuteDisplay = document.getElementById("minute");
const secondDisplay = document.getElementById("second");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmButton = document.getElementById("setAlarm");
const clearAlarmButton = document.getElementById("clearAlarm");

let alarmInterval;

// Function to update the clock display
function updateClockDisplay() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");

    hourDisplay.textContent = hour;
    minuteDisplay.textContent = minute;
    secondDisplay.textContent = second;
}

// Function to check and trigger the alarm
function checkAlarm() {
    const now = new Date();
    const alarmTime = new Date(alarmTimeInput.value);

    if (now.getHours() === alarmTime.getHours() && now.getMinutes() === alarmTime.getMinutes()) {
        alert("Alarm! Wake up its NINJA TIME!");
        clearInterval(alarmInterval);
    }
}

// Set Alarm button click event
setAlarmButton.addEventListener("click", function () {
    clearInterval(alarmInterval);
    alarmInterval = setInterval(checkAlarm, 1000);
});

// Clear Alarm button click event
clearAlarmButton.addEventListener("click", function () {
    clearInterval(alarmInterval);
    alarmTimeInput.value = "";
});

// Initial display
updateClockDisplay();
setInterval(updateClockDisplay, 1000);
