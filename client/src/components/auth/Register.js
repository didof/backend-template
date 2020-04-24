// dependencies
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

//* actions
import { action_register } from 'store/reducers/auth/action'

const Register = (props) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [job, setJob] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handle_register = (e) => {
		e.preventDefault()
		const user = { name, email, job, password, confirmPassword }
		props.register(user)
	}

	if(props.auth) {
		console.log(props.auth)
		//TODO: notify the errors in the form
	}

	return (
		<div className='card bg-light'>
			<article className='card-body mx-auto'>
				<h4 className='card-title mt-3 mb-4 text-center'>Create Account</h4>
				<hr />
				<p className='text-center'>Get started with your free account</p>
				<p className='divider-text'></p>
				<form onSubmit={handle_register}>
					<div className='form-group input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-user'></i>
							</span>
						</div>
						<input
							className='form-control'
							placeholder='Full name'
							type='text'
							value={name}
							onChange={(e) => setName(e.currentTarget.value)}
						/>
					</div>
					<div className='form-group input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-envelope'></i>
							</span>
						</div>
						<input
							className='form-control'
							placeholder='Email address'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
						/>
					</div>
					<div className='form-group input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-building'></i>
							</span>
						</div>
						<select disabled className='form-control' onChange={(e) => setJob(e.target.value)}>
							<option value="student">student</option>
							<option value="private">private</option>
							<option value="public">public</option>
							<option value="unemployed">unemployed</option>
							<option value="other">other</option>
						</select>
					</div>
					<div className='form-group input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-lock'></i>
							</span>
						</div>
						<input
							className='form-control'
							placeholder='Create password'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
						/>
					</div>
					<div className='form-group input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-lock'></i>
							</span>
						</div>
						<input
							className='form-control'
							placeholder='Repeat password'
							type='password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.currentTarget.value)}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-primary btn-block'>
							Create Account
						</button>
					</div>
					<p className='text-center'>
						Have an account? <NavLink to='/login'>Login</NavLink>
					</p>
				</form>
			</article>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		register: (user) => dispatch(action_register(user))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)