import * as types from '../types'

const initialState = {
	error_registration: {
		name: null,
		email: null,
		password: null,
		confirmPassword: null
	},
	other: 'other'
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

		default:
			return { ...state }
	}
}
