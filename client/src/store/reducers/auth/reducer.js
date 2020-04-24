import * as types from '../types'

export default (state = { test: 'ci siamo' }, action) => {
	console.log(`[redux] ${action.type} type triggered`)
	switch (action.type) {
		case types.REGISTER:
			return { ...state }
		default:
			return { ...state }
	}
}
