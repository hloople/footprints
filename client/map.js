
if (Meteor.isClient) {
  // Start up the map
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.minimap.helpers({
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        console.log(this);
        var myLatlng = new google.maps.LatLng(this.loclat, this.loclng);
        var mapOptions = {
          zoom: 8,
          center: myLatlng
        }

        GoogleMaps.ready('mpprofilemap', function(map) {
        var marker = new google.maps.Marker({
          position: map.options.center,
          map: map.instance,
          icon: "/map-pin.png"
        });
      });
      return mapOptions;
      }
    }
  });
}


