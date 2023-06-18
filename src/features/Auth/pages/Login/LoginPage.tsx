import React, { useState } from 'react'
import {
	Anchor,
	Button,
	Checkbox,
	Container,
	Group,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { PAGES } from '../../../../helpers/pages'
import { useAuth } from '../../../../hooks/useAuth'

export const LoginPage = () => {
	const { signIn } = useAuth()
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async () => {
		signIn(email, password)
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
				Авторизация
			</Title>
			<Text color="dimmed" size="sm" align="center" mt={5}>
				Do not have an account yet?{' '}
				<Anchor
					size="sm"
					component="button"
					onClick={() => navigate(PAGES.REGISTRATION)}
				>
					Create account
				</Anchor>
			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<TextInput
					label="Email"
					placeholder="you@test.ru"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<PasswordInput
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="Пароль"
					placeholder="Ваш пароль"
					required
					mt="md"
				/>
				<Group position="apart" mt="lg">
					<Checkbox label="Remember me" />
					<Anchor component="button" size="sm">
						Forgot password?
					</Anchor>
				</Group>
				<Button fullWidth mt="xl" onClick={handleLogin}>
					Sign in
				</Button>
			</Paper>
		</Container>
	)
}
