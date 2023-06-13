import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './providers/ThemeProvider'
import firebase from 'firebase/compat'
import { firebaseConfig } from '../config/config'

firebase.initializeApp(firebaseConfig)

export const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<AppRoutes />
			</ThemeProvider>
		</BrowserRouter>
	)
}
