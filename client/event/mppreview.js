// Events

Template.mppreview.events({
	'click .mppreviewbox':function(evt, tmpl){
		Router.go('mpprofile', {_id:tmpl.data._id});
	}
})


// Variables

Template.mppreview.helpers({
	src: function(){
		return "profile-pic.jpg";
		
	},
	name: function(){
		var name =
		MPProfiles.findOne(this._id).firstname +
		" " +
		MPProfiles.findOne(this._id).lastname;
		return name;
	},
	timesincemissing: function(){
		return "123 days";
	},
	found: function(){
		return "No";
	}
})
