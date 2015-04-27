
Template.allmppreview.helpers({
	mppreviews: function(){
		// this will be selectively returned based on coordinate
		return MPProfiles.find();
	}
})


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

Template.allclues.helpers({
	adding_clue: function(){
		return Session.get('adding_clue');
	},
	clues: function(){
		return Clues.find({mpprofileid: this._id});
	}
})


Template.clue.numlikes = function(){
	// find the number of likes for this clue from database
	return Likes.find({clue:this._id}).count();
}

Template.clue.likesthis = function(){
	var doeslike = Likes.find({muser:Meteor.userId(), 
	                            clue:this._id});
	if(doeslike){
		return "I like this"
	}
}

Template.mpprofile.helpers({
	/*
	nickname: function(){
		return "Tiff";
	},*/
	/*
	firstname: function(){
		return "Tiffany";
	},
	lastname: function(){
		return "Whitton";
	},
	datemissing: function(){
		return "1 jan 2015";
	},
	gender: function(){
		return "female";
	},
	agetoday: function(){
		return "27";
	},
	eyecolor: function(){
		return "Brown";
	},
	height: function(){
		return "5 feet 2 inches";
	},
	haircolor: function(){
		return "Dirty Blonde";
	}*/
});