//* dependencies
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

//* services
import services from 'services/auth'

export default (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handle_login = (e) => {
		e.preventDefault()
		services.login({ email, password })
	}

	return (
		<div className='container container-fluid'>
			<div className='card'>
				<article className='card-body mx-auto'>
					<h4 className='card-title text-center mb-4 mt-3'>Sign in</h4>
					<hr />
					<p className='text-success text-center'>Some message goes here</p>
					<form>
						<div className='form-group'>
							<div className='input-group'>
								<div className='input-group-prepend'>
									<span className='input-group-text'>
										<i className='fa fa-user'></i>
									</span>
								</div>
								<input
									name='email'
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
							<button type='submit' className='btn btn-primary btn-block' onClick={handle_login}>
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
