import { createStyles } from '@mantine/core'

export const useBoardStyles = createStyles((theme) => ({
	card: {
		height: '440px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	title: {
		fontFamily: `Greycliff CF ${theme.fontFamily}`,
		fontWeight: 900,
		color: theme.black,
		lineHeight: 1.2,
		fontSize: '32px',
		marginTop: theme.spacing.xs,
	},
}))
