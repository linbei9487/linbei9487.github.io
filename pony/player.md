---
title: Pony Player
layout: ponyplayer
filename: ponyplayer
buttontxt: Back to Twilight's Library
buttonurl: https://linbei9487.github.io/pony/history
includefoot: credit.html
--- 
<h1 id="epName"></h1>
<div>
	<video id="playerVid" controls crossorigin>
	    <source type="video/mp4" id="viewPort">
	</video>
</div>		
<div>
	<p id="jsCheck">If you can see this, you need to enable JavaScript!<br></p>
	<label for="playerRes">Change resolution</label>
	<select id="playerRes" onchange="setPlayerRes(this.value);"></select>
	<p>Dark Mode:</p>
	<button id="lightsOut" value="0" onclick="turnOutTheLights(this);">Off</button>
	<br>
	<p>Change Episode:<br class="mobileBreak"></p>
	<label for="genList">Select Generation</label>
	<select id="genList" onchange="seasList(this.value);"></select>
	<label for="seasList">Select season</label>
	<select id="seasList" onchange="epList(this.value);"></select>
	<label for="epList">Select episode</label>
	<select id="epList"></select>
	<button id="goEp" onclick="changeEp();">Go!</button>
</div>
<!-- <div>
	<p id="smol"><a href="https://mlp.heartshine.xyz/">MLP G5</a>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;G4 (<a href="https://fim.heartshine.xyz/">MLP: FiM</a>, <a href="https://eqg.heartshine.xyz/">MLP: EqG</a>, <a href="https://pl.heartshine.xyz/">MLP: PL</a>)&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<a href="https://g3.heartshine.xyz/">MLP G3</a>&nbsp;&nbsp;&mdash;&nbsp;&nbsp;<a href="https://g1.heartshine.xyz/">MLP G1</a><br>Not working? <a href="https://kb.iu.edu/d/ahic">Clear your cache!</a></p>
</div> -->
		
