var map;

function intMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 52.5200, lng: 13.4050 }, zoom: 3,
	});