//* dependencies
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

//* actions
import { action_login } from 'store/reducers/auth/action'

const Login = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handle_login = (e) => {
		e.preventDefault()

		const user = { email, password }

		props.login(user)
	}

	return (
		<div className='container container-fluid'>
			<div className='card'>
				<article className='card-body mx-auto'>
					<h4 className='card-title text-center mb-4 mt-3'>Login</h4>
					<hr />
					<p className='text-success text-center'>Some message goes here</p>
					<form onSubmit={handle_login}>
						<div className='form-group'>
							<div className='input-group'>
								<div className='input-group-prepend'>
									<span className='input-group-text'>
										<i className='fa fa-user'></i>
									</span>
								</div>
								<input
									className='form-control'
									placeholder='Email'
									type='email'
									value={email}
									onChange={(e) => setEmail(e.currentTarget.value)}
								/>
							</div>
						</div>
						<div className='form-group'>
							<div className='input-group'>
								<div className='input-group-prepend'>
									<span className='input-group-text'>
										<i className='fa fa-lock'></i>
									</span>
								</div>
								<input
									className='form-control'
									placeholder='******'
									type='password'
									value={password}
									onChange={(e) => setPassword(e.currentTarget.value)}
								/>
							</div>
						</div>
						<div className='form-group'>
							<button
								type='submit'
								className='btn btn-primary btn-block'
							>
								Login
							</button>
						</div>
						<p className='text-center'>
							Forgot password? <NavLink to='/'>Now I can't help you</NavLink>
						</p>
					</form>
				</article>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => dispatch(action_login(user)),
	}
}

export default connect(null, mapDispatchToProps)(Login)
