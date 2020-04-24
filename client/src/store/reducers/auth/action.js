import * as types from '../types'

//* services
import services from 'services/auth'

export const action_register = (credentials) => {
	return (dispatch) => {
		//TODO: dispatch(loading())

        // only email and password are sent to services.register for it is used
        // in the passport-local strategy
        const user = {
            email: credentials.email,
            password: credentials.password
        }
		services.register(user)

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
            password: credentials.password
        }
		services.login(user)

        //TODO: other fields will be added to the collection
	}
}
