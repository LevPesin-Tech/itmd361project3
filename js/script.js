var map;

function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 52.5200, lng: 13.4050}, 
		zoom: 2,
	});
	
	const chel = new google.map.Marker({
		position: {lat: 55.1644, lng: 61.4358}, 
		map,
		title: "Chelyabinsk",
		animation: google.maps.Animation.DROP,
	});
	
	const malor = new google.map.Marker({
		position: {lat: 39.6953, lng: 3.0176},
		map: map
		title: "Mallorca",
		animation: google.maps.Animation.DROP,
	});
	
	const cali = new google.map.Marker({
		position: {lat: 33.6189, lng: -117.9298},
		map,
		title: "Newport Beach",
		animation: google.maps.Animation.DROP,
	});
	
	const abha = new google.map.Marker({
		position: {lat: 43.2795, lng: 40.2706},
		map,
		title: "Gagra, Abkhazia",
		animation: google.maps.Animation.DROP,
	});
}
		
	