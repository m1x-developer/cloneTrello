import React, { useState } from 'react'
import { Button, Card, Flex, Input, Title } from '@mantine/core'
import { board_mock } from '../../../../mock/kanban'
import { BoardItem } from '../../components/BoardItem/BoardItem'

export const Board = () => {
	const [addingCard, setAddingCard] = useState(false)
	const [newCardText, setNewCardText] = useState('')

	console.log(board_mock)
	return (
		<Flex gap="md" justify="flex-start" wrap="nowrap" p={20}>
			{board_mock.map((board) => {
				return (
					<Card
						shadow="sm"
						radius="md"
						withBorder
						sx={{ width: 350 }}
						key={board.id}
					>
						<Title order={2} align={'center'} pb={10}>
							{board.name}
						</Title>
						{/*cards*/}
						{board.cards.map((card) => {
							return (
								<BoardItem
									id={card.id}
									name={card.name}
									description={card.description}
									key={card.id}
								/>
							)
						})}
						{/*/cards*/}
						{!addingCard ? (
							<Button
								variant="light"
								color="blue"
								fullWidth
								mt="md"
								radius="md"
								mb={10}
								onClick={() => setAddingCard(!addingCard)}
							>
								Добавить карточку
							</Button>
						) : (
							<Flex
								gap="xs"
								justify="space-between"
								align="center"
								direction={'column'}
								mt="md"
							>
								<Input
									variant="filled"
									sx={{ width: '100%' }}
									placeholder="Введите текст"
									value={newCardText}
									onChange={(e: {
										target: { value: React.SetStateAction<string> }
									}) => setNewCardText(e.target.value)}
								/>
								{newCardText ? (
									<Button variant="light" color="blue" fullWidth radius="md">
										Добавить карточку
									</Button>
								) : (
									<Button variant="light" color="red" fullWidth radius="md">
										Отменить
									</Button>
								)}
							</Flex>
						)}
					</Card>
				)
			})}
		</Flex>
	)
}
