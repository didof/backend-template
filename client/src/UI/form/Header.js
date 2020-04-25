// dependencies
import React from 'react'

export default ({ title, subtitle }) => {
	let additional = null
	if (subtitle) {
		additional = (
			<>
				<h5 className='text-center'>{subtitle}</h5>
				<p className='divider-text'></p>
			</>
		)
	}

	return (
		<>
			<h3 className='card-title mt-3 mb-4 text-center'>{title}</h3>
			<hr />
            {additional}
		</>
	)
}
