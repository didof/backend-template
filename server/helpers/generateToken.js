const Jwt = require('jsonwebtoken')

module.exports = (id) => {
	return Jwt.sign(
		{
			iss: 'prostgm4',
			sub: id,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 1),
		},
		process.env.JWT_SECRET
	)
}
