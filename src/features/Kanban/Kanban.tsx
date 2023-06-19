import React, { useEffect, useState } from 'react'

import { Board } from './components/Board/Board'
import { generatePath, useNavigate } from 'react-router-dom'
import { PAGES, PARAM_NAMES } from '../../helpers/pages'
import { Button, Group, Input, LoadingOverlay } from '@mantine/core'
import { db } from '../../helpers/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useAuth } from '../../hooks/useAuth'
import { v4 } from 'uuid'
import { UserCollectionType } from './types'
import useRequest from '../../hooks/useRequest'
import { fetchUserById } from './api'

export const Kanban = () => {
	const navigate = useNavigate()
	const { currentUser } = useAuth()
	const userDoc = doc(db, 'users', currentUser ? currentUser.uid : '')
	const [boardValue, setBoardValue] = useState('')

	const [userCollection, setUserCollection] =
		useState<UserCollectionType | null>()

	const [getBoards, isLoadingBoards, dataBoards] = useRequest<
		string,
		UserCollectionType
	>({
		method: fetchUserById,
		successCallback: (data) => {
			setUserCollection(data)
		},
		failCallback: (e) => console.log(e),
	})

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
				getBoards(currentUser.uid)
			} catch (error) {
				console.error(error)
			}
		}
	}

	useEffect(() => {
		if (currentUser) {
			getBoards(currentUser?.uid)
		}
	}, [currentUser?.uid])

	if (isLoadingBoards && !userCollection) return <LoadingOverlay visible />

	return (
		<Group spacing="xl">
			{userCollection?.boards.map((desks) => {
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
