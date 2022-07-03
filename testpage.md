---
title: testpage
layout: testpage
filename: testpage
--- 

test<br>

<p id="p0"></p>
<p id="l0"></p>
<iframe id="m0" allowfullscreen="true" frameborder="0" height="468" marginheight="0" marginwidth="0" scrolling="no" width="640" referrerpolicy="no-referrer-when-downgrade" ></iframe>
<img id="i10" src="https://linbei9487.github.io/img/pony3.gif">
<img id="i20" src="https://linbei9487.github.io/img/pony3.gif">
<img id="i30" src="https://linbei9487.github.io/img/pony3.gif">
<img id="i40" src="https://linbei9487.github.io/img/pony3.gif">
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
    var step;
    for (step=0; step <6 ; step++){
        document.getElementById("p"+ step).innerHTML =(data2.episode[id].pw)
        document.getElementById("m"+ step).src =(data2.episode[id].link)
        id++
        }};
</script>