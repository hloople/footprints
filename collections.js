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
MPProfiles = new Mongo.Collection('mppprofiles');

//tpyadnBpXo2RBc4dv
//MPProfiles.insert({firstname:"Tiffany", lastname:"Whitton", nickname:"Tiff", gender:"female", eyecolor:"green", height"5 feet 2 inches", haircolor:"dirty blonde", clues:{"b5DBKZqyTh95TE8yM", "vXiN43Gfqgrk7SkFx", "4eg2MqJsXjh9z4iAK", "r4cspGFaCYTwa4BXx", "4K3DXTr8A8pLtqu3p", "jWiBh5mYk7gZAxEeQ"}})