import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './providers/ThemeProvider'
import './helpers/firebase'
import { AuthProvider } from './providers/AuthProvider'

export const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<AppRoutes />
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	)
}
