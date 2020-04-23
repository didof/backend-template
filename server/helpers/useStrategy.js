const passport = require('passport')

module.exports = (strategy) => {
	return passport.authenticate(strategy, { session: false })
}
