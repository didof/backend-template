// dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

import Header from './Header'
import Field from './Field'
import Buttons from './Buttons'

export default ({ config }) => {
	const { action, header, fields, buttons, additional } = config
	const inputs = fields.map((input, index) => {
		return <Field key={index} {...input} />
	})

	return (
		<article className='card-body mx-auto'>
			<Header {...header} />
			<form onSubmit={action.onSubmit}>
				{inputs}
				<Buttons list={buttons} />
			</form>
			<h5 className='text-center'>
				{additional.text}
				<NavLink to={additional.url}>{additional.label}</NavLink>
			</h5>
		</article>
	)
}
