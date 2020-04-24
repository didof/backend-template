const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
	},
})

UserSchema.pre('save', function (next) {
	// need the function form for the this.
	if (!this.isModified('password')) {
		// will refer UserSchema
		return next()
	}
	bcrypt.hash(this.password, 10, (err, hashed) => {
		if (err) {
			return next(err)
		}
		this.password = hashed
		next()
	})
})

UserSchema.methods.comparePassword = function (password, cb) {
	bcrypt.compare(password, this.password, (err, isMatch) => {
		if (err) {
			return cb(err)
		}
		if (!isMatch) {
			return cb(null, false)
		} else {
			return cb(null, this)
		}
	})
}

module.exports = mongoose.model('User', UserSchema)
