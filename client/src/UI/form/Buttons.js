// dependencies
import React from 'react'

export default ({ list }) => {
	const buttons = list.map((row, index) => {
		if (row.length < 2) {
			const { type, label, color = 'secondary' } = row[0]
			const shape = 'btn btn-' + color + ' btn-lg btn-block'
			return (
				<div className='form-group' key={index}>
					<button type={type} className={shape}>
						{label}
					</button>
				</div>
			)
		} else {
			return (
				<div className='form-group'>
						{row.map(({ type, label, color = 'secondary' }, index) => {
							const shape = 'btn btn-' + color + ' btn-lg'

							return (
								<button type={type} className={shape} key={index}>
									{label}
								</button>
							)
						})}
				</div>
			)
		}
	})

	return <div>{buttons}</div>
}
