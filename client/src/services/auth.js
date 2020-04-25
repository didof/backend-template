import axios from 'axios'

export default {
	register: (user) => {
		console.log('[services/auth] register triggered')
		return axios
			.post('/api/auth/register', user)
			.then((response) => response)
			.catch((err) => {
				console.error(err)
			})
	},
	login: (user) => {
		console.log('[services/auth] login triggered')
		return axios
			.post('/api/auth/login', user)
			.then((response) => {
				return response
			})
			.catch((err) => {
				return err
			})
	},
}
