import React from 'react'
import { Button, Card, Flex, Title } from '@mantine/core'
import { board_mock } from '../../../../mock/kanban'
import { BoardItem } from '../../components/BoardItem/BoardItem'
import firebase from 'firebase/compat'

export const Board = () => {
	const auth = firebase.auth()
	console.log(auth)
	return (
		<Flex gap="md" justify="flex-start" wrap="nowrap" p={20}>
			{board_mock.map((board) => {
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
