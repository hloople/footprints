
Template.allmppreview.helpers({
	mppreviews: function(){
		// this will be selectively returned based on coordinate
		return MPProfiles.find();
	}
})
