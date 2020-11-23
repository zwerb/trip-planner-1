import mapboxgl from "mapbox-gl";

import buildMarker from "./marker.js"

mapboxgl.accessToken = "pk.eyJ1IjoiaDBwbHluIiwiYSI6ImNraHVzMmwxbzFnODUyd21jYzVianhxZnEifQ.bmtXAlOmTo12ugqf7fz5Yw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV

markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(/public/images/activity-marker.png)";

const fullStackMarker = new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

buildMarker("hotel",[-74.01, 40.71]).addTo(map);
buildMarker("restaurant",[-74.02, 40.72]).addTo(map);
buildMarker("activity",[-74.015, 40.725]).addTo(map);
