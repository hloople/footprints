// title:
// description:
// url:
// mpprofileid: mpprofile id
Clues = new Meteor.Collection('clues');
// Might change likes, doesn't seem like good design
Likes = new Meteor.Collection('likes');


// MPProfiles contains:
// profilepicture: String (a valid path)
// firstname: String
// lastname: String
// nickname: String
// datemissing: Number
// gender: String
// eyecolor: String
// height: Number in cm
// haircolor: String
// loclat: Number
// loclng: Number
// found: Boolean
// detectivename : String
// detectiveemail : String
// detectivephone: String
// appealauthor: String
// appealrelation: String
// appeal: String
// tag: hospital/school/
MPProfiles = new Mongo.Collection('mppprofiles');

//tpyadnBpXo2RBc4dv
//MPProfiles.insert({firstname:"Tiffany", lastname:"Whitton", nickname:"Tiff", gender:"female", eyecolor:"green", height"5 feet 2 inches", haircolor:"dirty blonde", clues:{"b5DBKZqyTh95TE8yM", "vXiN43Gfqgrk7SkFx", "4eg2MqJsXjh9z4iAK", "r4cspGFaCYTwa4BXx", "4K3DXTr8A8pLtqu3p", "jWiBh5mYk7gZAxEeQ"}})
// 33.909925, -84.488583 lat lng
// Michael Freer (770) 794-5477
/*
MPProfiles.insert({
	profilepicture: "",
	firstname: "",
	lastname: "",
	nickname: "",
	datemissing: "",
	gender: "",
	eyecolor: "",
	height: "",
	haircolor: "",
	loclat: "",
	loclng: "",
	found: "",
	detectivename: "",
	detectiveemail: "",
	detectivephone: "",
	appealauthor: "",
	appealrelation: "",
	appeal: ""
})
*/
/*
MPProfiles.insert({
	profilepicture: "fearrie_ray.png",
	firstname: "Fearrie",
	lastname: "Ray",
	nickname: "Clair Jax",
	datemissing: new Date("Aug 17, 2010"),
	gender: "Female",
	eyecolor: "Brown",
	height: "5 ft 9 in.",
	haircolor: "Black",
	loclat: 42.363376,
	loclng: -71.068633,
	found: false,
	detectivename: "Boston Police A-1",
	detectiveemail: "",
	detectivephone: "(617) 343-4248",
	appealauthor: "Sean Kelly",
	appealrelation: "Former boyfriend",
	appeal: "We begged them to put her picture on TV but they never did. Please help!"
})
*/