export const PARAM_NAMES = {
	BOARD_ID: 'boardId',
} as const

export const QUERY_NAMES = {} as const

export const ROUTES = {
	BOARD: `board/:${PARAM_NAMES.BOARD_ID}`,
}

export class PAGES {
	static ROOT = '/'

	static AUTH = 'auth'

	static REGISTRATION = `${this.AUTH}/registration`

	static LOGIN = `${this.AUTH}/login`

	static KANBAN = 'kanban'

	static BOARD = `${this.ROOT}${ROUTES.BOARD}`
}
