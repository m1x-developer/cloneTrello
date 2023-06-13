import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './providers/ThemeProvider'

export const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<AppRoutes />
			</ThemeProvider>
		</BrowserRouter>
	)
}
