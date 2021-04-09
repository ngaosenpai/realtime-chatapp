const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
	locals: {
		username: {
			type: String,
			require: [true, 'Username required'],
			index: true,
			unique: true,
			sparse: true,
			lowercase: true,
			validate: {
				validator: async function (value, callback) {
					const self = this;
					return new Promise(async function(resolve, reject){
						await self.constructor.findOne({'locals.username': value})
							.then(user => {
								if (user) {
									return resolve(self.id === user.id);
								}
								return resolve(true);
							})
							.catch(err => { return resolve(false); });
					}).then(value => {
						return value;
					})
				},
				message: 'The username has already been taken'
			}
		},
		email: {
			type: String,
			require: [true, 'Email required'],
			index: true,
			unique: true,
			sparse: true,
			lowercase: true,
			validate: {
				validator: async function (value, callback) {
					const self = this;
					return new Promise(async function(resolve, reject){
						await self.constructor.findOne({'locals.username': value})
							.then(user => {
								if (user) {
									return resolve(self.id === user.id);
								}
								return resolve(true);
							})
							.catch(err => { return resolve(false); });
					}).then(value => {
						return value;
					})
				},
				message: `The email has already been taken`
			}
		},
		password: {
			type: String,
			require: [true, 'Password required'],
		},
		name: String,
		image: String,
		phone: String,
	},
    updated: { 
		type: Date, 
		default: null
	},
    createdAt: { 
		type: Date, 
		default: Date.now 
	}

});

UserSchema.pre('save', async function(next) {
	let user = this;
	const salt = await bcrypt.genSalt(10)
	user.locals.password = await bcrypt.hash(user.locals.password, salt)
	next();
})

let User = mongoose.model("User", UserSchema, "users")
module.exports = User;