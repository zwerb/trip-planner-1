import mapboxgl from "mapbox-gl";

const iconURLs = {
  hotel: "/public/images/hotel-marker.png",
  restaurant: "/public/images/restaurant-marker.png",
  activity: "/public/images/activity-marker.png",
};

const buildMarker = function (type, coords) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV

  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

  const fullStackMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coords);

  return fullStackMarker;
};

export default buildMarker;
