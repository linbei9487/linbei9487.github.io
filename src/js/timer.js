// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '/src/css/countdown.css';
// Append link element to HTML head
head.appendChild(link);
link.onload = cssdone
function cssdone() {
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', work);
  } else {
    work();
  }
  function work() {
    var divc = document.createElement('div');
    divc.id = ("divc")
    var h1 = document.createElement('h1');
    h1.innerHTML = ("口嗨累計時間")
    var p = document.createElement('p');
    p.id = ("timer")
    var element2 = document.getElementById("content");
    element2.insertAdjacentElement("afterend", divc);
    divc.insertAdjacentElement("afterbegin", h1)
    h1.insertAdjacentElement("beforeend", p)
    document.getElementById("timer").innerHTML = ("?天?小時?分?秒");
    var requestURL = "https://raw.githubusercontent.com/linbei9487/linbei9487.github.io/main/src/json/countdown.json"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    // request.responseType = 'json';
    request.send();
    request.onload = function () {
      var data = JSON.parse(request.responseText);

      // Set the date we're counting down to
      var countDownDate = new Date(data.countDown).getTime();
      // console.log(data.countDown)
      // Update the count down every 1 second
      var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // countdown or countup
        var mode = countDownDate - now;
        if (mode > 0) {
          // Find the distance between now and the count down date (countup)  
          var distance = countDownDate - now;
        } else {
          // Find the distance between now and the count down date (countup)
          var distance = now - countDownDate;
        }

        // Time calculations for days, hours, minutes and seconds
        var days = (Math.floor(distance / (1000 * 60 * 60 * 24))) * (1);
        var hours = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) * (1);
        var minutes = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))) * (1);
        var seconds = (Math.floor((distance % (1000 * 60)) / 1000)) * (1);
        if (seconds < 10) {
          seconds = ("0" + seconds)
        }
        if (minutes < 10) {
          minutes = ("0" + minutes)
        }
        if (hours < 10) {
          hours = ("0" + hours)
        }
        if (days > 0) {
          // Display the result in the element with id="timer"
          document.getElementById("timer").innerHTML = (days + "天" + hours + "小時"
            + minutes + "分" + seconds + "秒");
        } else if (hours > 0) {
          document.getElementById("timer").innerHTML = hours + ("小時"
            + minutes + "分" + seconds + "秒");
        } else if (minuts > 0) {
          document.getElementById("timer").innerHTML = (minutes + "分" + seconds + "秒");
        } else {
          document.getElementById("timer").innerHTML = (seconds + "秒");
        }


        // If the count down is finished, write some text
        // if (distance < 0) {
        //   clearInterval(x);
        //   document.getElementById("timer").innerHTML = "EXPIRED";
        // }
      }
        , 1000);
    }
  }
}