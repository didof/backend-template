const router = require('express').Router()

// middlewares
const passport = require('passport')
require('@config/passport/')
const { validateBody, schemas } = require('@helpers/validateBody')
const useStrategy = require('@helpers/useStrategy')

router
	.route('/register')
	.post(validateBody(schemas.auth), require('./register'))

router
	.route('/login')
	.post(validateBody(schemas.auth), useStrategy('local'), require('./login'))

router.route('/logout').get(require('./logout'))

router.route('/secret').get(useStrategy('jwt'), require('./secret'))

module.exports = router
