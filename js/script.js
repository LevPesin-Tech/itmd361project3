function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 52.5200, lng: 13.4050 },
  });
  const chel = new google.maps.Marker({
    position: { lat: 55.1644, lng: 61.4358 },
    map,
    title: "Chelyabinsk",
    animation: google.maps.Animation.DROP,
  });
  const malor = new google.maps.Marker({
    position: { lat: 39.6953, lng: 3.0176 },
    map,
    title: "Mallorca",
    animation: google.maps.Animation.DROP,
  });
  const cali = new google.maps.Marker({
    position: { lat: 44.7229, lng: -117.9298 },
    map,
    title: "Newport Beach",
    animation: google.maps.Animation.DROP,
  });
  const abha = new google.maps.Marker({
    position: { lat: 43.2795, lng: 40.2706 },
    map,
    title: "Gagra, Abkhazia",
    animation: google.maps.Animation.DROP,
  });
}
		
	