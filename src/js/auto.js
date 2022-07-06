// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '/src/css/loading.css';
// Append link element to HTML head
head.appendChild(link);
var loadingout = document.createElement('div');
loadingout.id = ("loadingout")
var loading = document.createElement('div');
loading.id = ("loading")
var loadtxt = document.createElement('h1');
loadtxt.id = ("loadtxt")
loadtxt.innerHTML = ("載入中" + 0 + "%")
var loadgif = document.createElement('img');
loadgif.src = ("/img/loading.gif")
document.body.insertAdjacentElement("afterbegin", loadingout)
document.getElementById("loadingout").insertAdjacentElement("afterbegin", loading)
document.getElementById("loading").insertAdjacentElement("afterbegin", loadtxt)
document.getElementById("loading").insertAdjacentElement("beforeend", loadgif)
document.addEventListener('DOMContentLoaded', function () {
    var requestURL = "https://raw.githubusercontent.com/linbei9487/linbei9487.github.io/main/src/json/S3.json"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    // request.responseType = 'json';
    request.send();
    request.onload = function () {
        loaded = 0;
        var data2 = JSON.parse(request.responseText);
        var step;
        var element = document.getElementById("content");
        var previous = document.createElement('h1');
        previous.innerHTML = ("回到上一季")
        var perlin = document.createElement('a');
        perlin.innerHTML = ("點擊此處")
        perlin.href = ((data2.pre));
        perlin.id = ("per");
        if ((data2.pre) === "") {
        } else {
            element.insertAdjacentElement("afterbegin", perlin);
            element.insertAdjacentElement("afterbegin", previous);
        }
        var toptxt = document.createElement('p');
        toptxt.innerHTML = ((data2.toptxt));
        toptxt.id = ("toptxt");
        if ((data2.toptxt) === "") {
        } else {
            element.insertAdjacentElement("beforeend", toptxt);
        }
        // console.log((data2.episode.length))
        for (step = 0; step < (data2.episode.length); step++) {
            var tit = document.createElement('h1');
            tit.innerHTML = ("S" + (data2.season) + "E" + (data2.episode[step].index));
            tit.id = ("tit" + step);
            var nam = document.createElement('h2');
            nam.innerHTML = ((data2.episode[step].name));
            nam.id = ("nam" + step);
            if ((data2.episode[step].texttop) === "") {
            } else {
                var texttop = document.createElement('p');
                texttop.innerHTML = ((data2.episode[step].texttop));
                texttop.id = ("textt" + step);
            }
            var img1 = document.createElement('img');
            img1.src = (data2.episode[step].img1);
            img1.id = ("img1" + step)
            var img2 = document.createElement('img');
            img2.src = (data2.episode[step].img2);
            img2.id = ("img2" + step)
            var img3 = document.createElement('img');
            img3.src = (data2.episode[step].img3);
            img3.id = ("img3" + step)
            var img4 = document.createElement('img');
            img4.src = (data2.episode[step].img4);
            img4.id = ("img4" + step)
            if ((data2.episode[step].textend) === "") {
            } else {
                var textend = document.createElement('p');
                textend.innerHTML = ((data2.episode[step].textend));
                textend.id = ("texte" + step);
            }
            var eqe = document.createElement('h2');
            eqe.innerHTML = ("進入小馬國");
            eqe.id = ("eqe" + step);
            var lin = document.createElement('a');
            lin.innerHTML = ("點擊此處")
            lin.href = ((data2.episode[step].link));
            lin.id = ("lin" + step);
            var par = document.createElement('p');
            par.innerHTML = ("Password: " + (data2.episode[step].pw));
            par.id = ("p" + step);
            var vid = document.createElement('iframe');
            vid.src = (data2.episode[step].vid);
            vid.referrerPolicy = "no-referrer-when-downgrade"
            vid.allowFullscreen = "true"
            vid.id = ("m" + step);
            vid.onload = vidload;
            if ((data2.episode[step].after) === "") {
            } else {
                var after = document.createElement('p');
                after.innerHTML = ((data2.episode[step].after));
                after.id = ("after" + step);
            }
            var element = document.getElementById("content");
            element.insertAdjacentElement("beforeend", tit);
            element.insertAdjacentElement("beforeend", nam);
            if ((data2.episode[step].texttop) === "") {
            } else {
                element.insertAdjacentElement("beforeend", texttop);
            }
            element.insertAdjacentElement("beforeend", img1);
            element.insertAdjacentElement("beforeend", img2);
            element.insertAdjacentElement("beforeend", img3);
            element.insertAdjacentElement("beforeend", img4);
            if ((data2.episode[step].textend) === "") {
            } else {
                element.insertAdjacentElement("beforeend", textend);
            }
            element.insertAdjacentElement("beforeend", eqe);
            element.insertAdjacentElement("beforeend", lin);
            element.insertAdjacentElement("beforeend", par);
            element.insertAdjacentElement("beforeend", vid);
            if ((data2.episode[step].after) === "") {
            } else {
                element.insertAdjacentElement("beforeend", after);
            }
            // ,nam,img1,img2,img3,img4,eqe,lin,par,vid
            // document.getElementById("p"+ step).innerHTML =("Password: "+ (data2.episode[step].pw));
            // document.getElementById("m"+ step).src =(data2.episode[step].link);
        }
        var next = document.createElement('h1');
        next.innerHTML = ("前往下一季")
        var nextlin = document.createElement('a');
        nextlin.innerHTML = ("點擊此處")
        nextlin.href = ((data2.next));
        nextlin.id = ("next");
        if ((data2.next) === "") {
        } else {
            element.insertAdjacentElement("beforeend", next);
            element.insertAdjacentElement("beforeend", nextlin);
        }
        var footer = document.querySelector('#content footer');
        element.insertAdjacentElement("beforeend", footer);


        function vidload() {
            loaded++
            var sta = ((loaded / (data2.episode.length)) * 100)
            sta = sta.toFixed(2)
            document.getElementById("loadtxt").innerHTML = ("載入中" + sta + "%")
            if (sta == 100) { document.getElementById("loadingout").style.display = "none" }
        }
    };

})