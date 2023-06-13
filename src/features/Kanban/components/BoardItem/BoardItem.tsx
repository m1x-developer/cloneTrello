import React from 'react'
import { ItemProps } from '../../types'
import {
	ActionIcon,
	Badge,
	Card,
	Group,
	Image,
	Menu,
	Text,
} from '@mantine/core'
import { IconDots, IconEye, IconTrash } from '@tabler/icons'

export const BoardItem = ({ description, name, image }: ItemProps) => {
	return (
		<Card shadow="sm" radius="md" withBorder mt={10}>
			<Card.Section withBorder inheritPadding py="xs" mb={10}>
				<Group position="apart">
					<Text weight={500}>{name}</Text>
					<Menu withinPortal position="bottom-end" shadow="sm">
						<Menu.Target>
							<ActionIcon>
								<IconDots size="1rem" />
							</ActionIcon>
						</Menu.Target>

						<Menu.Dropdown>
							<Menu.Item icon={<IconEye size={14} />}>Подробнее</Menu.Item>
							<Menu.Item icon={<IconTrash size={14} />} color="red">
								Удалить
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Group>
			</Card.Section>
			<Card.Section>
				{image && (
					<Image
						src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
						height={160}
						alt="Norway"
					/>
				)}
			</Card.Section>

			<Text size="sm" color="dimmed">
				{description}
			</Text>
			<Group position="apart" mt="md" mb="xs">
				<Badge color="pink" variant="light">
					FIX
				</Badge>
			</Group>
		</Card>
	)
}
