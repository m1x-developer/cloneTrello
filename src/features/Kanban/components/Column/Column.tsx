import React, { useState } from 'react'
import { Button, Stack, Textarea } from '@mantine/core'
import { BoardItem } from '../BoardItem/BoardItem'
import { ItemProps } from '../../types'

type ColumnProps = {
	id: number
	name: string
	lists: ItemProps[]
}

export const Column = ({ id, name, lists }: ColumnProps) => {
	const [textAreaValue, setTextAreaValue] = useState('')
	const [items, setItems] = useState<ItemProps[] | []>(lists)

	const onButtonClick = () => {
		// TODO добавить валидацию
		if (textAreaValue === '') return

		// setItems((prevState) => [
		// 	...prevState,
		// 	//TODO FIX id
		// 	{ label: textAreaValue, id: `${Date.now()}` },
		// ])
		setTextAreaValue('')
	}

	return (
		<Stack
			justify="flex-start"
			p={10}
			spacing="xs"
			h={300}
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[8]
						: theme.colors.gray[0],
				borderRadius: 15,
			})}
		>
			<div>{name}</div>

			{lists.length ? (
				items.map((el) => {
					const { name, id, description } = el
					//TODO fix key and id
					return (
						<BoardItem key={id} name={name} id={id} description={description} />
					)
				})
			) : (
				<div>Элементы отсутствуют</div>
			)}
			<Textarea
				value={textAreaValue}
				onChange={(e) => setTextAreaValue(e.target.value)}
			/>
			<Button onClick={onButtonClick}>Отправить</Button>
		</Stack>
	)
}
