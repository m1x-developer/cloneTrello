import React from 'react'
import { Group } from '@mantine/core'
import { Board } from './components/Board/Board'
import { generatePath, useNavigate } from 'react-router-dom'
import { PAGES, PARAM_NAMES } from '../../helpers/pages'
import { kanban_mock } from '../../mock/kanban'

export const Kanban = () => {
	const navigate = useNavigate()

	const boardHandler = (id: string) => {
		navigate(
			generatePath(PAGES.BOARD, {
				[PARAM_NAMES.BOARD_ID]: id,
			}),
		)
	}

	return (
		<Group spacing="xl">
			{kanban_mock.map((desks) => {
				return (
					<Board
						key={desks.id}
						image={''}
						title={desks.name}
						onClick={() => boardHandler(desks.id)}
					/>
				)
			})}
		</Group>
	)
}
