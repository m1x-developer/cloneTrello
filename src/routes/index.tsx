import React from 'react'
import { useRoutes } from 'react-router-dom'
import { protectedRoutes } from './protected'
import { publicRoutes } from './public'

import { useAuth } from '../hooks/useAuth'
import { LoadingOverlay } from '@mantine/core'

export const AppRoutes = () => {
	const { currentUser, userLoading } = useAuth()

	if (userLoading) {
		return <LoadingOverlay visible />
	}

	const routes = currentUser ? protectedRoutes : publicRoutes

	return useRoutes([...routes])
}
