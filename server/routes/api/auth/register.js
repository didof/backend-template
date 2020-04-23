const UserModel = require.main.require('@models/user.model')

module.exports = (req, res, next) => {
	console.log('[register] req.value.body:', req.value.body)

	const { email, password } = req.value.body

	// Check if email is already taken
	UserModel.findOne({ email }).then((user) => {
		if (user) {
			return res.status(403).send({
				msg: 'The email you provided is already in use',
				credentials: {
					email,
				},
			})
		}
		// Create a new user
		const newUser = new UserModel({ email, password })
		newUser.save()

		// generate the token
		const token = require('@helpers/generateToken')(newUser._id)

		res.status(201).json({
			msg: 'New user added successfully',
			credentials: { email: newUser.email },
			token,
		})
	})
}
