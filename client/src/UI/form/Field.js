// dependencies
import React from 'react'

export default ({ type, label, value, changed, error }) => {
	let shape = 'form-control'
	let placeholder = label
	if (error && error !== 'valid') {
		shape += ' is-invalid'
		placeholder = error
	}
	if (error && error === 'valid') {
		shape += ' is-valid'
	}
		return (
			<div className='form-group input-group input-group-lg'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>
						<i className='fa fa-user'></i>
					</span>
				</div>
				<input
					className={shape}
					placeholder={placeholder}
					type={type}
					value={value}
					onChange={changed}
				/>
			</div>
		)
}
