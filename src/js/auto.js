var requestURL = "https://raw.githubusercontent.com/linbei9487/linbei9487.github.io/main/src/json/test.json"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    // request.responseType = 'json';
    request.send();
    request.onload = function() {
    var data2 = JSON.parse(request.responseText);
    var step;
    for (step=0; step < 3 ; step++){
        var tit = document.createElement('h1');
        tit.innerHTML =("S3E"+ (data2.episode[step].index));
        tit.id = ("tit"+ step);
        document.body.append(tit);
        var nam = document.createElement('h2');
        nam.innerHTML =((data2.episode[step].name));
        nam.id = ("nam"+ step);
        document.body.append(nam);
        var img1 =document.createElement('img');
        img1.src =(data2.episode[step].img1);
        img1.id=("img1"+ step)
        document.body.append(img1);
        var img2 =document.createElement('img');
        img2.src =(data2.episode[step].img2);
        img2.id=("img2"+ step)
        document.body.append(img2);
        var img3 =document.createElement('img');
        img3.src =(data2.episode[step].img3);
        img3.id=("img3"+ step)
        document.body.append(img3);
        var img4 =document.createElement('img');
        img4.src =(data2.episode[step].img4);
        img4.id=("img4"+ step)
        document.body.append(img4);
        var eqe = document.createElement('h2');
        eqe.innerHTML =("進入小馬國");
        eqe.id = ("eqe"+ step);
        document.body.append(eqe);
        var lin = document.createElement('a');
        lin.innerHTML=("點擊此處")
        lin.href =((data2.episode[step].link));
        lin.id = ("lin"+ step);
        document.body.append(lin);
        var par = document.createElement('p');
        par.innerHTML =("Password: "+ (data2.episode[step].pw));
        par.id = ("p"+ step);
        document.body.append(par);
        var vid = document.createElement('iframe');
        vid.src = (data2.episode[step].vid);
        vid.id = ("m"+ step);
        document.body.append(vid)
        // document.getElementById("p"+ step).innerHTML =("Password: "+ (data2.episode[step].pw));
        // document.getElementById("m"+ step).src =(data2.episode[step].link);
    
        }};
