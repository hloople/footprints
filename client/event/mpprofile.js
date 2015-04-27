Router.map(function(){
	this.route('mpprofile', {path: 'profile/:_id', 
		                     data: function(){
			                 	var p = MPProfiles.findOne(this.params._id);
			                 	var datemissing = p.datemissing;
			                 	var dm = moment(datemissing);
			                 	var nw = moment();
			                 	p.datemissingcount = nw.diff(dm, 'days');
			                 	p.datemissing = moment(p.datemissing).format('MMMM Do YYYY');
			                 	return p;
		                    }});
});


Template.mpprofile.events({
	// add a click event listener to the addClue class in mpprofile.html
	'click .addClueClass': function(evt, tmpl){
		evt.preventDefault(); // prevent default because default would refresh the screen
		Session.set('adding_clue', true);
	}
})


