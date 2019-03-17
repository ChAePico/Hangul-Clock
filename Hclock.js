let midTime=false;
let midND=false;
const table=document.querySelector("table");

function mid(hour, minute){
	if(minute===0){
		const minuteZero=document.getElementById("midAll");
		//console.log(minuteZero);
		minuteZero.style.color="aliceblue";
		if(hour===12){
			const midday=document.getElementById("midDay");
			//console.log(midday);
			midday.style.color="aliceblue";
			midND=true;
		}
		else if(hour===0){
			const midnight=document.getElementById("midNight");
			//console.log(midnight);
			midnight.style.color="aliceblue";
			midND=true;
		}
		else{
			const other=document.getElementById("minute0");
			other.style.color="aliceblue";
		}
		midTime=true;
	}
}
function checkHour(hour){
	const si=document.getElementById("si");
	si.style.color="aliceblue";
	if(hour>12)
		hour-=12;
	if(hour===0)
		hour=12;
	var stringHour=hour.toString();
	if(hour<10){
		const hourLess10=document.getElementsByName(stringHour);
		for(var i=0;i<hourLess10.length;i++){
			hourLess10[i].style.color="aliceblue";
		}
	}
	else if(hour==10){
		const hour10=document.getElementsByName(stringHour);
		hour10[0].style.color="aliceblue";
	}
	else{
		const hour10=document.getElementsByName("10");
		hour10[0].style.color="aliceblue";
		const hourMore10=document.getElementsByName(stringHour);
		hourMore10[0].style.color="aliceblue";
	}
}
function checkMinute(minute){
	const bun=document.getElementById("bun");
	bun.style.color="#424242";
	if(){

	}
	else if(){

	}
	else if(){
		
	}
}
function getTime(){
	const date=new Date();
	const hours=date.getHours();
	const minutes=date.getMinutes();
	//console.log(`${hours}:${minutes}`);
	mid(hours, minutes);
	if(midND!==true){
		checkHour(hours);
	}
	if(midTime!==true){
		checkMinute(minutes);
	}
}

function init(){
	getTime();
	setInterval(getTime, 60000);
	table.style.color="#424242";
}
init();