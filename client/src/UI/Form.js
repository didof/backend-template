// dependencies
import React from 'react'

export default props => {
    return (
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
						<select className='form-control' onChange={(e) => setJob(e.target.value)}>
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
    )
}