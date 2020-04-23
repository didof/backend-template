const morgan = require('morgan')
const express = require('express')

const SET = {
	test: [morgan('dev'), express.json(), express.urlencoded({ extended: false })],
	prod: [express.json(), express.urlencoded({ extended: false })],
}

module.exports = (app) => {
	const env = process.env.NODE_ENV

	console.log('[config/middlewares/setup] set in use: ', SET[env])
	return SET[env]
}
