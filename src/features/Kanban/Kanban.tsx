import React, { useEffect, useState } from 'react'

import { Board } from './components/Board/Board'
import { generatePath, useNavigate } from 'react-router-dom'
import { PAGES, PARAM_NAMES } from '../../helpers/pages'
import { Button, Group, Input } from '@mantine/core'
import { db } from '../../helpers/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useAuth } from '../../hooks/useAuth'
import { v4 } from 'uuid'

export const Kanban = () => {
	const { currentUser } = useAuth()
	const userDoc = doc(db, 'users', currentUser ? currentUser.uid : '')

	// TODO FIX ANY
	const [userCollection, setUserCollection] = useState<any>([])
	const [boardValue, setBoardValue] = useState('')
	console.log(userCollection.boards)

	const navigate = useNavigate()

	const boardHandler = (id: string) => {
		navigate(
			generatePath(PAGES.BOARD, {
				[PARAM_NAMES.BOARD_ID]: id,
			}),
		)
	}

	const addNewBoard = async () => {
		if (currentUser && boardValue) {
			try {
				const userSnapshot = await getDoc(userDoc)
				const currentBoards = userSnapshot.data()?.boards || []
				const newBoards = [
					...currentBoards,
					{
						id: v4(),
						name: boardValue,
						lists: [],
					},
				]
				await updateDoc(doc(db, 'users', currentUser.uid), {
					boards: newBoards,
				})
				setBoardValue('')
				getBoards()
			} catch (error) {
				console.error(error)
			}
		}
	}
	const getBoards = async () => {
		try {
			const userSnapshot = await getDoc(userDoc)

			if (userSnapshot.exists()) {
				const userData = userSnapshot.data()
				if (userData) {
					setUserCollection(userData)
				}
			}
		} catch (error) {
			console.error(
				'Ошибка при получении пользователя по текущему идентификатору:',
				error,
			)
		}
	}
	console.log(userDoc)
	useEffect(() => {
		getBoards()
	}, [currentUser?.uid])

	return (
		<Group spacing="xl">
			{userCollection.boards &&
				userCollection.boards.map((desks) => {
					return (
						<Board
							key={desks.id}
							image={''}
							title={desks.name}
							onClick={() => boardHandler(desks.id)}
						/>
					)
				})}
			<Input
				placeholder="Название доски"
				value={boardValue}
				onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
					setBoardValue(e.target.value)
				}
			/>
			<Button onClick={addNewBoard}>Добавить доску</Button>
		</Group>
	)
}
