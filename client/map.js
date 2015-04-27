
if (Meteor.isClient) {
  // Start up the map
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.minimap.helpers({
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        var myLatlng = new google.maps.LatLng(-37.8136, 144.9631);
        var mapOptions = {
          zoom: 8,
          center: myLatlng
        }

        GoogleMaps.ready('mpprofilemap', function(map) {
        var marker = new google.maps.Marker({
          position: map.options.center,
          map: map.instance,
          icon: "map-pin.png"
        });
      });
      return mapOptions;
      }
    }
  });
}




if (Meteor.isClient) {
  // Start up the map
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.bigmap.helpers({
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        var myLatlng = new google.maps.LatLng(-37.8136, 144.9631);
        var mapOptions = {
          zoom: 8,
          center: myLatlng
        }

        GoogleMaps.ready('locprofilemap', function(map) {
        var marker = new google.maps.Marker({
          position: map.options.center,
          map: map.instance,
          icon: "map-pin.png"
        });
      });
      return mapOptions;
      }
    }
  });

  Template.bigmap.onCreated(function() {
    GoogleMaps.ready('locprofilemap', function(map) {
      
      google.maps.event.addListener(map.instance, 'bounds_changed', function() {
        var m = MPProfiles.find().fetch();
        for (var i=0; i<m.length; i++){
          if( map.instance.getBounds().contains(new google.maps.LatLng(m[i].lat, m[i].lng))){
            console.log("%d %d", m[i].lat, m[i].lng);
            // add the mppreview
          }
        } 
      });

      MPProfiles.find().observe({
        added: function (document) {
          // create a marker
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.lat, document.lng),
            map: map.instance,
            id: document._id
          });

          markers[document._id] = marker;
        }
      });
    });
  });
}