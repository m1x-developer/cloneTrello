import React, { useState } from 'react'
import {
	Button,
	Container,
	Paper,
	PasswordInput,
	TextInput,
	Title,
} from '@mantine/core'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export const RegistrationPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignup = () => {
		const auth = getAuth()

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Регистрация успешна
				const user = userCredential.user
				console.log('Регистрация успешна:', user)
			})
			.catch((error) => {
				// Обработка ошибок при регистрации
				const errorCode = error.code
				const errorMessage = error.message
				console.log('Ошибка при регистрации:', errorCode, errorMessage)
			})
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
