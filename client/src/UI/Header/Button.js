//* dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ shape, label, url }) => {
	return (
		<NavLink className={shape} to={url}>
			{label}
		</NavLink>
	)
}
