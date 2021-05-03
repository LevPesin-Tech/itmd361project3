function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: 39.6759, lng: -101.9390 },
  });
  const home = new google.maps.Marker({
    position: { lat: 41.8906, lng: -87.6399 },
    map,
    title: "Chicago",
    animation: google.maps.Animation.DROP,
  });
  const wyomingVisit = new google.maps.Marker({
    position: { lat: 42.9543, lng: -107.6443 },
    map,
    title: "Wyoming",
    animation: google.maps.Animation.DROP,
  });
  const michiganVisit = new google.maps.Marker({
    position: { lat: 43.7871, lng: -84.7195 },
    map,
    title: "Michigan",
    animation: google.maps.Animation.DROP,
  });
  const wisconsinVisit = new google.maps.Marker({
    position: { lat: 44.7229, lng: -89.6151 },
    map,
    title: "Wisconsin",
    animation: google.maps.Animation.DROP,
  });
  const floridaVisit = new google.maps.Marker({
    position: { lat: 27.7169, lng: -81.6192 },
    map,
    title: "Florida",
    animation: google.maps.Animation.DROP,
  });
  const arizonaVisit = new google.maps.Marker({
    position: { lat: 34.4706, lng: -111.7550 },
    map,
    title: "Arizona",
    animation: google.maps.Animation.DROP,
  });
}