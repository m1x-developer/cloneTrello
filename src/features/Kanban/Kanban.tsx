import React, { useEffect, useState } from 'react'

import { Board } from './components/Board/Board'
import { generatePath, useNavigate } from 'react-router-dom'
import { PAGES, PARAM_NAMES } from '../../helpers/pages'
import { Button, Group, Input, LoadingOverlay, Stack } from '@mantine/core'
import { useAuth } from '../../hooks/useAuth'
import {
	AddNewBoardAPIPayload,
	DeleteBoardAPIPayload,
	UserCollectionType,
} from './types'
import useRequest from '../../hooks/useRequest'
import { addNewBoardAPI, deleteBoardAPI, fetchUserById } from './api'
import { showNotification } from '@mantine/notifications'
import { IconSquareRoundedCheck } from '@tabler/icons'

export const Kanban = () => {
	const navigate = useNavigate()

	const { currentUser } = useAuth()

	const [boardValue, setBoardValue] = useState('')

	const [userCollection, setUserCollection] =
		useState<UserCollectionType | null>()

	const [getBoards, isLoadingBoards] = useRequest<string, UserCollectionType>({
		method: fetchUserById,
		successCallback: (data) => {
			setUserCollection(data)
		},
		failCallback: (e) => console.log(e),
	})

	const [addNewBoard, isLoadingNewBoard] = useRequest<
		AddNewBoardAPIPayload,
		void
	>({
		method: addNewBoardAPI,
		successCallback: () => {
			if (currentUser) {
				getBoards(currentUser?.uid)
				showNotification({
					color: 'green',
					icon: <IconSquareRoundedCheck />,
					message: 'Доска добавлена',
					autoClose: true,
				})
			}
		},
		failCallback: () =>
			showNotification({
				message: 'Не удалось добавить доску',
				autoClose: true,
			}),
	})

	const [deleteBoard, isLoadingDeleteBoard] = useRequest<
		DeleteBoardAPIPayload,
		void
	>({
		method: deleteBoardAPI,
		successCallback: () => {
			if (currentUser) {
				getBoards(currentUser?.uid)
				showNotification({
					color: 'green',
					icon: <IconSquareRoundedCheck />,
					message: 'Доска удалена',
					autoClose: true,
				})
			}
		},
		failCallback: () =>
			showNotification({
				message: 'Не удалось удалить доску',
				autoClose: true,
			}),
	})

	const boardHandler = (id: string) => {
		navigate(
			generatePath(PAGES.BOARD, {
				[PARAM_NAMES.BOARD_ID]: id,
			}),
		)
	}

	const addNewBoardHandler = () => {
		if (currentUser) {
			addNewBoard({ currentUser, boardValue })
			getBoards(currentUser?.uid)
			setBoardValue('')
		}
	}

	const deleteBoardHandler = (index: number) => {
		if (currentUser) {
			deleteBoard({ currentUser, index })
		}
	}

	useEffect(() => {
		if (currentUser) {
			getBoards(currentUser?.uid)
		}
	}, [currentUser?.uid])

	if (
		!userCollection ||
		isLoadingBoards ||
		isLoadingNewBoard ||
		isLoadingDeleteBoard
	)
		return <LoadingOverlay visible />

	return (
		<>
			<Group spacing="xl" p={10}>
				{userCollection?.boards.map((desks, index) => {
					return (
						<Board
							key={desks.id}
							image={'https://i.imgur.com/ZL52Q2D.png'}
							title={desks.name}
							onClick={() => boardHandler(desks.id)}
							deleteBoard={() => deleteBoardHandler(index)}
						/>
					)
				})}
			</Group>
			<Stack w={250}>
				<Input
					placeholder="Название доски"
					value={boardValue}
					onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
						setBoardValue(e.target.value)
					}
				/>
				<Button onClick={addNewBoardHandler}>Добавить доску</Button>
			</Stack>
		</>
	)
}
