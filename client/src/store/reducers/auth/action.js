import * as types from '../types'

//* services
import services from 'services/auth'

const loadErrors = (errors) => {
	return { type: types.ERROR, payload: errors }
}

export const action_register = (credentials) => {
	return (dispatch) => {
		//TODO: dispatch(loading())

		const user = {
			name: credentials.name,
			email: credentials.email,
			password: credentials.password,
			confirmPassword: credentials.confirmPassword,
		}
		services.register(user).then((result) => {
			console.log('[auth/action]', result)
			if (result.data.type === 'error') {
                const errors = result.data.details.details.map(error => {
                    return { label: error.context.label, message: error.message }
                })
				dispatch(loadErrors(errors))
			}
		})

		//TODO: other fields will be added to the collection
	}
}

export const action_login = (credentials) => {
	return (dispatch) => {
		//TODO: dispatch(loading())

		// only email and password are sent to services.register for it is used
		// in the passport-local strategy
		const user = {
			email: credentials.email,
			password: credentials.password,
		}
		services.login(user)

		//TODO: other fields will be added to the collection
	}
}
