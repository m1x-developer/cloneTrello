import React from 'react'
import { Kanban } from '../features/Kanban/Kanban'
import { MainLayout } from '../components/MainLayout/MainLayout'
import { Board } from '../features/Kanban/pages/Board/Board'
import { PAGES } from '../helpers/pages'

export const protectedRoutes = [
	{
		path: PAGES.ROOT,
		element: <MainLayout />,
		children: [
			{
				path: PAGES.KANBAN,
				element: <Kanban />,
			},
			{
				path: PAGES.BOARD,
				element: <Board />,
			},
		],
	},
]
