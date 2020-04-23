const morgan = require('morgan')
const express = require('express')

// module.exports.test = [
// 	morgan('dev'), express.json(), express.urlencoded({ extended: false })
// ]

// module.exports.production = [
// 	express.json(), express.urlencoded({ extended: false })
// ]

const SET = {
	test: [morgan('dev'), express.json(), express.urlencoded({ extended: false })],
	production: [express.json(), express.urlencoded({ extended: false })]
}

module.exports = (env) => {
	console.log('[middlewares/general] set in use: ', env)
	
	return SET[env]
}
