function initMap(){
var el = document.getElementById('map');
	var myLocation = new google.maps.LatLng(52.5200, 13.4050);
	var mapOptions = {
		center: myLocation,
		zoom: 2,
		mapTypeId: google.maps.MapTypeId.hybrid,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

    var myMap = new google.maps.Map(el, mapOptions);
	
	
	var chel = new google.maps.Marker({
      position: {lat: 55.1644, lng: 61.4358},
      map: myMap,
	  title: "Chelyabinsk",
      animation: google.maps.Animation.DROP
    });
	
	var malor = new google.maps.Marker({
      position: {lat: 39.6953, lng: 3.0176},
      map: myMap,
	  title: "Mallorca",
      animation: google.maps.Animation.DROP
    });
	
	var cali = new google.maps.Marker({
      position: {lat: 33.6189, lng: -117.9298},
      map: myMap,
	  title: "Newport Beach",
      animation: google.maps.Animation.DROP
    });
	
	var abha = new google.maps.Marker({
      position: {lat: 43.2795, lng: 40.2706},
      map: myMap,
	  title: "Gagra, Abkhazia",
      animation: google.maps.Animation.DROP
    });
}
google.maps.event.addDomListener(window, 'load', initMap);
		
	