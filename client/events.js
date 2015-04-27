
// change nav to mpprofile
Template.mpprofile.events({
	// add a click event listener to the addClue class in mpprofile.html
	'click .addClueClass': function(evt, tmpl){
		evt.preventDefault(); // prevent default because default would refresh the screen
		Session.set('adding_clue', true);
	}
})

// Run this function when main template is rendered
Template.allclues.rendered = function(){
	setTimeout(function(){
		masonize(function(){
			$('.search-query').focus();
		})
	}, 500); // run for half a second
}

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
		Session.set('updated', new Date());
	}
})


Template.mppreview.events({
	'click .mppreviewbox':function(evt, tmpl){
		console.log("profile box was clicked"); // todo delete
		console.log("the id is %s", tmpl.data._id); //todo delete
		Router.go('mpprofile', {_id:tmpl.data._id});
	}
})


Template.addclue.events({
	// tmpl is the template in html file
	'click .save':function(evt,tmpl){
		var title = tmpl.find('.title').value;
		var description = tmpl.find('.description').value;
		var url = tmpl.find('.src').value;
		var height = getRandomInt(200,300);
		// I could optionally add height and width into the database
		Clues.insert({title:title, description:description, src:url, height:height});
		Session.set('adding_clue', false);
	},
	'click .cancel':function(evt,tmpl){
		Session.set('adding_clue', false);
	},
	'click .close':function(evt,tmpl){
		Session.set('adding_clue', false);
	}
})

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Uses masonry backend
function masonize(callback) {
	var container = $('#cluebox')
	container.masonry({
		itemSelector:'.item',
		gutter:20
	})
	if(callback){
		callback()
	};

}