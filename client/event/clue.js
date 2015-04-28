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
	},
	count: function(){
		var days;
		if(this.date){
			var dateposted = this.date;
			var dm = moment(dateposted);
			var nw = moment();
			days = nw.diff(dm, 'days') + 1;
		}
		else {
			days = getRandomInt(0, 590);
		}

		if (days == 1) {
			return "1 day"
		}
		else {
			return days + " days"
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


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}