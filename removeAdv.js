var curCleanCycles = 0
var maxCleanCycles = 60

function removeAds_videopotok(){
	let existingAdv1 = document.querySelectorAll("#videpotok_over_float");
	for (let currAdv1 of existingAdv1) {
	  	currAdv1.remove();
	};	
}



function removeAds()
{
	document.querySelector("#anime-episode_last_html5_api").controls = true;
	document.querySelector(".vjs-control-bar").remove();
	document.querySelector("#overley-content").remove();

	curCleanCycles++;
	if (curCleanCycles == maxCleanCycles) {
		console.log("[NoAdsOnSovetRomantica] - Work is finished!")
		clearInterval(refreshIntervalId);
	};	
}

var refreshIntervalId = setInterval(removeAds, 1000);
console.log("[NoAdsOnSovetRomantica] - Start removeAds");
removeAds_videopotok();