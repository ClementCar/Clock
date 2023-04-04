function refresh() {
    var sec = 1000;
    setTimeout(getTime, sec)
}

function initialClock() {

    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var hands = [
        {
            hand: 'hours',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'minutes',
            angle: (minutes * 6)
        },
        {
            hand: 'seconds',
            angle: (seconds * 6)
        }
    ];

    for (var count = 0; count < hands.length; count++) {
        var elements = document.querySelectorAll('.' + hands[count].hand);
        for (var c = 0; c < elements.length; c++) {
            elements[c].style.webkitTransform = 'rotateZ('+ hands[count].angle + 'deg)';
            elements[c].style.transform = 'rotateZ('+ hands[count].angle + 'deg)';
        }

        if (hands[count].hand === 'minutes') {
            elements[c].parentNode.setAttribute('data-second-angle', hands[count+1].angle)
        }
    }
}

function getTime() {
    var date = new Date()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(hours < 10) { hours = `0${hours}`}
    if(minutes < 10) { minutes = `0${minutes}`}
    if(seconds < 10) { seconds = `0${seconds}`}

    var time = `${hours} : ${minutes} : ${seconds}`
    document.getElementById('time').innerHTML = time;
    refresh();
    initialClock();
}