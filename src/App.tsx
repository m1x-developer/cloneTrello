import React from 'react'
import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './providers/ThemeProvider'
import './helpers/firebase'
import { AuthProvider } from './providers/AuthProvider'
import { NotificationsProvider } from '@mantine/notifications'

export const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<NotificationsProvider>
						<AppRoutes />
					</NotificationsProvider>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	)
}
