var requestURL = "https://linbei9487.github.io/src/json/episode.json"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    // request.responseType = 'json';
    request.send();
    request.onload = function() {
    var data2 = JSON.parse(request.responseText);
    var step;
    var id
    id = 0
    for (step=0; step <6 ; step++){
        document.getElementById("p"+ id).innerHTML =(data2.episode[id].pw)
        document.getElementById("p"+ id).innerHTML =(data2.episode[id].link)
        console.log(data2.episode[id].pw)
        console.log(data2.episode[id].link)
        id++
        }};