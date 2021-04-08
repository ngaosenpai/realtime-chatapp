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
				isAsync: true,
				validator: function(value, isValid) {
					const self = this;
					return self.constructor.findOne({ 'locals.username': value })
						.exec(function(err, user){
							if(err){
								throw err;
							}
							else if(user) {
								if(self.id === user.id) {  // if finding and saving then it's valid even for existing email
									return isValid(true);
								}
								return isValid(false);  
							}
							else{
								return isValid(true);
							}

						})
				},
				messages: `The username has already been taken`
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
				isAsync: true,
				validator: function(value, isValid) {
					const self = this;
					return self.constructor.findOne({ 'locals.email': value })
						.exec(function(err, user){
							if(err){
								throw err;
							}
							else if(user) {
								console.log('validation')
								console.log(self)
								console.log(user)
								if(self.id === user.id) {  // if finding and saving then it's valid even for existing email
									return isValid(true);
								}
								return isValid(false);  
							}
							else{
								return isValid(true);
							}

						})
				},
				messages: `The email has already been taken`
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