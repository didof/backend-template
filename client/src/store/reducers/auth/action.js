import * as types from '../types'

//* services
import services from 'services/auth'

const resetErrors = () => {
	return { type: types.RESET_ERROR }
}

const loadErrors = (errors, process) => {
	switch (process) {
		case 'registration':
			return { type: types.ERROR, payload: errors }
		default:
			return { type: types.ERROR_LOGIN, payload: errors }
	}
}

const success = () => {
	return { type: types.SUCCESS }
}

const redirect = (url) => {
	return { type: types.REDIRECT, payload: url }
}

export const action_register = (credentials) => {
	return (dispatch) => {
		dispatch(resetErrors())
		services.register(credentials).then((result) => {
			if (result.data.type === 'error') {
				const errors = result.data.details.details.map((error) => {
					const fixMsg = error.message.split(' ').splice(1).join(' ')

					return { label: error.context.label, message: fixMsg }
				})
				dispatch(loadErrors(errors, 'registration'))
			} else {
				dispatch(success())
				setTimeout(() => {
					dispatch(redirect('/dashboard'))
					dispatch(resetErrors())
				}, 500)
			}
		})
	}
}

export const action_login = (credentials) => {
	return (dispatch) => {
		services.login(credentials).then((result) => {
			if (result.data.type === 'error') {
				const errors = result.data.details.details
				dispatch(loadErrors('must fill this input', 'login'))
			} else {
				dispatch(success())
				setTimeout(() => {
					dispatch(redirect('/dashboard'))
					dispatch(resetErrors())
				}, 500)
			}
		}).catch(err => {
			dispatch(loadErrors('wrong credentials', 'login'))
		})
	}
}
