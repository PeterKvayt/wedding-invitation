const _weddingDateMoment = new Date(2026, 4, 10, 17, 0, 0).getTime();
const _secondInMillisecond = 1000;
const _minuteInMillisecond = _secondInMillisecond * 60;
const _hourInMillisecond = _minuteInMillisecond * 60;
const _dayInMillisecond = _hourInMillisecond * 24;

document.addEventListener("DOMContentLoaded", function() {
    main();
});

function main() {
    // ymaps.ready(initMapV2);
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
    document.getElementById("count-down-days").innerText = days;
    
    const hours = Math.floor((diffInMilliSeconds % _dayInMillisecond) / _hourInMillisecond);
    document.getElementById("count-down-hours").innerText = hours;
    
    const minutes = Math.floor((diffInMilliSeconds % _hourInMillisecond) / _minuteInMillisecond);
    document.getElementById("count-down-minutes").innerText = minutes;
    
    const seconds = Math.floor((diffInMilliSeconds % _minuteInMillisecond) / _secondInMillisecond);
    document.getElementById("count-down-seconds").innerText = seconds;
}

async function initMapV3() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}

function initMapV2() {
    var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
}
