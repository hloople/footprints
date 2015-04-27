Router.map(function(){
	this.route('locprofile', {path: '/'});
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