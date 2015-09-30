function Game()
{
	this.initCanvas();
	this.draw();



}

Game.prototype.test = function(e)
{
	console.log("test");
	console.log(e.keyCode);
}

Game.prototype.update = function()
{

}

Game.prototype.gameLoop = function()
{
	// this.update();
	console.log("gameLoop");
	window.requestAnimationFrame(game.gameLoop);
}

Game.prototype.initCanvas = function()
{
	canvas= document.createElement("canvas");
	/*ctx is the context that we will draw on*/
	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.draw = function()
{
	ctx.fillStyle = rgb(255,0,0);
	ctx.fillRect(0,0,100,100);
}



/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}