var video = document.querySelector("#player1");
var volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0;
		console.log("Start of Video");
	}
	console.log("Current Viewing Location " + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if(video.muted == false){
		video.muted = true;
		this.innerHTML = "Unmute"
	}
	else{
		this.innerHTML = "Mute"
		video.muted = false;
	}
	console.log(video.muted)
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log(this.value);
	let vol = document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = (this.value / 100);
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool")
});
