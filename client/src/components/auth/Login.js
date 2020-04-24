//* dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

export default (props) => {
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
									name=''
									className='form-control'
									placeholder='Email or login'
									type='email'
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
								<input className='form-control' placeholder='******' type='password' />
							</div>
						</div>
						<div className='form-group'>
							<button type='submit' className='btn btn-primary btn-block'>
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
