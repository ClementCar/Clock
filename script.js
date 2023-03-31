function refresh() {
    var sec = 1000;
    setTimeout(getTime, sec)
}

function getTime() {
    var date = new Date()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(hours.lenght < 2) { hours = `0${hours}`}
    if(minutes.lenght < 2) { minutes = `0${minutes}`}
    if(seconds.lenght < 2) { seconds = `0${seconds}`}

    var time = `${hours} : ${minutes} : ${seconds}`
    document.getElementById('time').innerHTML = time;
    refresh();
}