// Events

Template.mppreview.events({
	'click .mppreviewbox':function(evt, tmpl){
		Router.go('mpprofile', {_id:tmpl.data._id});
	}
})


// Variables

Template.mppreview.helpers({
	src: function(){
		return MPProfiles.findOne(this._id).profilepicture;
	},
	name: function(){
		var name =
		MPProfiles.findOne(this._id).firstname + " " + MPProfiles.findOne(this._id).lastname;
		return name;
	},
	missingdays: function(){
		var datemissing = MPProfiles.findOne(this._id).datemissing;
		var dm = moment(datemissing);
		var nw = moment();
		var count = nw.diff(dm, 'days');
		return count;
	},
	found: function(){
		if(MPProfiles.findOne(this._id).found){
			return "Yes"
		}
		else
		{
			return "No"
		}
	}
})
