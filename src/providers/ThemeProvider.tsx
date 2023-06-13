import React from 'react'
import { MantineProvider } from '@mantine/core'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'light',
					headings: {
						fontFamily: 'Roboto, sans-serif',
					},
				}}
			>
				{children}
			</MantineProvider>
		</div>
	)
}

export default ThemeProvider
