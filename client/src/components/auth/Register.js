// dependencies
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//* actions
import { action_register } from 'store/reducers/auth/action'

//* components
import Form from 'UI/form/index'

const Register = (props) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handle_register = (e) => {
		e.preventDefault()
		const user = { name, email, password, confirmPassword }
		props.register(user)
	}

	let errors = null
	if (props.auth && props.auth.error_registration) {
		errors = props.auth.error_registration
		if (errors.password && errors.password !== 'valid')
			errors.confirmPassword = 'must be a valid password'
	}

	const config = {
		action: {
			onSubmit: handle_register,
		},
		header: {
			title: 'Create Account',
			subtitle: 'Get started with your free account',
		},
		fields: [
			{
				type: 'text',
				label: 'Enter name',
				value: name,
				changed: (e) => setName(e.currentTarget.value),
				error: errors.name,
			},
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
			{
				type: 'password',
				label: 'Confirm password',
				value: confirmPassword,
				changed: (e) => setConfirmPassword(e.currentTarget.value),
				error: errors.confirmPassword,
			},
		],
		buttons: [
			// [
			// 	{ type: 'click', label: 'Get Back' },
			// 	{ type: 'click', label: 'Need help', color: 'info' },
			// ],
			[{ type: 'submit', label: 'Create account', color: 'primary' }],
		],
		additional: {
			text: 'Already have an account? ',
			label: 'Login',
			url: '/login',
		},
	}

	if (props.auth && props.auth.redirect) {
		return <Redirect to={props.auth.redirect} />
	} else {
		return (
			<div className='card bg-light'>
				<Form config={config} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		register: (user) => dispatch(action_register(user)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
