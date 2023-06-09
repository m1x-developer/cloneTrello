import { createStyles } from '@mantine/core'

export const useBoardStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	imageSection: {
		padding: theme.spacing.sm,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	label: {
		marginBottom: theme.spacing.xs,
		lineHeight: 1,
		fontWeight: 700,
		fontSize: theme.fontSizes.xs,
		letterSpacing: '0.25px',
		textTransform: 'uppercase',
	},

	section: {
		padding: theme.spacing.md,
	},

	icon: {
		marginRight: 5,
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[2]
				: theme.colors.gray[5],
	},
}))
