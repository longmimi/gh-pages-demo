var canvas = document.getElementById('clock');
var ctx = canvas.getContext('2d');
var width = ctx.canvas.width;
var heigth = ctx.canvas.height;
var r = width/2;
var rem = width/200;

function drawClock(){
	ctx.save();
	ctx.translate(r,r);
   //表盘
	ctx.beginPath();
	ctx.lineWidth = 9 * rem;
	ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
	ctx.stroke();
	ctx.closePath();

	// ctx.beginPath();
	// ctx.lineWidth = 1;
	// ctx.strokeStyle="red";
	// ctx.moveTo(-100,0);
	// ctx.lineTo(100,0);
	// ctx.stroke();
	// ctx.closePath();

	// ctx.beginPath();
	// ctx.lineWidth = 1;
	// ctx.strokeStyle="red";
	// ctx.moveTo(0,-100);
	// ctx.lineTo(0,100);
	// ctx.stroke();
	// ctx.closePath();


	var hourNumber = [3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font=16 * rem + "px Arial";
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';

	hourNumber.forEach(function(number,index){
		var rad = 2*Math.PI/12*index;
		var x = Math.cos(rad)*(r-23* rem);
		var y = Math.sin(rad)*(r-23* rem);
		ctx.fillText(number,x,y);
	});


	for(var i = 0; i < 60; i ++){
		ctx.save();
		ctx.lineWidth = 3* rem;
		ctx.strokeStyle = '#05696C';
		var rad  = 2 * Math.PI / 60 * i;
		ctx.rotate(rad);
		ctx.beginPath();
		if(i % 5 == 0){
		    ctx.lineWidth = 5* rem;
			ctx.strokeStyle = '#0273BC';
			ctx.moveTo(0,-84* rem);
		    ctx.lineTo(0,-90* rem);
			//ctx.arc(x,y,2,0,2*Math.PI,false);
		}else{
			//ctx.fillStyle = '#ccc';
			//ctx.arc(x,y,1.5,0,2*Math.PI,false);
		    ctx.moveTo(0,-85 * rem);
		    ctx.lineTo(0,-90* rem);
		}
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	    var now = new Date();
		var time=now.toLocaleString();
		console.log(time);
		ctx.fillText(time,0,-50*rem,100*rem);

}
//时针
function drawHour(hour,minute){
	ctx.save();
	ctx.beginPath();
	var rad = (2 * Math.PI / 12 * hour) + (2 * Math.PI / 12 / 60 * minute);
	ctx.rotate(rad);
	ctx.lineWidth = 6* rem;
	ctx.lineCap="round";
	ctx.strokeStyle= '#000';
	ctx.moveTo(0,10* rem);
	ctx.lineTo(0,-r/2);
	ctx.stroke();
	ctx.restore();

};
//分针
function drawMinute(minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 60 * minute;
	ctx.rotate(rad);
	ctx.lineWidth = 3* rem;
	ctx.strokeStyle= 'green';
	ctx.moveTo(0,10);
	ctx.lineTo(0,-r/1.5);
	ctx.stroke();
	ctx.restore();
};

//秒针
function drawSecond(second){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 60 * second;
	ctx.rotate(rad);
	ctx.lineWidth = 1;
	ctx.moveTo(-4* rem,20* rem);
	ctx.lineTo(4* rem,20* rem);
	ctx.lineTo(1* rem,-r + 40* rem);
	ctx.lineTo(-1* rem,-r + 40* rem);
	ctx.lineTo(-4* rem,20* rem);
	ctx.strokeStyle= 'red';
	ctx.stroke();
	ctx.closePath();
	ctx.restore();
};
function drawDot(){
	//表盘中心点
	ctx.beginPath();
	ctx.fillStyle='black';
	ctx.arc(0,0,6*rem,0,2*Math.PI,false);
	ctx.fill();
};


function draw(){
	ctx.clearRect(0,0,width,heigth);
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();


	drawClock();
	drawHour(hour,minute);
	drawMinute(minute);
	drawSecond(second);
	drawDot();
	ctx.restore();

};
draw();
setInterval(draw,1000);
