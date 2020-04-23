const UserModel = require.main.require('@models/user.model')

module.exports = (req, res, next) => {
	// generate the token
	const token = require('@helpers/generateToken')(req.user._id)

	res.status(201).json({
		msg: 'User logged in successfully',
		credentials: { email: req.user.email },
		token,
	})
}
