const morgan = require('morgan')
const express = require('express')

module.exports = [
    morgan('dev'),
    express.json(),
    express.urlencoded({ extended: false })
]