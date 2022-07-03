---
title: testpage
layout: testpage
filename: testpage
--- 

test<br>

<p id="p0"></p>
<p id="l0"></p>
<iframe id="m0" allowfullscreen="true" frameborder="0" height="468" marginheight="0" marginwidth="0" scrolling="no" width="640" referrerpolicy="no-referrer-when-downgrade" ></iframe>
<img id="i11">
<img id="i21">
<img id="i31">
<img id="i41">
<p id="p1"></p>
<p id="l1"></p>
<iframe id="m1" allowfullscreen="true" frameborder="0" height="468" marginheight="0" marginwidth="0" scrolling="no" width="640" referrerpolicy="no-referrer-when-downgrade" ></iframe>
<p id="p2"></p>
<p id="l2"></p>
<iframe id="m2" allowfullscreen="true" frameborder="0" height="468" marginheight="0" marginwidth="0" scrolling="no" width="640" referrerpolicy="no-referrer-when-downgrade" ></iframe>
<iframe id="m3" allowfullscreen="true" frameborder="0" height="468" marginheight="0" marginwidth="0" scrolling="no" width="640" referrerpolicy="no-referrer-when-downgrade" ></iframe>
<iframe id="m4" allowfullscreen="true" frameborder="0" height="468" marginheight="0" marginwidth="0" scrolling="no" width="640" referrerpolicy="no-referrer-when-downgrade" ></iframe>
<script>
var requestURL = "https://raw.githubusercontent.com/linbei9487/linbei9487.github.io/main/src/json/episode.json"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    // request.responseType = 'json';
    request.send();
    request.onload = function() {
    var data2 = JSON.parse(request.responseText);
    var video;
    video =(data2.episode[3].link)
    var step;
    var id
    id = 0
    for (step=0; step <6 ; step++){
        document.getElementById("p"+ id).innerHTML =(data2.episode[id].pw)
        document.getElementById("l"+ id).innerHTML =(data2.episode[id].index)
        document.getElementById("m"+ id).src =(data2.episode[id].link)
        document.getElementById("i1"+ id).src =(data2.episode[id].i1)
        document.getElementById("i2"+ id).src =(data2.episode[id].i2)
        document.getElementById("i3"+ id).src =(data2.episode[id].i3)
        document.getElementById("i4"+ id).src =(data2.episode[id].i4)
        console.log(data2.episode[id].pw)
        console.log(data2.episode[id].index)
        console.log(data2.episode[id].link)
        id++
        }};
</script>