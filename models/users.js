const mongoose = require('mongoose');

const adressSchema = mongoose.Schema({
	street : String,
	city : String,
	zipCode: String,
	isFavourite: Boolean,
});

const userSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	inscriptionDate: Date,
	addresses: [adressSchema],
});

const User = mongoose.model('users', userSchema);

module.exports = User;
