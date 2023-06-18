import React from 'react'
import { Burger, Container, Group, Header } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useHeaderStyles } from './HeaderStyles'
import { UserProfile } from './components/UserProfile'

export const MainHeader = () => {
	const [opened, { toggle }] = useDisclosure(false)
	const { classes } = useHeaderStyles()

	return (
		<Header height={65}>
			<Container className={classes.inner}>
				<Burger
					opened={opened}
					onClick={toggle}
					size="sm"
					className={classes.burger}
				/>
				<Group className={classes.links} spacing={5}></Group>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<UserProfile
						email={'test@mail.ru'}
						image={
							'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
						}
						name={'name'}
					/>
				</Group>
			</Container>
		</Header>
	)
}
