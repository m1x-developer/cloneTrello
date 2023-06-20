import React, { useEffect, useState } from 'react'
import { Button, Card, Flex, LoadingOverlay, Title } from '@mantine/core'
import { BoardItem } from '../../components/BoardItem/BoardItem'
import useRequest from '../../../../hooks/useRequest'
import { UserCollectionType } from '../../types'
import { addNewCardAPI, fetchUserById } from '../../api'
import { useAuth } from '../../../../hooks/useAuth'

import { useParams } from 'react-router-dom'
import { v4 } from 'uuid'

export const Board = () => {
	const { boardId } = useParams()

	const { currentUser } = useAuth()

	const [userCollection, setUserCollection] =
		useState<UserCollectionType | null>()

	const [getBoards, isLoadingBoards] = useRequest<string, UserCollectionType>({
		method: fetchUserById,
		successCallback: (data) => {
			setUserCollection(data)
		},
		failCallback: (e) => console.log(e),
	})

	const currentBoard =
		userCollection &&
		userCollection.boards.find((board) => board.id === boardId)

	const addNewColumnCardHandler = (listId: string, boardId: string) => {
		const cardsItems = currentBoard?.columns.find(
			(column) => column.id === listId,
		)?.columnCards
		const newCard = () => {
			const newCardItem = {
				name: 'Новая карточка',
				id: v4,
			}
			if (cardsItems) {
				return [...cardsItems, newCardItem]
			}
		}

		if (currentUser && boardId) {
			addNewCardAPI({
				currentUser: currentUser,
				boardId: boardId,
			})
		}
	}

	useEffect(() => {
		if (currentUser) {
			getBoards(currentUser?.uid)
		}
	}, [])

	if (!currentBoard) return <LoadingOverlay visible />

	return (
		<Flex gap="md" justify="flex-start" wrap="nowrap" p={20}>
			{currentBoard &&
				currentBoard?.columns.map((column) => {
					return (
						<Card
							shadow="sm"
							radius="md"
							withBorder
							sx={{ width: 250 }}
							key={column.id}
							p={10}
						>
							<Title order={3} align={'center'} pb={5}>
								{column.name}
							</Title>
							{column.columnCards ? (
								column.columnCards.map((card, index) => {
									const isLastElem = index === column.columnCards.length - 1
									return (
										<BoardItem
											key={card.id}
											id={card.id}
											name={card.name}
											description={card.description}
											isLastItem={isLastElem}
										/>
									)
								})
							) : (
								<div>ДОБАВИТЬ </div>
							)}
						</Card>
					)
				})}
			<Button variant="light" color="gray" radius="md">
				Добавить колонку
			</Button>
		</Flex>
	)
}
