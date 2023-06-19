import React, { useEffect, useState } from 'react'
import { Button, Card, Flex, LoadingOverlay, Title } from '@mantine/core'
import { BoardItem } from '../../components/BoardItem/BoardItem'
import useRequest from '../../../../hooks/useRequest'
import { UserCollectionType } from '../../types'
import { fetchUserById } from '../../api'
import { useAuth } from '../../../../hooks/useAuth'

import { useParams } from 'react-router-dom'

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

	const targetBoard =
		userCollection &&
		userCollection.boards.find((board) => board.id === boardId)

	console.log(targetBoard)

	useEffect(() => {
		if (currentUser) {
			getBoards(currentUser?.uid)
		}
	}, [])

	if (!targetBoard) return <LoadingOverlay visible />

	return (
		<Flex gap="md" justify="flex-start" wrap="nowrap" p={20}>
			{targetBoard &&
				targetBoard?.lists.map((board) => {
					console.log(board)
					return (
						<Card
							shadow="sm"
							radius="md"
							withBorder
							sx={{ width: 250 }}
							key={board.id}
							p={10}
						>
							<Title order={3} align={'center'} pb={5}>
								{board.name}
							</Title>
							{/*cards*/}
							{board.cards ? (
								board.cards.map((card, index) => {
									const isLastElem = index === board.cards.length - 1
									return (
										//TODO FIX ME
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
