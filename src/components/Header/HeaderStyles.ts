import { createStyles } from '@mantine/core'

export const useHeaderStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,

		[theme.fn.smallerThan('sm')]: {
			justifyContent: 'flex-start',
		},
	},

	links: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	social: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			width: 'auto',
			marginLeft: 'auto',
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: `8px 12px`,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({
				variant: 'light',
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.color,
		},
	},
}))
