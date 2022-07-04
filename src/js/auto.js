var requestURL = "https://raw.githubusercontent.com/linbei9487/linbei9487.github.io/main/src/json/test.json"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    // request.responseType = 'json';
    request.send();
    request.onload = function() {
    var data2 = JSON.parse(request.responseText);
    var step;
    console.log((data2.episode.length))
    for (step=0; step < (data2.episode.length) ; step++){
        var tit = document.createElement('h1');
        tit.innerHTML =("S"+(data2.episode[step].season)+"E"+ (data2.episode[step].index));
        tit.id = ("tit"+ step);
        var nam = document.createElement('h2');
        nam.innerHTML =((data2.episode[step].name));
        nam.id = ("nam"+ step);
        var img1 =document.createElement('img');
        img1.src =(data2.episode[step].img1);
        img1.id=("img1"+ step)
        var img2 =document.createElement('img');
        img2.src =(data2.episode[step].img2);
        img2.id=("img2"+ step)
        var img3 =document.createElement('img');
        img3.src =(data2.episode[step].img3);
        img3.id=("img3"+ step)
        var img4 =document.createElement('img');
        img4.src =(data2.episode[step].img4);
        img4.id=("img4"+ step)
        var eqe = document.createElement('h2');
        eqe.innerHTML =("進入小馬國");
        eqe.id = ("eqe"+ step);
        var lin = document.createElement('a');
        lin.innerHTML=("點擊此處")
        lin.href =((data2.episode[step].link));
        lin.id = ("lin"+ step);
        var par = document.createElement('p');
        par.innerHTML =("Password: "+ (data2.episode[step].pw));
        par.id = ("p"+ step);
        var vid = document.createElement('iframe');
        vid.src = (data2.episode[step].vid);
        vid.id = ("m"+ step);
        var element = document.getElementsByTagName("main");
        element.insertAdjacentElement("beforeend", tit);
        // ,nam,img1,img2,img3,img4,eqe,lin,par,vid
        // document.getElementById("p"+ step).innerHTML =("Password: "+ (data2.episode[step].pw));
        // document.getElementById("m"+ step).src =(data2.episode[step].link);
    
        }};
