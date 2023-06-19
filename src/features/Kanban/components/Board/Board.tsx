import React from 'react'
import { Button, Card, Flex, Group, Image, Text } from '@mantine/core'
import { useBoardStyles } from './BoardStyles'

type BoardProps = {
	image: string
	title: string
	onClick: () => void
	deleteBoard: () => void
}
export const Board = ({ image, title, onClick, deleteBoard }: BoardProps) => {
	const { classes } = useBoardStyles()

	return (
		<Card withBorder radius="md" className={classes.card} w={250} h={270}>
			<Card.Section className={classes.imageSection}>
				<Image src={image} />
			</Card.Section>

			<Card.Section className={classes.imageSection}>
				<Group position="apart" mt="xs">
					<Text fw={500}>{title}</Text>
				</Group>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Flex gap={15}>
					<Button variant="filled" color="blue" onClick={onClick}>
						Перейти
					</Button>
					<Button variant="filled" color="red" onClick={deleteBoard}>
						Удалить
					</Button>
				</Flex>
			</Card.Section>
		</Card>
	)
}
