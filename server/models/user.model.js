const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueErrorValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
	locals: {
		username: {
			type: String,
			require: true,
			index: true,
			unique: true,
			sparse: true
		},
		password: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
			index: true,
			unique: true,
			sparse: true
		},
		name: String,
		image: String,
		phone: String,
	},
    updated: { 
		type: Date, 
		default: Date.now 
	},
    createdAt: { 
		type: Date, 
		default: Date.now 
	}

});
UserSchema.plugin(uniqueErrorValidator)
UserSchema.pre('save', async function(next) {
	let user = this;
	const salt = await bcrypt.genSalt(10)
	user.locals.password = await bcrypt.hash(user.locals.password, salt)
	next();
})


let User = mongoose.model("User", UserSchema, "users")
//first para is name of model, second is schema, final is name of collection in db
module.exports = User;