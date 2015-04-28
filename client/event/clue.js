// Events

Template.clue.events({
	'click .like':function(evt, tmpl){
		var curlike = Likes.findOne({
			muser:Meteor.userId(), 
			clue:tmpl.data._id});
		if(!curlike){
			Likes.insert({
				muser:Meteor.userId(), 
				clue:tmpl.data._id});
		};
		//Session.set('updated', new Date());
	}
})


// Variables

Template.clue.helpers({
	numlikes: function(){
		// find the number of likes for this clue from database
		return Likes.find({clue:this._id}).count();
	},
	relationinfo: function(){
		if(!this.relationtomp){
			return "Anonymous";
		}
		else
		{
			return this.relationtomp;
		}
	}
	/*
	doeslike: function(){
		var doeslike = Likes.find({muser:Meteor.userId(), 
	                            clue:this._id});
		if(doeslike){
			return true;
		}
		else
		{
			return false;
		}
	}
	*/
})
