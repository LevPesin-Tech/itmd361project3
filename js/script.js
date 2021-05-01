var map;

function intMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 52.5200, lng: 13.4050}, zoom: 3,
	});
	
	const chel = new google.map.Marker({
		position: {lat: 55.1644, lng: 61.4358}, 
		map,
		title: "Chelyabinsk",
		animation: google.maps.Animation.DROP,
	});
	
	const malor = new google.amp.Marker ({
		position: {lat: 39.6953, lng: 3.0176},
		map,
		title: "Mallorca",
		animation: google.maps.Animation.DROP,
	});
	