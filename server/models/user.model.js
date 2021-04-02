let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    usernames: String,
	password: {
		type: String,
		require: true,
	},
    name: String,
	image: String,
    email: {
		type: String,
		require: true,
		unique: true,
	},
    phone: String,
    updated: { 
		type: Date, 
		default: Date.now 
	},
    createdAt: Date

});

let User = mongoose.model("User", userSchema, "users")
//first para is name of model, second is schema, final is name of collection in db
module.exports = User;