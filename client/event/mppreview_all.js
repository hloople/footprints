// Run this function when main template is rendered
Template.allmppreview.rendered = function(){
  setTimeout(function(){
    masonize(function(){
      $('.search-query').focus();
    })
  }, 500); // run for half a second
}

var markers = [];

if (Meteor.isClient) {
  Meteor.subscribe("clues");

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
          			zoom: 3,
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
    
    Clues.find().observe({
      added: function(entry) {
        var m = markers[entry.mpprofileid];
        if(m){
          console.log("marker is:");
          console.log(m);
          console.log(entry.mpprofileid);
          m.setAnimation(google.maps.Animation.BOUNCE);
          setTimeout(function(){ m.setAnimation(null); }, 730);
        }
      }
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
    markers[m[i]._id] = marker;
    
    if(map.instance.getBounds().contains(posn)){
      mppreview_list[mppreview_list.length] = m[i];
    }
  }
  Session.set('mppreview_list', mppreview_list);
}


// Uses masonry backend
function masonize(callback) {
  var container = $('#mppreviewbox')
  container.masonry({
    itemSelector:'.item',
    gutter:20
  })
  if(callback){
    callback()
  };

}







