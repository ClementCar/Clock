function main() {
    moveSecondHands();
    setUpMinuteHands();
  };

function refresh() {
    var sec = 1000;
    setTimeout(getTime, sec)
}

function setUpMinuteHands() {
    var containers = document.querySelectorAll('minutes');
    var secondAngle = containers[0].getAttribute('data-second-angle');
    if (secondAngle > 0) {
        var delay = (((360 - secondAngle) / 6) +0.1) *1000;
        setTimeout(function() {
            moveMinuteHands(containers);
        }, delay)
    }
};

function moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.webkitTransform = 'rotateZ(6deg)';
        containers[i].style.transform = 'rotateZ(6deg)';
    }

    setInterval(function() {
        for (var i=0; i < containers.length; i++) {
            if(containers[i].angle === undefined) {
                containers[i].angle = 12;
            } else {
                containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + deg + 'deg)';
            containers[i].style.transform = 'rotateZ(' + containers[i].angle + deg + 'deg)';
        }
    }, 6000)
}

function moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 6;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 1000);
  }

function initialClock() {

    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var hands = [
        {
            hand: 'hour',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'minute',
            angle: (minutes * 6)
        },
        {
            hand: 'second',
            angle: (seconds * 6)
        }
    ];

    for (var count = 0; count < hands.length; count++) {
        var elements = document.querySelectorAll('.' + hands[count].hand);
        for (var c = 0; c < elements.length; c++) {
            elements[c].style.webkitTransform = 'rotateZ('+ hands[count].angle + 'deg)';
            elements[c].style.transform = 'rotateZ('+ hands[count].angle + 'deg)';
        }

        if (hands[count].hand === 'minute') {
            // console.log(elements[c])
            elements[c].parentElement.setAttribute('data-second-angle', hands[count +1 ].angle)
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