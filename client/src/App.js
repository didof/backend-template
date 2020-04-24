//* dependencies
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

//* UI
import Layout from 'UI/Layout'
import Main from 'UI/Main'

//TODO: implement BrowserRouter configuration and redux store in this component

export default () => {
	return (
		<BrowserRouter>
			<Layout />
			<Main />
		</BrowserRouter>
	)
}
