<script>
	// init controller
	// @ts-ignore
	var controller = new ScrollMagic.Controller();
	// build scenes
	var revealElements = document.getElementsByClassName('digit');
	for (var i = 0; i < revealElements.length; i++) {
		// create a scene for each element
		// @ts-ignore
		new ScrollMagic.Scene({
			triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
			offset: 50, // start a little later
			triggerHook: 0.9
		})
			.setClassToggle(revealElements[i], 'visible') // add class toggle
			.addIndicators({ name: 'digit ' + (i + 1) }) // add indicators (requires plugin)
			.addTo(controller);
	}
</script>

<div class="spacer s2"></div>
<div class="spacer s0"></div>
<div class="box2 white">
	<p>Multiple elements can be looped over and animated as they enter the viewport.</p>
	<a href="#" class="viewsource">view source</a>
</div>
<div class="spacer s0"></div>
<div id="reveal-elements">
	<div class="box1 digit blue"><p>1</p></div>
	<div class="box1 digit turqoise"><p>2</p></div>
	<div class="box1 digit red"><p>3</p></div>
	<div class="box1 digit green"><p>4</p></div>
	<div class="box1 digit orange"><p>5</p></div>
</div>
<div class="spacer s2"></div>

<style type="text/css">
	.digit {
		opacity: 0;
		-webkit-transform: translateX(-40px);
		-moz-transform: translateX(-40px);
		-ms-transform: translateX(-40px);
		-o-transform: translateX(-40px);
		transform: translateX(-40px);
		-webkit-transition: all 0.6s ease-out;
		-moz-transition: all 0.6s ease-out;
		-ms-transition: all 0.6s ease-out;
		-o-transition: all 0.6s ease-out;
		transition: all 0.6s ease-out;
	}
	.digit.visible {
		opacity: 1;
		-webkit-transform: none;
		-moz-transform: none;
		-ms-transform: none;
		-o-transform: none;
		transform: none;
	}
	.digit:nth-child(2) {
		margin-top: 50px;
	}
	.digit:nth-child(3) {
		margin-top: 100px;
	}
	.digit:nth-child(4) {
		margin-top: 150px;
	}
	.digit:nth-child(5) {
		margin-top: 200px;
	}
</style>
