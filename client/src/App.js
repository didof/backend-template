//* dependencies
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store/store'

//* UI
import Layout from 'UI/Layout'
import Main from 'UI/Main'

export default () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout />
				<Main />
			</BrowserRouter>
		</Provider>
	)
}
