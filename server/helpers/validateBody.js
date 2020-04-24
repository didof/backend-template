const Joi = require('joi')

module.exports = {
	validateBody: (schema) => {
		return (req, res, next) => {
			console.log('[helpers/routes.validateBody] triggered')

			const result = Joi.validate(req.body, schema, { abortEarly: false })
			if (result.error) {
				return res.status(200).json({
					type: 'error',
					msg: 'There was a problem during the validation of your credentials',
					details: result.error,
				})
			}

			if (!req.value) {
				req.value = {}
			}
			req.value.body = result.value
			next()
		}
	},

	schemas: {
		register: Joi.object().keys({
			name: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().required(),
			confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
		}),
		login: Joi.object().keys({
			email: Joi.string().email().required(),
			password: Joi.string().required(),
		}),
	},
}

/**
    Se ci sono errori durante la validazione, manda json con errori al client.
    Se non è già presente una proprietà con body validato nella request (req.value)
    allora inizializzalo.
    Quindi in req.value.body inserisci i parametri validati
 */
