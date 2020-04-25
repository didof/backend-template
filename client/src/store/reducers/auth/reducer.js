import * as types from '../types'

const initialState = {
	error_registration: {
		name: null,
		email: null,
		password: null,
		confirmPassword: null,
	},
	redirect: null,
}

export default (state = initialState, action) => {
	console.log(`[redux] ${action.type} type triggered`)
	switch (action.type) {
		case types.REGISTER:
			return { ...state }
		case types.ERROR:
			const updatedState = { ...state }
			action.payload.forEach(({ label, message }) => {
				updatedState.error_registration[label] = message
			})
			return updatedState
		case types.RESET_ERROR:
			return {
				...state,
				error_registration: {
					name: null,
					email: null,
					password: null,
					confirmPassword: null,
				},
			}
		case types.SUCCESS:
			return {
				...state,
				error_registration: {
					name: 'valid',
					email: 'valid',
					password: 'valid',
					confirmPassword: 'valid',
				},
				redirect: '/dashboard'
			}

		default:
			return { ...state }
	}
}
