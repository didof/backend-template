//* dependencies
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//* actions
import { action_login } from 'store/reducers/auth/action'

//* components
import Form from 'UI/form/index'

const Login = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handle_login = (e) => {
		e.preventDefault()

		const user = { email, password }

		props.login(user)
	}

	let errors = null
	if (props.auth && props.auth.error_login) {
		errors = props.auth.error_login
	}

	const config = {
		action: {
			onSubmit: handle_login,
		},
		header: {
			title: 'Login',
			subtitle: 'Connect to your account',
		},
		fields: [
			{
				type: 'email',
				label: 'Email address',
				value: email,
				changed: (e) => setEmail(e.currentTarget.value),
				error: errors.email,
			},
			{
				type: 'password',
				label: 'Pick password',
				value: password,
				changed: (e) => setPassword(e.currentTarget.value),
				error: errors.password,
			},
		],
		buttons: [
			[{ type: 'submit', label: 'Login', color: 'primary' }],
		],
		additional: {
			text: 'Forgot password? ',
			label: 'Receive a new one',
			url: '/forgotpassword',
		},
	}

	if (props.auth && props.auth.redirect) {
		return <Redirect to={props.auth.redirect} />
	} else {
		return <Form config={config} />
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => dispatch(action_login(user)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
