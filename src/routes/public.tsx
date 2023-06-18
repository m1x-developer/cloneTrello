import React from 'react'
import { PAGES } from '../helpers/pages'
import { RegistrationPage } from '../features/Auth/pages/Registration/RegistrationPage'
import { Navigate } from 'react-router-dom'
import { LoginPage } from '../features/Auth/pages/Login/LoginPage'
import { AuthPage } from '../features/Auth/pages/Auth/AuthPage'

export const publicRoutes = [
	{
		path: PAGES.AUTH,
		element: <AuthPage />,
	},
	{
		path: PAGES.REGISTRATION,
		element: <RegistrationPage />,
	},
	{
		path: PAGES.LOGIN,
		element: <LoginPage />,
	},
]
