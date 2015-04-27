Meteor.startup(function(){
	return Meteor.methods({
		'removeClues':function(){
			Clues.remove({});
		},
		'removeLikes':function(){
			Likes.remove({});
		}
	})
})