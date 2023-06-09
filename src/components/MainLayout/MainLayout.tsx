import React, { useState } from 'react'
import {
	Box,
	Center,
	createStyles,
	Flex,
	Navbar,
	Stack,
	Tooltip,
	UnstyledButton,
} from '@mantine/core'
import {
	IconCalendarStats,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconGauge,
	IconHome2,
	IconLogout,
	IconSettings,
	IconSwitchHorizontal,
	IconUser,
} from '@tabler/icons'
import { Outlet, useNavigate } from 'react-router-dom'
import { MainHeader } from '../Header/Header'
import { useAuth } from '../../hooks/useAuth'
import { useMainLayoutStyles } from './MainLayoutStyles'

interface NavbarLinkProps {
	//TODO FIX ANY
	icon: React.FC<any>
	label: string
	active?: boolean

	onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
	const { classes, cx } = useMainLayoutStyles()
	return (
		<Tooltip label={label} position="right">
			<UnstyledButton
				onClick={onClick}
				className={cx(classes.link, { [classes.active]: active })}
			>
				<Icon size="1.2rem" stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	)
}

//TODO исправить на  класс с роутами
const mockData = [
	{ icon: IconHome2, label: 'Home', route: '/kanban' },
	{ icon: IconGauge, label: 'Dashboard', route: '/dashboard' },
	{ icon: IconDeviceDesktopAnalytics, label: 'Analytics', route: '/analytics' },
	{ icon: IconCalendarStats, label: 'Releases', route: '/releases' },
	{ icon: IconUser, label: 'Account', route: '/account' },
	{ icon: IconFingerprint, label: 'Security', route: '/security' },
	{ icon: IconSettings, label: 'Settings', route: '/settings' },
]

export const MainLayout = () => {
	const { signOut } = useAuth()
	const navigate = useNavigate()
	const [active, setActive] = useState(0)

	const links = mockData.map((link, index) => (
		<NavbarLink
			{...link}
			key={link.label}
			active={index === active}
			onClick={() => {
				setActive(index)
				navigate(link?.route)
			}}
		/>
	))

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Navbar height={'100vh'} width={{ base: 80 }} p="md">
					<Center>logo</Center>
					<Navbar.Section grow mt={50}>
						<Stack justify="center" spacing={0}>
							{links}
						</Stack>
					</Navbar.Section>
					<Navbar.Section>
						<Stack justify="center" spacing={0}>
							<NavbarLink icon={IconSwitchHorizontal} label="Change account" />
							<NavbarLink icon={IconLogout} label="Logout" onClick={signOut} />
						</Stack>
					</Navbar.Section>
				</Navbar>
				<Flex direction={'column'} sx={{ width: '100%' }}>
					<MainHeader />
					<Outlet />
				</Flex>
			</Box>
		</>
	)
}
