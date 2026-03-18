const _weddingDateMoment = new Date(2026, 4, 10, 16, 0, 0).getTime();
const _secondInMillisecond = 1000;
const _minuteInMillisecond = _secondInMillisecond * 60;
const _hourInMillisecond = _minuteInMillisecond * 60;
const _dayInMillisecond = _hourInMillisecond * 24;

document.addEventListener("DOMContentLoaded", function() {
    main();
});

function main() {
    setupCountDown();
}

function setupCountDown() {
    updateCountDown();
    setInterval(updateCountDown, 1000);
}

function updateCountDown(){
    const nowMoment = new Date().getTime();
    const diffInMilliSeconds = Math.max(_weddingDateMoment - nowMoment, 0);
    
    const days = Math.floor(diffInMilliSeconds / _dayInMillisecond);
    document.getElementById("count-down-days--text").innerText = transformText(days, "День", "Дня", "Дней");
    document.getElementById("count-down-days").innerText = days;
    
    const hours = Math.floor((diffInMilliSeconds % _dayInMillisecond) / _hourInMillisecond);
    document.getElementById("count-down-hours--text").innerText = transformText(hours, "Час", "Часа", "Часов");
    document.getElementById("count-down-hours").innerText = hours;
    
    const minutes = Math.floor((diffInMilliSeconds % _hourInMillisecond) / _minuteInMillisecond);
    document.getElementById("count-down-minutes--text").innerText = transformText(minutes, "Минута", "Минуты", "Минут");
    document.getElementById("count-down-minutes").innerText = minutes;
    
    const seconds = Math.floor((diffInMilliSeconds % _minuteInMillisecond) / _secondInMillisecond);
    document.getElementById("count-down-seconds--text").innerText = transformText(seconds, "Секунда", "Секунды", "Секунд");
    document.getElementById("count-down-seconds").innerText = seconds;
}

function transformText(value, text1, text2, text3) {
    if (value > 10 && value < 19) {
        return text3;
    }
    
    const stringValue = value.toString();

    if (stringValue.endsWith("1")) {
       return text1; 
    }

    if (stringValue.endsWith("2") 
        || stringValue.endsWith("3")
        || stringValue.endsWith("4")) {
       return text2; 
    }

    return text3;
}