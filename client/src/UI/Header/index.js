//* dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

//* Fragments
import Button from './Button'

export default (props) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<NavLink className='navbar-brand' to='/'>
				Prostagm4
			</NavLink>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavDropdown'
				aria-controls='navbarNavDropdown'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNavDropdown'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<div className='nav-link'>
							<NavLink to='/dashboard'>dashboard</NavLink>
						</div>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/contact'>
							contact
						</a>
					</li>
					<li className='nav-item dropdown'>
						<a
							className='nav-link dropdown-toggle'
							href='/features'
							id='navbarDropdownMenuLink'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'
						>
							features
						</a>
						<div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
							<a className='dropdown-item' href='/post'>
								post
							</a>
							<a className='dropdown-item' href='/chat'>
								chat
							</a>
						</div>
					</li>
				</ul>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Button
							shape='btn btn-primary ml-1 text-white'
							label='login'
							url='/login'
						/>
						<Button
							shape='btn btn-primary ml-1 text-white'
							label='register'
							url='/register'
						/>
						<a className='btn btn-warning btn-large ml-1' href='/logout'>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
