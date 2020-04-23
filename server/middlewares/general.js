const morgan = require('morgan')
const express = require('express')

const SET = {
	test: [morgan('dev'), express.json(), express.urlencoded({ extended: false })],
	production: [express.json(), express.urlencoded({ extended: false })]
}

module.exports = (env) => {
	console.log('[middlewares/general] set in use: ', SET[env])
	return SET[env]
}
