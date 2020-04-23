const passport = require('passport')
const UserModel = require('@models/user.model')

const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')

// Jwt strategy
passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromHeader('authorization'),
			secretOrKey: process.env.JWT_SECRET,
		},
		(payload, done) => {
			UserModel.findById(payload.sub)
				.then((user) => {
					if (!user) {
						return done(null, false)
					}
					return done(null, user)
				})
				.catch((err) => done(err))
		}
	)
)

const LocalStrategy = require('passport-local').Strategy

passport.use(
	new LocalStrategy(
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
)
