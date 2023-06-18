mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtZ2FydHJlbGwiLCJhIjoiY2w3OWt3MW00MDNjbDN2cGRpc20ya3JnbyJ9.6t2ISNlyP1BvBmkSH2Ks_Q';

// initialize map
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/samgartrell/clj0pq94e00go01pwfdgp1syt',
    center: [-96.5, 36],
    zoom: 3
});

// Add nav and geolocate buttons
map.addControl(
    new mapboxgl.NavigationControl()
);
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    })
);

// Get the modal
var modal = document.getElementById("spotify-modal");

// Get the button that opens the modal
var btn = document.getElementById("opener");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}