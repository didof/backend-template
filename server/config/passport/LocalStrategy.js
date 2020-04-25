const LocalStrategy = require('passport-local').Strategy

const UserModel = require('@models/user.model')

module.exports = new LocalStrategy(
	{
		usernameField: 'email',
	},
	(email, password, done) => {
		UserModel.findOne({ email })
			.then((user) => {	
				if (!user) {
					return done(null, false)
				}
				user.comparePassword(password, done)
			})
			.catch((err) => {
				return done(err, false)
			})
	}
)
