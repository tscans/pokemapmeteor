import {Pokemon} from '../imports/collections/pokemon';
var fs = Npm.require("fs");

Meteor.methods({
  'pokemon.add': function(loc) {
  	//0.04
  	var user = this.userId;
  	if(!user){
  		console.log('user not signed in');
  		return;
  	}
  	var range = 0.035
  	var range1 = Math.random() > 0.5 ? range:-range;
  	var range2 = Math.random() > 0.5 ? range:-range;
	var long = loc.longitude;
	long = long + Math.random() * (range1);
	var lat = loc.latitude;
	lat = lat + Math.random()*(range2);

	var iconPath = process.env.PWD + '/public';
	var icons = fs.readdirSync(iconPath);

	var min = Math.ceil(0);
	var max = Math.floor(250);
	var random = Math.floor(Math.random() * (max - min)) + min;
	console.log(icons[random]);
	return Pokemon.insert({image: icons[random], longitude: long, latitude: lat});
  },
  'pokemon.subtract':function(x){
  	var user = this.userId;
  	if(!user){
  		console.log('user not signed in');
  		return;
  	}
  	return Pokemon.remove(x);
  }
});
