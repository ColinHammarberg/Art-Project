
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 40.7400267, lng: -73.9935017 },
          zoom: 8,
        });
      
      
          var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      
          var locations = [
              { lat: 40.7400267, lng: -73.9935017 },
          ];
      
          var markers = locations.map(function(location, i) {
              return new google.maps.Marker({
                  position: location,
                  label: labels[i % labels.length]
              });
          });
      
      var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
      }