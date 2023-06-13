import React from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { LoadingOverlay } from '@mantine/core'
import { PAGES } from '../helpers/pages'

export const AppRoutes = () => {
	//вынести в контектст
	const [user, loading] = useAuthState(getAuth())
	const token = localStorage.getItem('accessToken')
	const navigate = useNavigate()

	if (loading) {
		// TODO: Добавьте экран загрузки
		return <LoadingOverlay visible />
	}

	const routes = user ? protectedRoutes : publicRoutes

	return useRoutes([...routes])
}
