const morgan = require('morgan')
const express = require('express')

module.exports.test = [
	morgan('dev'), express.json(), express.urlencoded({ extended: false })
]

module.exports.dev = [
	morgan('tiny'), express.json(), express.urlencoded({ extended: false })
]

module.exports.production = [
	express.json(), express.urlencoded({ extended: false })
]
