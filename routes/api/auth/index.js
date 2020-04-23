const router = require('express').Router()

// middlewares
const passport = require('passport')
require('@config/passport/')
const { validateBody, schemas } = require('@helpers/validateBody')

router
	.route('/register')
	.post(validateBody(schemas.auth), require('./register'))

router
	.route('/login')
	.post(validateBody(schemas.auth), passport.authenticate('local', { session: false }), require('./login'))

router.route('/logout').get(require('./logout'))

router
	.route('/secret')
	.get(passport.authenticate('jwt', { session: false }), require('./secret'))

module.exports = router
