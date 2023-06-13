import { createStyles } from '@mantine/core'

export const useHeaderProfileStyles = createStyles((theme) => ({
	user: {
		display: 'block',
		width: '100%',
		padding: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		borderRadius: '15px',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[8]
					: theme.colors.gray[0],
		},
	},
}))
