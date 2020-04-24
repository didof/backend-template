const UserModel = require.main.require('@models/user.model')

module.exports = (req, res, next) => {
	console.log('[register] req.value.body:', req.value.body)

	const { name, email, password } = req.value.body

	// Check if email is already taken
	UserModel.findOne({ email }).then((user) => {
		if (user) {
			return res.status(403).send({
				type: 'success',
				msg: 'The email you provided is already in use',
				credentials: {
					name,
					email,
				},
			})
		}
		// Create a new user
		const newUser = new UserModel({ name, email, password })
		newUser.save()

		// generate the token
		const token = require('@helpers/generateToken')(newUser._id)

		res.status(201).json({
			msg: 'New user added successfully',
			credentials: { name: newUser.name, email: newUser.email },
			token,
		})
	})
}
