import React, { useState } from 'react'
import {
	Button,
	Container,
	Paper,
	PasswordInput,
	TextInput,
	Title,
} from '@mantine/core'
import { useAuth } from '../../../../hooks/useAuth'

export const RegistrationPage = () => {
	const { createUser } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignup = () => {
		createUser(email, password)
	}

	return (
		<Container size={420} my={40}>
			<Title
				align="center"
				sx={(theme) => ({
					fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					fontWeight: 900,
				})}
			>
				Регистрация !
			</Title>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput
					label="Email"
					placeholder="you@test.ru"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordInput
					label="Пароль"
					placeholder="Ваш пароль"
					required
					mt="md"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button fullWidth mt="xl" onClick={handleSignup}>
					Sign in
				</Button>
			</Paper>
		</Container>
	)
}
