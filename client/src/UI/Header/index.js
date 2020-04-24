//* dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

//* Fragments
import Button from './Button'

export default (props) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<NavLink class='navbar-brand' to='/'>
				Prostagm4
			</NavLink>
			<button
				class='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNavDropdown'
				aria-controls='navbarNavDropdown'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span class='navbar-toggler-icon'></span>
			</button>
			<div class='collapse navbar-collapse' id='navbarNavDropdown'>
				<ul class='navbar-nav mr-auto'>
					<li class='nav-item active'>
						<div class='nav-link'>
							<NavLink to='/dashboard'>dashboard</NavLink>
						</div>
					</li>
					<li class='nav-item'>
						<a class='nav-link' href='/contact'>
							contact
						</a>
					</li>
					<li class='nav-item dropdown'>
						<a
							class='nav-link dropdown-toggle'
							href='/features'
							id='navbarDropdownMenuLink'
							data-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'
						>
							features
						</a>
						<div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
							<a class='dropdown-item' href='/post'>
								post
							</a>
							<a class='dropdown-item' href='/chat'>
								chat
							</a>
						</div>
					</li>
				</ul>
				<ul class='navbar-nav'>
					<li class='nav-item'>
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
						<a class='btn btn-warning btn-large ml-1' href='/logout'>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
