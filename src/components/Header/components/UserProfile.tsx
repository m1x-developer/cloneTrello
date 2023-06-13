import React from 'react'
import {
	Avatar,
	Group,
	Text,
	UnstyledButton,
	UnstyledButtonProps,
} from '@mantine/core'
import { IconChevronRight } from '@tabler/icons'
import { useHeaderProfileStyles } from './UserProfileStyles'

interface UserButtonProps extends UnstyledButtonProps {
	image: string
	name: string
	email: string
	icon?: React.ReactNode
}

export const UserProfile = ({
	image,
	name,
	email,
	icon,
	...others
}: UserButtonProps) => {
	const { classes } = useHeaderProfileStyles()

	return (
		<UnstyledButton className={classes.user} {...others}>
			<Group>
				<Avatar src={image} radius="xl" />

				<div style={{ flex: 1 }}>
					<Text size="sm" weight={500}>
						{name}
					</Text>

					<Text color="dimmed" size="xs">
						{email}
					</Text>
				</div>

				{icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
			</Group>
		</UnstyledButton>
	)
}
