import React from 'react'
import { Button, Paper, Title } from '@mantine/core'
import { useBoardStyles } from './BoardStyles'

type BoardProps = {
	image: string
	title: string
	onClick: () => void
}
export const Board = ({ image, title, onClick }: BoardProps) => {
	const { classes } = useBoardStyles()

	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			sx={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		>
			<div>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
			<Button variant="white" color="dark" onClick={onClick}>
				Перейти
			</Button>
		</Paper>
	)
}
