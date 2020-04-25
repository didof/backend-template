// dependencies
import React from 'react'

export default ({ type, label, value, changed }) => {
	return (
		<div className='form-group input-group input-group-lg'>
			<div className='input-group-prepend'>
				<span className='input-group-text'>
					<i className='fa fa-user'></i>
				</span>
			</div>
			<input
				className='form-control '
				placeholder={label}
				type={type}
				value={value}
				onChange={changed}
			/>
		</div>
	)
}
