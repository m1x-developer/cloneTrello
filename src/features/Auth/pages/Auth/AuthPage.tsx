import React from 'react'
import { Card, Center, Group, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../../../helpers/pages'

export const AuthPage = () => {
	const navigate = useNavigate()
	return (
		<Center h={'100vh'}>
			<Group position="center" spacing="xl" grow>
				<Card shadow="sm" p="xl" onClick={() => navigate(PAGES.REGISTRATION)}>
					<Card.Section></Card.Section>

					<Text weight={500} size="lg" mt="md">
						Регистрация
					</Text>
				</Card>
				<Card shadow="sm" p="xl" onClick={() => navigate(PAGES.LOGIN)}>
					<Card.Section></Card.Section>

					<Text weight={500} size="lg" mt="md">
						Авторизация
					</Text>
				</Card>
			</Group>
		</Center>
	)
}
