
if (Meteor.isClient) {
  //Meteor.subscribe("mpprofiles");

  Template.allmppreview.helpers({
    mppreviews: function(){
      return Session.get('mppreview_list');
    }
  });

  // Start up the map
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  	Template.bigmap.helpers({
    	mapOptions: function() {
      		if (GoogleMaps.loaded()) {
        		var myLatlng = new google.maps.LatLng(42.340085, -71.089102);
        		var mapOptions = {
          			zoom: 8,
          			center: myLatlng
        		}            
        	}
        	return mapOptions;
        }
    });

  Template.bigmap.onCreated(function() {
    GoogleMaps.ready('locprofilemap', function(map) {
      setMPPreviewList(map);

      google.maps.event.addListener(map.instance, 'bounds_changed', function() {
        console.log("bounds changed!");
        setMPPreviewList(map);
      });
    });
  });
}

function setMPPreviewList(map) {
  var m = MPProfiles.find().fetch();
  var mppreview_list = [];
  Session.set('mppreview_list', []);

  for(var i = 0; i < m.length; i++){
    var img = {
      url: m[i].profilepicture,
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(10,20),
    };
    
    var posn = new google.maps.LatLng(m[i].loclat, m[i].loclng);
    var marker = new google.maps.Marker({
                  position: posn,
                  map: map.instance,
                  icon: img,});
    
    if(map.instance.getBounds().contains(posn)){
      mppreview_list[mppreview_list.length] = m[i];
      //marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  Session.set('mppreview_list', mppreview_list);
}










