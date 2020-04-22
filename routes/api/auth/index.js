require('module-alias/register')

const router = require('express').Router()
const passport = require('passport')
require('@config/passport')

const { validateBody, schemas } = require('@helpers/routes')

router
	.route('/register')
	.post(validateBody(schemas.auth), require('./register'))

router
	.route('/secret')
	.get(passport.authenticate('jwt', { session: false }), require('./secret'))

module.exports = router
