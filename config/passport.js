require('module-alias/register')

const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const UserModel = require('@models/user.model')

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
